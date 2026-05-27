<script lang="ts">
	const features = [
		{
			title: 'Smart notes',
			text: 'Create cleaner notes from lectures, PDFs, and late-night rough drafts.',
			icon: 'note'
		},
		{
			title: 'Revision rhythm',
			text: 'Build study loops around confidence, deadlines, and the topics that need work.',
			icon: 'loop'
		},
		{
			title: 'Focus dashboard',
			text: 'See what matters today without opening ten different apps.',
			icon: 'panel'
		},
		{
			title: 'Exam practice',
			text: 'Turn notes into practice prompts so revision becomes active, not passive.',
			icon: 'bolt'
		}
	];
</script>

<section id="features" class="px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
			<div class="max-w-2xl">
				<p class="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">Features</p>
				<h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">Built for real study days.</h2>
			</div>
			<p class="max-w-md leading-7 text-zinc-400">
				Auroxi keeps the useful parts close: notes, planning, revision, and practice.
			</p>
		</div>

		<div class="mt-10 grid gap-4 sm:grid-cols-2">
			{#each features as feature}
				<article class="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-300/50 hover:bg-lime-300/[0.06]">
					<div class="mb-6 grid size-12 place-items-center rounded-2xl bg-lime-300/10 text-lime-200 ring-1 ring-lime-300/20">
						{#if feature.icon === 'note'}
							<svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path d="M7 3H14L19 8V21H7V3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
								<path d="M14 3V8H19" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
								<path d="M10 13H16M10 17H14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
							</svg>
						{:else if feature.icon === 'loop'}
							<svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path d="M17 4L21 8L17 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M3 11V10A6 6 0 0 1 9 4H21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
								<path d="M7 20L3 16L7 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M21 13V14A6 6 0 0 1 15 20H3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
							</svg>
						{:else if feature.icon === 'panel'}
							<svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path d="M4 5H20V19H4V5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
								<path d="M4 10H20M9 10V19" stroke="currentColor" stroke-width="1.8" />
							</svg>
						{:else}
							<svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
							</svg>
						{/if}
					</div>
					<h3 class="text-xl font-semibold text-white">{feature.title}</h3>
					<p class="mt-3 leading-7 text-zinc-400">{feature.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>