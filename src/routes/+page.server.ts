import type { PageServerLoad } from './$types.js';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
  // If user is already logged in, send them straight to the dashboard
  const session = locals.session;
  if (session) {
    throw redirect(302, '/home');
  }

  // Nothing to load for the landing page — it's fully static
  return {};
};