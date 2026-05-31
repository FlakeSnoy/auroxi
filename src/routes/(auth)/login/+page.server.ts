import type { Actions, PageServerLoad } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth.js';
import { requireGuest } from '$lib/server/auth/guards.js';

export const load: PageServerLoad = async (event) => {
  // Already logged in? Send to /app
  await requireGuest(event);
  return {};
};

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();

    const email    = (data.get('email')    as string)?.trim().toLowerCase();
    const password = (data.get('password') as string);

    if (!email || !password) {
      return fail(400, { error: 'Email and password are required.', field: 'email' });
    }

    // ── Sign in via Better Auth ───────────────────────────
    const result = await auth.api.signInEmail({
      body: { email, password },
      headers: event.request.headers,
      asResponse: true,
    });

    if (!result.ok) {
      return fail(400, {
        error: 'Incorrect email or password.',
        field: 'email',
      });
    }

    throw redirect(302, '/app');
  }
};