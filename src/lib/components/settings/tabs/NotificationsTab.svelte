<script lang="ts">
	const { notifications = [] }: { notifications: any[] } = $props();

	// Group by type for display
	const typeLabel: Record<string, string> = {
		follow:       'started following you',
		friend:       'sent you a friend request',
		comment:      'commented on your note',
		like:         'liked your note',
		mention:      'mentioned you',
		reply:        'replied to your comment',
		lunes:        'You earned Lunes',
		announcement: 'Announcement',
	};

	function timeAgo(date: string | Date) {
		const diff = Date.now() - new Date(date).getTime();
		const m = Math.floor(diff / 60000);
		if (m < 1) return 'just now';
		if (m < 60) return `${m}m ago`;
		const h = Math.floor(m / 60);
		if (h < 24) return `${h}h ago`;
		return `${Math.floor(h / 24)}d ago`;
	}
</script>

<div class="flex flex-col">
	{#if notifications.length === 0}
		<div class="py-16 flex flex-col items-center gap-2">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3f3f46" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
			</svg>
			<p class="text-zinc-600 text-sm">No notifications yet</p>
		</div>
	{:else}
		{#each notifications as notif, i (notif.id)}
			<div class="flex items-start gap-3 py-3.5 {i < notifications.length - 1 ? 'border-b border-zinc-800/60' : ''} {!notif.read ? 'relative' : ''}">

				{#if !notif.read}
					<span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-blue-500"></span>
				{/if}

				<!-- Actor avatar -->
				{#if notif.actor?.avatar}
					<img src={notif.actor.avatar} alt={notif.actor.username}
						class="w-8 h-8 rounded-full object-cover shrink-0 mt-0.5" />
				{:else if notif.actor}
					<div class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 shrink-0 mt-0.5">
						{notif.actor.username?.[0]?.toUpperCase() ?? '?'}
					</div>
				{:else}
					<div class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" stroke-width="2" stroke-linecap="round">
							<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
						</svg>
					</div>
				{/if}

				<div class="flex flex-col gap-0.5 flex-1 min-w-0">
					<p class="text-sm text-zinc-200 leading-snug">
						{#if notif.actor}
							<span class="font-semibold text-white">@{notif.actor.username}</span>{' '}
						{/if}
						{typeLabel[notif.type] ?? notif.message ?? 'sent you a notification'}
						{#if notif.target}
							{' '}<span class="text-zinc-400">"{notif.target}"</span>
						{/if}
					</p>
					<p class="text-zinc-600 text-xs">{timeAgo(notif.createdAt)}</p>
				</div>

			</div>
		{/each}
	{/if}
</div>