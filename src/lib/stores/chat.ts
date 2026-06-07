import { writable } from 'svelte/store';

export type Message = {
  id: string;
  senderId: string;
  content: string;
  createdAt: Date;
  groupId?: string | null;
  receiverId?: string | null;
};

export const messages = writable<Message[]>([]);
export const activeChat = writable<string | null>(null);