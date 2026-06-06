import type { LayoutServerLoad } from './$types.js';
import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import type { InferSelectModel } from 'drizzle-orm';

type Profile = InferSelectModel<typeof profile>;

export const load: LayoutServerLoad = async ({ locals }) => {
  if (!locals.user) throw redirect(302, '/login');

  const userProfile = await db.query.profile.findFirst({
    where: eq(profile.userId, locals.user.id),
  }) as Profile | undefined;

  return { user: locals.user, profileId: userProfile?.profileId ?? null };
};