<script lang="ts">
	const steps = [
		{
			title: 'Capture',
			text: 'Drop in class notes, quick ideas, or study goals before they scatter.'
		},
		{
			title: 'Shape',
			text: 'Auroxi helps turn messy material into clean summaries, cards, and review plans.'
		},
		{
			title: 'Revise',
			text: 'Return to the right topics at the right time with a calmer study rhythm.'
		}
	];
</script>

<section id="how-it-works" class="border-y border-white/10 bg-zinc-900/70 px-4 py-20">
	<div class="mx-auto max-w-6xl">
		<div class="max-w-2xl">
			<p class="text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">How it works</p>
			<h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">A simple flow from notes to progress.</h2>
		</div>

		<div class="mt-10 grid gap-4 md:grid-cols-3">
			{#each steps as step, index}
				<article class="rounded-3xl border border-white/10 bg-zinc-950/60 p-6">
					<div class="mb-6 grid size-12 place-items-center rounded-2xl bg-lime-300 text-lg font-bold text-zinc-950">
						{index + 1}
					</div>
					<h3 class="text-xl font-semibold text-white">{step.title}</h3>
					<p class="mt-3 leading-7 text-zinc-400">{step.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>