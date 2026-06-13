<script lang="ts">
	import type { InferSelectModel } from 'drizzle-orm';
	import type { profile } from '$lib/server/db/schema.js';

	type Profile = InferSelectModel<typeof profile>;
	const { userProfile }: { userProfile: Profile | undefined } = $props();

	const badges: { name: string; icon: string; color: string; description: string }[] = [];
</script>

<div class="flex flex-col gap-3 pt-2">
	<h2 class="text-zinc-500 text-xs font-semibold uppercase tracking-widest">Badges</h2>
	{#if badges.length > 0}
		<div class="flex flex-wrap gap-2">
			{#each badges as badge}
				<div
					title={badge.description}
					class="w-10 h-10 rounded-xl flex items-center justify-center text-lg border border-zinc-800 bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-default"
					style="color: {badge.color}"
				>
					{badge.icon}
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-zinc-600 text-sm">No badges yet.</p>
	{/if}
</div>