import type { PageServerLoad } from './$types.js';
import { db } from '$lib/server/db/index.js';
import { profile, friend } from '$lib/server/db/schema.js';
import { eq, or, and, ne } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
	const userId = locals.user!.id;

	const userProfile = await db.query.profile.findFirst({
		where: eq(profile.userId, userId),
	});

	// Accepted friends
	const friendRows = await db.query.friend.findMany({
		where: and(
			or(eq(friend.senderId, userId), eq(friend.receiverId, userId)),
			eq(friend.status, 'accepted')
		),
	});

	const friendIds = friendRows.map(f => f.senderId === userId ? f.receiverId : f.senderId);

	const friends = friendIds.length > 0
		? await db.query.profile.findMany({
			where: eq(profile.userId, friendIds[0]),
		})
		: [];

	// Recommended — just other users for now
	const recommended = await db.query.profile.findMany({
		where: ne(profile.userId, userId),
		limit: 8,
	});

	return { userProfile, friends, recommended };
};