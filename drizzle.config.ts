import { defineConfig } from 'drizzle-kit';

const databaseUrl = process.env.TURSO_DATABASE_URL ?? process.env.DATABASE_URL;

if (!databaseUrl) throw new Error('DATABASE_URL or TURSO_DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'turso',
	dbCredentials: {
		url: databaseUrl,
		authToken: databaseUrl.startsWith('file:') ? undefined : process.env.TURSO_AUTH_TOKEN,
	},
	verbose: true,
	strict: true
});