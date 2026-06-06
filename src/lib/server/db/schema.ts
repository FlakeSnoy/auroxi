import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { relations, sql } from 'drizzle-orm';

export * from './auth.schema.js';

const timestamp = (name: string) =>
  integer(name, { mode: 'timestamp_ms' })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull();

export const profile = sqliteTable('profile', {
  profileId:    integer('profile_id').primaryKey({ autoIncrement: true }),
  id:           text('id').notNull().unique().$defaultFn(() => crypto.randomUUID()),
  userId:       text('user_id').notNull().unique(),
  username:     text('username').notNull().unique(),
  displayName:  text('display_name'),
  bio:          text('bio'),
  avatar:       text('avatar'),
  banner:       text('banner'),
  school:       text('school'),
  grade:        text('grade'),
  isOnline:     integer('is_online', { mode: 'boolean' }).default(false).notNull(),
  isPremium:    integer('is_premium', { mode: 'boolean' }).default(false).notNull(),
  premiumUntil: integer('premium_until', { mode: 'timestamp_ms' }),
  lunes:        integer('lunes').default(0).notNull(),
  lastClaim:    integer('last_claim', { mode: 'timestamp_ms' }),
  createdAt:    timestamp('created_at'),
});

export const badge = sqliteTable('badge', {
  id:          text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name:        text('name').notNull(),
  description: text('description'),
  icon:        text('icon').notNull(),
  color:       text('color').notNull(),
});

export const userBadge = sqliteTable('user_badge', {
  id:        text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId:    text('user_id').notNull(),
  badgeId:   text('badge_id').notNull(),
  awardedAt: timestamp('awarded_at'),
});

export const friend = sqliteTable('friend', {
  id:         text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  senderId:   text('sender_id').notNull(),
  receiverId: text('receiver_id').notNull(),
  status:     text('status').notNull().default('pending'),
  createdAt:  timestamp('created_at'),
});

export const note = sqliteTable('note', {
  id:        text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  authorId:  text('author_id').notNull(),
  title:     text('title').notNull(),
  content:   text('content'),
  school:    text('school').notNull(),
  country:   text('country').notNull(),
  grade:     text('grade').notNull(),
  subject:   text('subject').notNull(),
  fileType:  text('file_type').notNull().default('text'),
  imageUrl:  text('image_url'),
  pdfUrl:    text('pdf_url'),
  createdAt: timestamp('created_at'),
});

export const group = sqliteTable('group', {
  id:          text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name:        text('name').notNull(),
  description: text('description'),
  ownerId:     text('owner_id').notNull(),
  school:      text('school'),
  subject:     text('subject'),
  isPrivate:   integer('is_private', { mode: 'boolean' }).default(false).notNull(),
  createdAt:   timestamp('created_at'),
});

export const groupMember = sqliteTable('group_member', {
  id:       text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  groupId:  text('group_id').notNull(),
  userId:   text('user_id').notNull(),
  role:     text('role').notNull().default('member'),
  joinedAt: timestamp('joined_at'),
});

export const message = sqliteTable('message', {
  id:         text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  senderId:   text('sender_id').notNull(),
  receiverId: text('receiver_id'),
  groupId:    text('group_id'),
  content:    text('content').notNull(),
  isSystem:   integer('is_system', { mode: 'boolean' }).default(false).notNull(),
  flagged:    integer('flagged', { mode: 'boolean' }).default(false).notNull(),
  createdAt:  timestamp('created_at'),
});

export const notification = sqliteTable('notification', {
  id:        text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId:    text('user_id').notNull(),
  type:      text('type').notNull(),
  content:   text('content').notNull(),
  isRead:    integer('is_read', { mode: 'boolean' }).default(false).notNull(),
  createdAt: timestamp('created_at'),
});

export const lunesTransaction = sqliteTable('lunes_transaction', {
  id:        text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId:    text('user_id').notNull(),
  amount:    integer('amount').notNull(),
  type:      text('type').notNull(),
  createdAt: timestamp('created_at'),
});

export const report = sqliteTable('report', {
  id:         text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  reporterId: text('reporter_id').notNull(),
  targetId:   text('target_id').notNull(),
  targetType: text('target_type').notNull(),
  reason:     text('reason').notNull(),
  resolved:   integer('resolved', { mode: 'boolean' }).default(false).notNull(),
  createdAt:  timestamp('created_at'),
});

export const profileRelations = relations(profile, ({ many }) => ({
  badges:            many(userBadge),
  sentFriends:       many(friend, { relationName: 'sender' }),
  receivedFriends:   many(friend, { relationName: 'receiver' }),
  notes:             many(note),
  groups:            many(groupMember),
  notifications:     many(notification),
  lunesTransactions: many(lunesTransaction),
}));

export const noteRelations = relations(note, ({ one }) => ({
  author: one(profile, { fields: [note.authorId], references: [profile.userId] }),
}));

export const groupRelations = relations(group, ({ many, one }) => ({
  members: many(groupMember),
  owner:   one(profile, { fields: [group.ownerId], references: [profile.userId] }),
}));

export const messageRelations = relations(message, ({ one }) => ({
  sender: one(profile, { fields: [message.senderId], references: [profile.userId] }),
  group:  one(group,   { fields: [message.groupId],  references: [group.id] }),
}));

export const friendRelations = relations(friend, ({ one }) => ({
  sender:   one(profile, { fields: [friend.senderId],   references: [profile.userId], relationName: 'sender' }),
  receiver: one(profile, { fields: [friend.receiverId], references: [profile.userId], relationName: 'receiver' }),
}));