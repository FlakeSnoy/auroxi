<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	const privacyOptions = [
		{ id: 'showOnline',          label: 'Show online status',       description: 'Let others see when you are active',                default: true },
		{ id: 'showSchool',          label: 'Show school on profile',   description: 'Display your school and grade publicly',            default: true },
		{ id: 'allowFriendRequests', label: 'Allow friend requests',    description: 'Let other users send you friend requests',          default: true },
		{ id: 'showInRecommended',   label: 'Appear in recommendations',description: 'Allow your profile to appear in recommended users', default: true },
		{ id: 'showBadges',          label: 'Show badges publicly',     description: 'Display your earned badges on your profile',        default: true },
	];

	let toggles = $state<Record<string, boolean>>(
		Object.fromEntries(privacyOptions.map(o => [o.id, o.default]))
	);
</script>

<div class="flex flex-col gap-8">

	<div>
		<h3 class="text-white font-semibold text-base">Privacy</h3>
		<p class="text-zinc-500 text-sm mt-0.5">Control what others can see about you</p>
	</div>

	<div class="flex flex-col gap-1">
		{#each privacyOptions as option (option.id)}
			<div class="flex items-center justify-between py-4 border-b border-zinc-800/60 last:border-0">
				<div class="flex flex-col gap-0.5">
					<p class="text-zinc-200 text-sm font-medium">{option.label}</p>
					<p class="text-zinc-500 text-xs">{option.description}</p>
				</div>
				<button
					type="button"
					role="switch"
					aria-checked={toggles[option.id]}
					aria-label={option.label}
					onclick={() => toggles[option.id] = !toggles[option.id]}
					class="relative w-10 h-6 rounded-full transition-all shrink-0 {toggles[option.id] ? 'bg-blue-600' : 'bg-zinc-700'}"
				>
					<span class="sr-only">{option.label}</span>
					<span class="absolute top-1 w-4 h-4 rounded-full bg-white transition-all {toggles[option.id] ? 'left-5' : 'left-1'}"></span>
				</button>
			</div>
		{/each}
	</div>

	<Separator class="bg-zinc-800/60" />

	<div class="flex flex-col gap-4">
		<div>
			<h3 class="text-white font-semibold text-sm">Danger Zone</h3>
			<p class="text-zinc-500 text-xs mt-0.5">Irreversible actions</p>
		</div>
		<div class="p-4 border border-red-500/20 rounded-2xl bg-red-500/5">
			<div class="flex items-center justify-between">
				<div>
					<p class="text-zinc-200 text-sm font-medium">Delete account</p>
					<p class="text-zinc-500 text-xs">Permanently delete your account and all data</p>
				</div>
				<Button
					variant="outline"
					class="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50 rounded-xl text-sm"
				>
					Delete
				</Button>
			</div>
		</div>
	</div>

</div>