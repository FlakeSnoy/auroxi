import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import { uploadAvatar, uploadBanner } from '$lib/server/cloudinary.js';

export const load: PageServerLoad = async ({ parent, url }) => {
	const { user, userProfile } = await parent();
	return { user, userProfile, activeTab: url.searchParams.get('tab') ?? 'account' };
};

export const actions: Actions = {
	uploadAvatar: async ({ request, locals }) => {
		if (!locals.user) return fail(401, { message: 'Unauthorized' });
		const formData = await request.formData();
		const file = formData.get('avatar') as File | null;
		if (!file || file.size === 0) return fail(400, { message: 'No file provided' });
		if (file.size > 5 * 1024 * 1024) return fail(400, { message: 'Max 5MB' });
		if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return fail(400, { message: 'JPG, PNG or WebP only' });
		const buffer = Buffer.from(await file.arrayBuffer());
		const url = await uploadAvatar(buffer, locals.user.id);
		await db.update(profile).set({ avatar: url }).where(eq(profile.userId, locals.user.id));
		return { success: true, avatarUrl: url };
	},

	uploadBanner: async ({ request, locals }) => {
		if (!locals.user) return fail(401, { message: 'Unauthorized' });
		const formData = await request.formData();
		const file = formData.get('banner') as File | null;
		if (!file || file.size === 0) return fail(400, { message: 'No file provided' });
		if (file.size > 5 * 1024 * 1024) return fail(400, { message: 'Max 5MB' });
		if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return fail(400, { message: 'JPG, PNG or WebP only' });
		const buffer = Buffer.from(await file.arrayBuffer());
		const url = await uploadBanner(buffer, locals.user.id);
		await db.update(profile).set({ banner: url }).where(eq(profile.userId, locals.user.id));
		return { success: true, bannerUrl: url };
	},

	updateProfile: async ({ request, locals }) => {
		if (!locals.user) return fail(401, { message: 'Unauthorized' });
		const formData = await request.formData();
		const displayName = formData.get('displayName') as string;
		const bio = formData.get('bio') as string;
		const school = formData.get('school') as string;
		const grade = formData.get('grade') as string;
		await db.update(profile).set({ displayName, bio, school, grade }).where(eq(profile.userId, locals.user.id));
		return { success: true };
	},
};