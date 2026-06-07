import { writable } from 'svelte/store';
import type { User } from 'better-auth';

export const userStore = writable<User | null>(null);