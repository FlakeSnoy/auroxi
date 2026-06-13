<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	const { feed = [] }: { feed: any[] } = $props();

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
		<h2 class="text-white font-bold text-base">Feed</h2>
		<a href="/library" class="text-blue-500 hover:text-blue-400 text-sm transition-colors">Browse library →</a>
	</div>

	{#if feed.length === 0}
		<div class="flex flex-col items-center justify-center py-16 gap-3 border border-zinc-800 rounded-2xl bg-zinc-800/20">
			<span class="text-4xl">📭</span>
			<p class="text-zinc-500 text-sm">No notes published yet.</p>
			<a href="/workshop" class="text-blue-500 hover:text-blue-400 text-sm transition-colors">
				Publish your first note →
			</a>
		</div>
	{:else}
		<div class="flex flex-col gap-3">
			{#each feed as item}
				<Card.Root class="bg-zinc-800/20 border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all group">
					<Card.Content class="p-4 flex flex-col gap-3">

						<!-- Author -->
						<div class="flex items-center gap-3">
							<a href="/users/{item.author?.profileId}/profile" class="shrink-0">
								<div class="w-8 h-8 rounded-full overflow-hidden bg-zinc-700 border border-zinc-700/50">
									{#if item.author?.avatar}
										<img src={item.author.avatar} alt={item.author.username} class="w-full h-full object-cover" />
									{:else}
										<div class="w-full h-full flex items-center justify-center text-xs font-black text-zinc-500">
											{item.author?.username?.[0]?.toUpperCase() ?? '?'}
										</div>
									{/if}
								</div>
							</a>
							<div class="flex flex-col min-w-0 flex-1">
								<a href="/users/{item.author?.profileId}/profile" class="text-zinc-200 text-sm font-semibold hover:text-white transition-colors truncate">
									{item.author?.displayName ?? item.author?.username ?? 'Unknown'}
								</a>
								<span class="text-zinc-600 text-xs">{timeAgo(item.createdAt)}</span>
							</div>
							<div class="flex items-center gap-2 shrink-0">
								<Badge variant="outline" class="border-zinc-700 text-zinc-400 text-xs rounded-lg">
									{item.subject}
								</Badge>
								{#if item.fileType === 'pdf'}
									<Badge class="bg-red-500/15 text-red-400 border-red-500/20 text-xs rounded-lg">PDF</Badge>
								{:else if item.fileType === 'image'}
									<Badge class="bg-purple-500/15 text-purple-400 border-purple-500/20 text-xs rounded-lg">Image</Badge>
								{/if}
							</div>
						</div>

						<!-- Title + content -->
						<a href="/library/{item.id}" class="flex flex-col gap-1">
							<h3 class="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">
								{item.title}
							</h3>
							{#if item.content}
								<p class="text-zinc-500 text-xs leading-relaxed line-clamp-2">{item.content}</p>
							{/if}
						</a>

						<!-- Meta -->
						<div class="flex items-center gap-2 text-xs text-zinc-600 flex-wrap">
							<span>{item.school}</span>
							<span>·</span>
							<span>Grade {item.grade}</span>
							<span>·</span>
							<span>{item.country}</span>
						</div>

					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	{/if}
</div>