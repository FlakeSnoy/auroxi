<script lang="ts">
	import type { InferSelectModel } from 'drizzle-orm';
	import type { profile } from '$lib/server/db/schema.js';
	import { ProfileBanner, ProfileCard, BadgeDisplay } from '$lib/components/profile/index.js';

	type UserProfile = InferSelectModel<typeof profile>;
	type PageData = { userProfile: UserProfile | undefined; isOwner: boolean };

	const { data }: { data: PageData } = $props();
	const userProfile = $derived(data.userProfile);
	const isOwner = $derived(data.isOwner);
</script>

<svelte:head>
	<title>@{userProfile?.username ?? 'Profile'} — Auroxi</title>
</svelte:head>

<div class="min-h-screen bg-zinc-900 pb-16">
	<div class="max-w-2xl mx-auto px-4 pt-6 flex flex-col gap-6">

		<ProfileBanner {userProfile} {isOwner} />
		<ProfileCard {userProfile} {isOwner} />

		<div class="border-t border-zinc-800 pt-6 flex flex-col gap-8">

			<!-- Friends -->
			<div class="flex flex-col gap-3">
				<h2 class="text-zinc-500 text-xs font-semibold uppercase tracking-widest">Friends</h2>
				<p class="text-zinc-600 text-sm">No friends yet.</p>
			</div>

			<!-- Badges -->
			<BadgeDisplay {userProfile} />

			<!-- Communities -->
			<div class="flex flex-col gap-3">
				<h2 class="text-zinc-500 text-xs font-semibold uppercase tracking-widest">Communities</h2>
				<p class="text-zinc-600 text-sm">Not in any communities yet.</p>
			</div>

		</div>
	</div>
</div>