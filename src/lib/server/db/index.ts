import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema.js';
import { DATABASE_URL, TURSO_AUTH_TOKEN } from '$env/static/private';

if (!DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!TURSO_AUTH_TOKEN) throw new Error('TURSO_AUTH_TOKEN is not set');

const client = createClient({
	url: DATABASE_URL,
	authToken: TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
