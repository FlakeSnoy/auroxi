import { writable } from 'svelte/store';

export const onlineUsers = writable<Set<string>>(new Set());

export function setOnline(userId: string) {
  onlineUsers.update(s => { s.add(userId); return s; });
}

export function setOffline(userId: string) {
  onlineUsers.update(s => { s.delete(userId); return s; });
}