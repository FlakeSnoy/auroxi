<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let query = $state($page.url.searchParams.get('q') ?? '');
	let focused = $state(false);
	let inputEl = $state<HTMLInputElement | null>(null);

	// Live preview state
	let preview = $state<{ people: any[]; notes: any[] } | null>(null);
	let previewTimer: ReturnType<typeof setTimeout>;

	async function fetchPreview(q: string) {
		if (!q.trim()) { preview = null; return; }
		const res = await fetch(`/search?q=${encodeURIComponent(q.trim())}`, {
			headers: { 'x-preview': '1' }
		});
		// Falls back gracefully — server doesn't need special handling
		// We navigate on Enter anyway; preview is just UI sugar
		preview = null; // disable until server supports preview endpoint
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && query.trim()) {
			preview = null;
			goto(`/search?q=${encodeURIComponent(query.trim())}`);
		}
		if (e.key === 'Escape') {
			query = '';
			preview = null;
			inputEl?.blur();
		}
	}

	function onInput() {
		clearTimeout(previewTimer);
		if (!query.trim()) { preview = null; return; }
		previewTimer = setTimeout(() => fetchPreview(query), 300);
	}

	function clear() {
		query = '';
		preview = null;
		inputEl?.focus();
	}
</script>

<div class="relative w-full max-w-md">
	<!-- Input -->
	<div class="relative">
		<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors pointer-events-none {focused ? 'text-blue-400' : 'text-zinc-500'}"
			fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
			<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
		</svg>

		<input
			bind:this={inputEl}
			bind:value={query}
			type="text"
			onkeydown={onKeydown}
			oninput={onInput}
			onfocus={() => focused = true}
			onblur={() => setTimeout(() => { focused = false; preview = null; }, 150)}
			placeholder="Search people, notes..."
			class="w-full bg-zinc-800/80 border rounded-xl pl-9 pr-9 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none transition-all {focused
				? 'border-blue-500/40 bg-zinc-800'
				: 'border-zinc-700/40 hover:border-zinc-600/60'}"
		/>

		{#if query}
			<button type="button" onclick={clear}
				class="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
				aria-label="Clear">
				<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
					<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
				</svg>
			</button>
		{/if}
	</div>

	<!-- Hint below when focused and typing -->
	{#if focused && query.trim()}
		<div class="absolute top-full mt-1.5 w-full bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden z-50">
			<button
				type="button"
				onmousedown={() => goto(`/search?q=${encodeURIComponent(query.trim())}`)}
				class="w-full flex items-center gap-2.5 px-3 py-2.5 hover:bg-zinc-800 transition-colors text-left">
				<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round">
					<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
				</svg>
				<span class="text-zinc-300 text-sm">Search for <span class="text-white font-medium">"{query}"</span></span>
				<span class="ml-auto text-zinc-600 text-xs">↵</span>
			</button>
		</div>
	{/if}
</div>