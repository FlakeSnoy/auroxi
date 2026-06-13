<script lang="ts">
	import type { InferSelectModel } from 'drizzle-orm';
	import type { profile } from '$lib/server/db/schema.js';
	import { Button } from '$lib/components/ui/button/index.js';

	type Profile = InferSelectModel<typeof profile>;
	const { userProfile, isOwner = false }: { userProfile: Profile | undefined; isOwner?: boolean } = $props();
</script>

<div class="relative rounded-2xl overflow-visible">

	<!-- Banner -->
	<div class="w-full h-52 rounded-2xl overflow-hidden">
		{#if userProfile?.banner}
			<img src={userProfile.banner} alt="banner" class="w-full h-full object-cover" />
		{:else}
			<div class="w-full h-full bg-linear-to-br from-zinc-800 via-zinc-800 to-blue-900/40"></div>
		{/if}

		{#if isOwner}
			<div class="absolute bottom-3 right-3">
				<Button
					href="/settings?tab=account"
					variant="outline"
					class="bg-zinc-900/80 backdrop-blur border-zinc-700 text-white hover:bg-zinc-800 rounded-full text-xs px-4 h-8"
				>
					Edit profile
				</Button>
			</div>
		{/if}
	</div>

	<!-- Avatar overlapping banner -->
	<div class="absolute -bottom-14 left-6">
		<div class="relative">
			<div class="w-28 h-28 rounded-full border-4 border-zinc-900 overflow-hidden bg-zinc-800">
				{#if userProfile?.avatar}
					<img src={userProfile.avatar} alt={userProfile.username} class="w-full h-full object-cover" />
				{:else}
					<div class="w-full h-full flex items-center justify-center text-3xl font-black text-zinc-500">
						{userProfile?.username?.[0]?.toUpperCase() ?? '?'}
					</div>
				{/if}
			</div>
			{#if userProfile?.isOnline}
				<span class="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-zinc-900"></span>
			{/if}
		</div>
	</div>
</div>

<!-- Spacer for avatar -->
<div class="h-16"></div>