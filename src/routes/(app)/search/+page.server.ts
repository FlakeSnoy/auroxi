import type { PageServerLoad } from './$types.js';
import { db } from '$lib/server/db/index.js';
import { profile, note } from '$lib/server/db/schema.js';
import { like, or } from 'drizzle-orm';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q')?.trim() ?? '';

	if (!q) return { q, people: [], notes: [] };

	const pattern = `%${q}%`;

	const [people, notes] = await Promise.all([
		db.query.profile.findMany({
			where: or(
				like(profile.username, pattern),
				like(profile.displayName, pattern),
				like(profile.school, pattern),
			),
			limit: 10,
		}),
		db.query.note.findMany({
			where: or(
				like(note.title, pattern),
				like(note.subject, pattern),
				like(note.school, pattern),
				like(note.content, pattern),
			),
			limit: 20,
		}),
	]);

	// Attach authors to notes
	const authorIds = [...new Set(notes.map(n => n.authorId))];
	const authors = authorIds.length > 0
		? await db.query.profile.findMany({
			where: or(...authorIds.map(id => like(profile.userId, id))),
		})
		: [];

	const authorMap = Object.fromEntries(authors.map(a => [a.userId, a]));
	const notesWithAuthors = notes.map(n => ({ ...n, author: authorMap[n.authorId] ?? null }));

	return { q, people, notes: notesWithAuthors };
};