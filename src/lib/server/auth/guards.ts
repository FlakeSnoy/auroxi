import { redirect } from '@sveltejs/kit';
import { getSession } from './session.js';
import type { RequestEvent } from '@sveltejs/kit';

/**
 * Require the user to be logged in.
 * If not, redirect to /login.
 * Use this in (app) layout.server.ts
 */
export async function requireAuth(event: RequestEvent) {
  const session = await getSession(event);
  if (!session) throw redirect(302, '/login');
  return session;
}

/**
 * Require the user to be logged OUT.
 * If already logged in, redirect to /app.
 * Use this in (auth) register/login page.server.ts
 */
export async function requireGuest(event: RequestEvent) {
  const session = await getSession(event);
  if (session) throw redirect(302, '/app');
}