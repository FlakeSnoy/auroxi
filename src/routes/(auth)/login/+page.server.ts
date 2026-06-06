import type { Actions, PageServerLoad } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth.js';
import { requireGuest } from '$lib/server/auth/guards.js';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async (event) => {
  await requireGuest(event);
  return {};
};

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();

    const email    = (data.get('email') as string)?.trim().toLowerCase();
    const password = (data.get('password') as string);

    if (!email || !password) {
      return fail(400, { error: 'Email and password are required.', field: 'email' });
    }

    const result = await auth.api.signInEmail({
      body: { email, password },
      headers: event.request.headers,
      asResponse: true,
    });

    if (!result.ok) {
      return fail(400, { error: 'Incorrect email or password.', field: 'email' });
    }

    const resBody = await result.json() as { user?: { id: string; name: string } };
    const userId = resBody?.user?.id;
    const userName = resBody?.user?.name;

    if (userId) {
      const existing = await db.query.profile.findFirst({
        where: eq(profile.userId, userId),
      });

      if (!existing && userName) {
        await db.insert(profile).values({
          username: userName.toLowerCase().replace(/\s+/g, '_'),
          displayName: userName,
          userId,
        });
      }
    }

    throw redirect(302, '/home');
  }
};