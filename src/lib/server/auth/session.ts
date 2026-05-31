import { auth } from '$lib/server/auth.js';
import type { RequestEvent } from '@sveltejs/kit';

/**
 * Get the current session from a SvelteKit request event.
 * Returns null if no valid session exists.
 */
export async function getSession(event: RequestEvent) {
  return auth.api.getSession({ headers: event.request.headers });
}

/**
 * Get just the user from the current session.
 * Returns null if not logged in.
 */
export async function getUser(event: RequestEvent) {
  const session = await getSession(event);
  return session?.user ?? null;
}