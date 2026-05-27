<script lang="ts">
	const navItems = [
		{ label: 'About', href: '/about', icon: 'path' },
		{ label: 'Features', href: '#features', icon: 'spark' },
		{ label: 'Register', href: '/register', icon: 'user' }
	];
</script>

<header class="fixed left-0 right-0 top-4 z-50 px-4">
	<nav
		class="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/85 px-4 py-3 shadow-2xl shadow-lime-950/30 backdrop-blur md:px-5"
		aria-label="Main navigation"
	>
		<a href="/" class="flex items-center gap-3">
			<span class="grid size-10 place-items-center rounded-full bg-lime-300/10 ring-1 ring-lime-300/30">
				<img src="/favicon.svg" alt="" class="size-6" />
			</span>
			<span class="text-lg font-semibold tracking-wide text-white">Auroxi</span>
		</a>

		<div class="flex items-center gap-1 sm:gap-2">
			{#each navItems as item}
				<a
					href={item.href}
					class="group flex size-10 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-lime-200 sm:w-auto sm:px-3"
					aria-label={item.label}
				>
					{#if item.icon === 'path'}
						<svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M5 19C9 19 9 5 13 5H19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
							<path d="M16 2L20 5L16 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					{:else if item.icon === 'spark'}
						<svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
							<path d="M18 15L18.8 17.2L21 18L18.8 18.8L18 21L17.2 18.8L15 18L17.2 17.2L18 15Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
						</svg>
					{:else}
						<svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path d="M12 12A4 4 0 1 0 12 4A4 4 0 0 0 12 12Z" stroke="currentColor" stroke-width="1.8" />
							<path d="M4.5 20C5.7 16.8 8.4 15 12 15C15.6 15 18.3 16.8 19.5 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
						</svg>
					{/if}
					<span class="ml-2 hidden text-sm font-medium sm:inline">{item.label}</span>
				</a>
			{/each}

			<a
				href="#register"
				class="ml-1 rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-lime-300/20 transition hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
			>
				Get started
			</a>
		</div>
	</nav>
</header>