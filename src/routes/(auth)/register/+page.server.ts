import type { Actions, PageServerLoad } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth.js';
import { requireGuest } from '$lib/server/auth/guards.js';
import { validateEmail, validatePassword, validateUsername } from '$lib/server/auth/password.js';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';

export const load: PageServerLoad = async (event) => {
  await requireGuest(event);
  return {};
};

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();

    const name     = (data.get('name')     as string)?.trim();
    const username = (data.get('username') as string)?.trim().toLowerCase();
    const email    = (data.get('email')    as string)?.trim().toLowerCase();
    const password = (data.get('password') as string);
    const school   = (data.get('school')   as string)?.trim();
    const grade    = (data.get('grade')    as string)?.trim();
    const country  = (data.get('country')  as string)?.trim();

    if (!name) return fail(400, { error: 'Name is required.', field: 'name' });

    const emailError = validateEmail(email);
    if (emailError) return fail(400, { error: emailError, field: 'email' });

    const usernameError = validateUsername(username);
    if (usernameError) return fail(400, { error: usernameError, field: 'username' });

    const passwordError = validatePassword(password);
    if (passwordError) return fail(400, { error: passwordError, field: 'password' });

    if (!school || !grade || !country) {
      return fail(400, { error: 'School, grade and country are required.', field: 'school' });
    }

    const result = await auth.api.signUpEmail({
      body: { name, email, password },
      headers: event.request.headers,
      asResponse: true,
    });

    if (!result.ok) {
      const body = await result.json().catch(() => ({})) as { message?: string };
      return fail(400, {
        error: body?.message ?? 'Registration failed. Email may already be in use.',
        field: 'email',
      });
    }

    const resBody = await result.json() as { user?: { id: string } };
    const userId = resBody?.user?.id;

    if (!userId) return fail(500, { error: 'Could not get user ID after registration.', field: '' });

    await db.insert(profile).values({
      username,
      displayName: name,
      school,
      grade,
      userId,
    });

    throw redirect(302, '/home');
  }
};