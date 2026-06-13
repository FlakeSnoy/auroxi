<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	const { friends = [] }: { friends?: any[] } = $props();
</script>

<div class="flex flex-col gap-3">
	<div class="flex items-center justify-between">
		<h2 class="text-white font-bold text-base">
			Friends <span class="text-zinc-500 font-normal text-sm">({friends.length})</span>
		</h2>
		<Button href="/friends" variant="ghost" class="text-blue-500 hover:text-blue-400 text-sm h-auto p-0">
			See All →
		</Button>
	</div>

	<div class="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none">
		<!-- Add Friends -->
		<a href="/search" class="flex flex-col items-center gap-2 shrink-0 group">
			<div class="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center group-hover:bg-zinc-700 group-hover:border-zinc-600 transition-all">
				<svg class="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
				</svg>
			</div>
			<span class="text-zinc-500 text-xs">Add Friends</span>
		</a>

		{#each friends as friend}
			<a href="/users/{friend.profileId}/profile" class="flex flex-col items-center gap-2 shrink-0 group">
				<div class="relative">
					<div class="w-16 h-16 rounded-full overflow-hidden border border-zinc-700/50 group-hover:border-zinc-500 transition-all">
						{#if friend.avatar}
							<img src={friend.avatar} alt={friend.username} class="w-full h-full object-cover" />
						{:else}
							<div class="w-full h-full bg-zinc-800 flex items-center justify-center text-lg font-black text-zinc-500">
								{friend.username?.[0]?.toUpperCase()}
							</div>
						{/if}
					</div>
					{#if friend.isOnline}
						<span class="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-zinc-900"></span>
					{/if}
				</div>
				<span class="text-zinc-400 text-xs group-hover:text-zinc-200 transition-colors truncate max-w-16 text-center">
					{friend.displayName ?? friend.username}
				</span>
			</a>
		{/each}
	</div>
</div>