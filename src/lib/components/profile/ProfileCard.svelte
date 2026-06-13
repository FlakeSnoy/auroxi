<script lang="ts">
	import type { InferSelectModel } from 'drizzle-orm';
	import type { profile } from '$lib/server/db/schema.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	type Profile = InferSelectModel<typeof profile>;
	const { userProfile, isOwner = false }: { userProfile: Profile | undefined; isOwner?: boolean } = $props();
</script>

<div class="flex flex-col gap-4">

	<!-- Name row -->
	<div class="flex items-start justify-between gap-4">
		<div class="flex flex-col gap-1">
			<div class="flex items-center gap-2">
				<h1 class="text-white font-black text-2xl leading-none">
					{userProfile?.displayName ?? userProfile?.username}
				</h1>
				{#if userProfile?.isPremium}
					<span class="text-yellow-400 text-base" title="Premium">✦</span>
				{/if}
			</div>
			<p class="text-zinc-500 text-sm">@{userProfile?.username}</p>
		</div>

		{#if isOwner}
			<div class="flex items-center gap-2 shrink-0">
				<Button
					href="/settings?tab=account"
					variant="outline"
					class="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 rounded-xl h-9 px-4 text-sm"
				>
					Edit avatar
				</Button>
				<Button
					href="/settings?tab=account"
					class="bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-9 px-4 text-sm font-semibold"
				>
					Edit profile
				</Button>
			</div>
		{:else}
			<div class="flex items-center gap-2 shrink-0">
				<Button
					variant="outline"
					class="border-zinc-700 text-zinc-300 hover:text-white rounded-xl h-9 px-4 text-sm"
				>
					Message
				</Button>
				<Button
					class="bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-9 px-4 text-sm font-semibold"
				>
					Add Friend
				</Button>
			</div>
		{/if}
	</div>

	<!-- Bio -->
	{#if userProfile?.bio}
		<p class="text-zinc-400 text-sm leading-relaxed max-w-lg">{userProfile.bio}</p>
	{/if}

	<!-- Badges row -->
	<div class="flex items-center gap-2 flex-wrap">
		<Badge class="bg-blue-600/15 text-blue-400 border-blue-500/20 rounded-lg text-xs">
			{userProfile?.lunes ?? 0} Lunes
		</Badge>
		{#if userProfile?.school}
			<Badge variant="outline" class="border-zinc-700 text-zinc-400 rounded-lg text-xs">
				{userProfile.school}{userProfile.grade ? ` · ${userProfile.grade}` : ''}
			</Badge>
		{/if}
		{#if userProfile?.isPremium}
			<Badge class="bg-yellow-500/15 text-yellow-400 border-yellow-500/20 rounded-lg text-xs">
				✦ Premium
			</Badge>
		{/if}
	</div>

	<!-- Stats row -->
	<div class="flex items-center gap-6 pt-1">
		<button type="button" class="flex flex-col items-start hover:opacity-80 transition-opacity">
			<span class="text-white font-bold text-base">0</span>
			<span class="text-zinc-500 text-xs">Friends</span>
		</button>
		<button type="button" class="flex flex-col items-start hover:opacity-80 transition-opacity">
			<span class="text-white font-bold text-base">0</span>
			<span class="text-zinc-500 text-xs">Followers</span>
		</button>
		<button type="button" class="flex flex-col items-start hover:opacity-80 transition-opacity">
			<span class="text-white font-bold text-base">0</span>
			<span class="text-zinc-500 text-xs">Following</span>
		</button>
	</div>

</div>