<script lang="ts">
	const plans = [
		{
			id: 'free',
			name: 'Free',
			price: '$0',
			period: 'forever',
			features: ['5 note uploads/month', 'Join up to 3 communities', 'Basic profile', '100 Lunes/day'],
			current: true,
			highlight: false,
		},
		{
			id: 'premium',
			name: 'Premium',
			price: '$4.99',
			period: 'per month',
			features: ['Unlimited note uploads', 'Join unlimited communities', 'Custom profile banner', '250 Lunes/day', '✦ Premium badge', 'Priority support'],
			current: false,
			highlight: true,
		},
	];
</script>

<div class="flex flex-col gap-8">

	<div>
		<h3 class="text-white font-semibold text-base">Subscription</h3>
		<p class="text-zinc-500 text-sm mt-0.5">Manage your Auroxi plan</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		{#each plans as plan}
			<div class="flex flex-col gap-4 p-5 rounded-2xl border transition-all {plan.highlight
				? 'border-blue-500/40 bg-blue-600/5'
				: 'border-zinc-800 bg-zinc-800/20'}">

				<div class="flex items-start justify-between">
					<div>
						<p class="text-white font-bold text-base">{plan.name}</p>
						<div class="flex items-baseline gap-1 mt-0.5">
							<span class="text-2xl font-black {plan.highlight ? 'text-blue-400' : 'text-zinc-300'}">{plan.price}</span>
							<span class="text-zinc-500 text-xs">{plan.period}</span>
						</div>
					</div>
					{#if plan.current}
						<span class="text-xs bg-zinc-800 text-zinc-400 border border-zinc-700 rounded-full px-2.5 py-0.5">Current</span>
					{/if}
				</div>

				<ul class="flex flex-col gap-2">
					{#each plan.features as feature}
						<li class="flex items-center gap-2 text-sm text-zinc-400">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="{plan.highlight ? 'text-blue-400' : 'text-zinc-600'} shrink-0">
								<polyline points="20 6 9 17 4 12"/>
							</svg>
							{feature}
						</li>
					{/each}
				</ul>

				{#if plan.highlight}
					<div class="flex flex-col gap-1.5">
						<button
							type="button"
							disabled
							class="w-full py-2.5 rounded-xl bg-blue-600/50 text-blue-300 text-sm font-semibold cursor-not-allowed border border-blue-500/20"
						>
							Coming soon
						</button>
						<p class="text-zinc-600 text-xs text-center">Payments launching with our domain</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>

</div>