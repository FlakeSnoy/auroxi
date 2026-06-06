import type { PageServerLoad, Actions } from './$types.js';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import { uploadAvatar } from '$lib/server/cloudinary.js';
import { fail } from '@sveltejs/kit';
import type { InferSelectModel } from 'drizzle-orm';

type Profile = InferSelectModel<typeof profile>;

export const load: PageServerLoad = async ({ params, locals }) => {
  const userProfile = await db.query.profile.findFirst({
    where: eq(profile.profileId, Number(params.id)),
  }) as Profile | undefined;

  return { userProfile, isOwner: locals.user?.id === userProfile?.userId };
};

export const actions: Actions = {
  uploadAvatar: async ({ request, locals }) => {
    if (!locals.user) return fail(401, { error: 'Unauthorized' });
    const form = await request.formData();
    const file = form.get('avatar') as File;
    if (!file || !file.size) return fail(400, { error: 'No file provided' });
    if (file.size > 5 * 1024 * 1024) return fail(400, { error: 'File too large. Max 5MB.' });
    if (!['image/jpeg','image/png','image/webp'].includes(file.type)) return fail(400, { error: 'Only JPG, PNG and WebP allowed.' });
    const buffer = Buffer.from(await file.arrayBuffer());
    const url = await uploadAvatar(buffer, locals.user.id);
    await db.update(profile).set({ avatar: url }).where(eq(profile.userId, locals.user.id));
    return { success: true, url };
  },
};