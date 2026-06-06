import type { PageServerLoad } from './$types.js';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import type { InferSelectModel } from 'drizzle-orm';

type Profile = InferSelectModel<typeof profile>;

export const load: PageServerLoad = async ({ params, locals }) => {
  const userProfile = await db.query.profile.findFirst({
    where: eq(profile.profileId, Number(params.id)),
  }) as Profile | undefined;

  return { userProfile, isOwner: locals.user?.id === userProfile?.userId };
};