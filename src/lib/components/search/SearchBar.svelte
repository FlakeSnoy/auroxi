<script lang="ts">
	import { goto } from '$app/navigation';

	let query = $state('');
	let focused = $state(false);

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && query.trim()) {
			goto(`/search?q=${encodeURIComponent(query.trim())}`);
		}
		if (e.key === 'Escape') {
			query = '';
			(e.target as HTMLInputElement).blur();
		}
	}
</script>

<div class="relative w-72">
	<svg
		class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors {focused ? 'text-blue-400' : 'text-zinc-500'}"
		fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
	</svg>
	<input
		type="text"
		bind:value={query}
		onkeydown={onKeydown}
		onfocus={() => focused = true}
		onblur={() => focused = false}
		placeholder="Search people, notes..."
		class="w-full bg-zinc-800 border rounded-xl pl-9 pr-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none transition-all {focused
			? 'border-blue-500/50 bg-zinc-800'
			: 'border-zinc-700/50 hover:border-zinc-600'}"
	/>
	{#if query}
		<button
			type="button"
			onclick={() => query = ''}
			class="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
			aria-label="Clear search"
		>
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
				<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
			</svg>
		</button>
	{/if}
</div>