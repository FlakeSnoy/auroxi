import type { PageServerLoad } from './$types.js';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
  const userProfile = await db.query.profile.findFirst({
    where: eq(profile.userId, locals.user!.id),
  });

  return { userProfile };
};