<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	const { feed = [], school = '' }: { feed: any[]; school?: string } = $props();

	function timeAgo(date: Date | string | null): string {
		if (!date) return '';
		const d = new Date(date);
		const diff = Date.now() - d.getTime();
		const mins = Math.floor(diff / 60000);
		if (mins < 1) return 'just now';
		if (mins < 60) return `${mins}m ago`;
		const hrs = Math.floor(mins / 60);
		if (hrs < 24) return `${hrs}h ago`;
		return `${Math.floor(hrs / 24)}d ago`;
	}
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-white font-bold text-base">Feed</h2>
			{#if school}
				<p class="text-zinc-600 text-xs mt-0.5">Notes from {school}</p>
			{/if}
		</div>
		<a href="/library" class="text-blue-500 hover:text-blue-400 text-sm transition-colors">Browse library →</a>
	</div>

	{#if feed.length === 0}
		<div class="flex flex-col items-center justify-center py-16 gap-3 border border-zinc-800 rounded-2xl bg-zinc-800/20">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
			</svg>
			<div class="text-center">
				<p class="text-zinc-500 text-sm">No notes from your school yet.</p>
				<p class="text-zinc-700 text-xs mt-0.5">Be the first to publish one.</p>
			</div>
			<a href="/notes" class="text-blue-500 hover:text-blue-400 text-sm transition-colors">
				Publish your first note →
			</a>
		</div>
	{:else}
		<div class="flex flex-col gap-3">
			{#each feed as item}
				<Card.Root class="bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all group cursor-pointer">
					<Card.Content class="p-4 flex flex-col gap-3">

						<!-- Author row -->
						<div class="flex items-center gap-3">
							<a href="/users/{item.author?.profileId}/profile" class="shrink-0">
								{#if item.author?.avatar}
									<img src={item.author.avatar} alt={item.author.username}
										class="w-8 h-8 rounded-full object-cover border border-zinc-800" />
								{:else}
									<div class="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-black text-zinc-500">
										{item.author?.username?.[0]?.toUpperCase() ?? '?'}
									</div>
								{/if}
							</a>
							<div class="flex flex-col min-w-0 flex-1">
								<a href="/users/{item.author?.profileId}/profile"
									class="text-zinc-200 text-sm font-semibold hover:text-white transition-colors truncate leading-tight">
									{item.author?.displayName ?? item.author?.username ?? 'Unknown'}
								</a>
								<span class="text-zinc-600 text-xs">{timeAgo(item.createdAt)}</span>
							</div>
							<div class="flex items-center gap-1.5 shrink-0">
								<span class="text-xs px-2 py-0.5 rounded-lg border border-zinc-800 text-zinc-500">{item.subject}</span>
								{#if item.fileType === 'pdf'}
									<span class="text-xs px-2 py-0.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">PDF</span>
								{:else if item.fileType === 'image'}
									<span class="text-xs px-2 py-0.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">Image</span>
								{/if}
							</div>
						</div>

						<!-- Title + content -->
						<a href="/library/{item.id}" class="flex flex-col gap-1">
							<h3 class="text-white font-bold text-sm group-hover:text-blue-400 transition-colors leading-snug">
								{item.title}
							</h3>
							{#if item.content}
								<p class="text-zinc-500 text-xs leading-relaxed line-clamp-2">{item.content}</p>
							{/if}
						</a>

						<!-- Meta -->
						<div class="flex items-center gap-1.5 text-xs text-zinc-700 flex-wrap">
							<span>{item.school}</span>
							<span>·</span>
							<span>{item.grade}</span>
							<span>·</span>
							<span>{item.country}</span>
						</div>

					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	{/if}
</div>