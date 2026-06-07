import { writable } from 'svelte/store';

export type Notification = {
  id: string;
  type: 'friend_request' | 'message' | 'badge' | 'system' | 'lunes';
  content: string;
  isRead: boolean;
  createdAt: Date;
};

export const notifications = writable<Notification[]>([]);
export const unreadCount = writable(0);