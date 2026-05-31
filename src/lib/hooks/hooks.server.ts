import { auth } from '$lib/server/auth.js';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment';

export const handle: Handle = async ({ event, resolve }) => {
  return svelteKitHandler({ event, resolve, auth, building });
};