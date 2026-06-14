import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment';
import { auth } from '$lib/server/auth.js';
import { svelteKitHandler } from 'better-auth/svelte-kit';

const handleBetterAuth: Handle = async ({ event, resolve }) => {
	const pathname = event.url.pathname;
	const isStaticAsset = pathname.includes('.') || pathname === '/favicon.ico';

	if (!isStaticAsset) {
		try {
			const session = await auth.api.getSession({ headers: event.request.headers });

			if (session) {
				event.locals.session = session.session;
				event.locals.user = session.user;
			}
		} catch {
			// Allow public pages to render even if the auth database is temporarily unavailable.
		}
	}

	return svelteKitHandler({ event, resolve, auth, building });
};

export const handle: Handle = handleBetterAuth;
