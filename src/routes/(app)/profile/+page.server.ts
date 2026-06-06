import type { PageServerLoad } from './$types.js';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) throw redirect(302, '/login');

  const userProfile = await db.query.profile.findFirst({
    where: eq(profile.userId, locals.user.id),
  });

  if (!userProfile) throw redirect(302, '/home');
  throw redirect(302, `/users/${userProfile.profileId}/profile`);
};