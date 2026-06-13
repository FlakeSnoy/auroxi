import type { PageServerLoad } from './$types.js';
import { db } from '$lib/server/db/index.js';
import { profile, friend, note } from '$lib/server/db/schema.js';
import { eq, or, and, ne, desc } from 'drizzle-orm';

export const load: PageServerLoad = async ({ locals }) => {
	const userId = locals.user!.id;

	const [userProfile, friendRows, feedNotes] = await Promise.all([
		db.query.profile.findFirst({ where: eq(profile.userId, userId) }),

		db.query.friend.findMany({
			where: and(
				or(eq(friend.senderId, userId), eq(friend.receiverId, userId)),
				eq(friend.status, 'accepted')
			),
		}),

		db.query.note.findMany({
			limit: 20,
			orderBy: desc(note.createdAt),
		}),
	]);

	const friendIds = friendRows.map(f => f.senderId === userId ? f.receiverId : f.senderId);

	const friends = friendIds.length > 0
		? await db.query.profile.findMany({
			where: or(...friendIds.map(id => eq(profile.userId, id))),
		})
		: [];

	// Attach author profiles to notes
	const authorIds = [...new Set(feedNotes.map(n => n.authorId))];
	const authors = authorIds.length > 0
		? await db.query.profile.findMany({
			where: or(...authorIds.map(id => eq(profile.userId, id))),
		})
		: [];

	const authorMap = Object.fromEntries(authors.map(a => [a.userId, a]));
	const feed = feedNotes.map(n => ({ ...n, author: authorMap[n.authorId] ?? null }));

	return { userProfile, friends, feed };
};