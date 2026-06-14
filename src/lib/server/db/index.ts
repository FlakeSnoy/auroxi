import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema.js';
import { env } from '$env/dynamic/private';

const databaseUrl = env['TURSO_DATABASE_URL'] ?? env['DATABASE_URL'];

if (!databaseUrl) throw new Error('DATABASE_URL or TURSO_DATABASE_URL is not set');
const authToken = env['TURSO_AUTH_TOKEN'];

const client = databaseUrl.startsWith('file:')
	? createClient({ url: databaseUrl })
	: createClient({
		url: databaseUrl,
		authToken,
	});

export const db = drizzle(client, { schema });
