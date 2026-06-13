<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const { users = [], loading = false }: { users?: any[]; loading?: boolean } = $props();
</script>

<div class="flex flex-col gap-3">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-white font-bold text-base">Recommended For You</h2>
			<p class="text-zinc-500 text-xs mt-0.5">People you might know</p>
		</div>
		<Button href="/search" variant="ghost" class="text-blue-500 hover:text-blue-400 text-sm h-auto p-0">
			See more →
		</Button>
	</div>

	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
		{#if loading || users.length === 0}
			{#each Array(4) as _}
				<Card.Root class="bg-zinc-800/30 border-zinc-800 rounded-2xl">
					<Card.Content class="p-4 flex flex-col items-center gap-3">
						<div class="w-14 h-14 rounded-full bg-zinc-700/50 animate-pulse"></div>
						<div class="w-20 h-3 rounded-full bg-zinc-700/50 animate-pulse"></div>
						<div class="w-14 h-2.5 rounded-full bg-zinc-700/30 animate-pulse"></div>
					</Card.Content>
				</Card.Root>
			{/each}
		{:else}
			{#each users as user}
				<Card.Root class="bg-zinc-800/30 border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all group">
					<Card.Content class="p-4 flex flex-col items-center gap-3">
						<a href="/users/{user.profileId}/profile">
							<div class="w-14 h-14 rounded-full overflow-hidden border border-zinc-700/50 group-hover:border-zinc-500 transition-all">
								{#if user.avatar}
									<img src={user.avatar} alt={user.username} class="w-full h-full object-cover" />
								{:else}
									<div class="w-full h-full bg-zinc-800 flex items-center justify-center text-lg font-black text-zinc-500">
										{user.username?.[0]?.toUpperCase()}
									</div>
								{/if}
							</div>
						</a>
						<div class="flex flex-col items-center gap-0.5 text-center">
							<p class="text-zinc-200 font-semibold text-sm truncate max-w-25">
								{user.displayName ?? user.username}
							</p>
							<p class="text-zinc-500 text-xs">@{user.username}</p>
						</div>
						<Button
							href="/users/{user.profileId}/profile"
							class="w-full h-8 text-xs rounded-xl bg-blue-600/15 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/20 hover:border-blue-600 transition-all"
						>
							View profile
						</Button>
					</Card.Content>
				</Card.Root>
			{/each}
		{/if}
	</div>
</div>