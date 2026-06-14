import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { DATABASE_URL, TURSO_AUTH_TOKEN } from '$env/static/private';
import * as schema from './schema.js';

const client = createClient({
	url: DATABASE_URL,
	authToken: TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });