<script lang="ts">
	const { data }: { data: any } = $props();

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

<svelte:head><title>{data.q ? `"${data.q}" — Search` : 'Search'} · Auroxi</title></svelte:head>

<div class="p-6 flex flex-col gap-8 max-w-2xl">

	{#if !data.q}
		<div class="flex flex-col items-center justify-center py-24 gap-3">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
			</svg>
			<p class="text-zinc-500 text-sm">Search for people, notes, or subjects.</p>
		</div>

	{:else if data.people.length === 0 && data.notes.length === 0}
		<div class="flex flex-col items-center justify-center py-24 gap-3">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
			</svg>
			<p class="text-zinc-500 text-sm">No results for <span class="text-zinc-300">"{data.q}"</span></p>
		</div>

	{:else}
		<p class="text-zinc-600 text-xs">Results for <span class="text-zinc-300 font-medium">"{data.q}"</span></p>

		{#if data.people.length > 0}
			<div class="flex flex-col gap-3">
				<h2 class="text-zinc-400 text-xs font-semibold uppercase tracking-widest">People</h2>
				{#each data.people as person}
					<a href="/users/{person.profileId}/profile"
						class="flex items-center gap-3 p-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all">
						{#if person.avatar}
							<img src={person.avatar} alt={person.username} class="w-10 h-10 rounded-full object-cover border border-zinc-800 shrink-0" />
						{:else}
							<div class="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-black text-zinc-500 shrink-0">
								{person.username?.[0]?.toUpperCase() ?? '?'}
							</div>
						{/if}
						<div class="flex flex-col min-w-0">
							<p class="text-zinc-200 text-sm font-semibold truncate">{person.displayName ?? person.username}</p>
							<p class="text-zinc-500 text-xs">@{person.username}{person.school ? ` · ${person.school}` : ''}</p>
						</div>
						{#if person.isPremium}
							<span class="ml-auto text-xs px-2 py-0.5 rounded-full bg-blue-600/15 text-blue-400 border border-blue-500/20 shrink-0">✦ Premium</span>
						{/if}
					</a>
				{/each}
			</div>
		{/if}

		{#if data.notes.length > 0}
			<div class="flex flex-col gap-3">
				<h2 class="text-zinc-400 text-xs font-semibold uppercase tracking-widest">Notes</h2>
				{#each data.notes as item}
					<a href="/library/{item.id}"
						class="flex flex-col gap-2.5 p-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all group">
						<div class="flex items-center gap-2 min-w-0">
							{#if item.author?.avatar}
								<img src={item.author.avatar} alt={item.author.username} class="w-6 h-6 rounded-full object-cover border border-zinc-800 shrink-0" />
							{:else}
								<div class="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-500 shrink-0">
									{item.author?.username?.[0]?.toUpperCase() ?? '?'}
								</div>
							{/if}
							<span class="text-zinc-500 text-xs truncate">@{item.author?.username ?? 'unknown'}</span>
							<span class="text-zinc-700 text-xs ml-auto shrink-0">{timeAgo(item.createdAt)}</span>
						</div>
						<h3 class="text-white text-sm font-bold group-hover:text-blue-400 transition-colors leading-snug">{item.title}</h3>
						{#if item.content}
							<p class="text-zinc-500 text-xs leading-relaxed line-clamp-2">{item.content}</p>
						{/if}
						<div class="flex items-center gap-1.5 flex-wrap">
							<span class="text-xs px-2 py-0.5 rounded-lg border border-zinc-800 text-zinc-500">{item.subject}</span>
							<span class="text-xs px-2 py-0.5 rounded-lg border border-zinc-800 text-zinc-500">{item.grade}</span>
							<span class="text-xs px-2 py-0.5 rounded-lg border border-zinc-800 text-zinc-500">{item.school}</span>
							{#if item.fileType === 'pdf'}
								<span class="text-xs px-2 py-0.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">PDF</span>
							{:else if item.fileType === 'image'}
								<span class="text-xs px-2 py-0.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">Image</span>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</div>