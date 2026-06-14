<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	const privacyOptions = [
		{ id: 'showOnline',          label: 'Show online status',          description: 'Let others see when you\'re active' },
		{ id: 'showSchool',          label: 'Show school on profile',      description: 'Display your school and grade publicly' },
		{ id: 'allowFriendRequests', label: 'Allow friend requests',       description: 'Let other users send you friend requests' },
		{ id: 'showInRecommended',   label: 'Appear in recommendations',   description: 'Allow your profile to appear in suggested users' },
		{ id: 'showBadges',          label: 'Show badges publicly',        description: 'Display your earned badges on your profile' },
	];

	let toggles = $state<Record<string, boolean>>(
		Object.fromEntries(privacyOptions.map(o => [o.id, true]))
	);

	let deleteConfirm = $state(false);
</script>

<div class="flex flex-col gap-6">

	<!-- Toggles -->
	<div class="flex flex-col">
		{#each privacyOptions as option, i (option.id)}
			<div class="flex items-center justify-between py-3.5 {i < privacyOptions.length - 1 ? 'border-b border-zinc-800/60' : ''}">
				<div>
					<p class="text-zinc-200 text-sm font-medium">{option.label}</p>
					<p class="text-zinc-500 text-xs mt-0.5">{option.description}</p>
				</div>
				<button
					type="button"
					role="switch"
					aria-checked={toggles[option.id]}
					aria-label={option.label}
					onclick={() => toggles[option.id] = !toggles[option.id]}
					class="relative w-10 h-6 rounded-full transition-colors shrink-0 ml-6 {toggles[option.id] ? 'bg-blue-600' : 'bg-zinc-700'}"
				>
					<span class="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all {toggles[option.id] ? 'left-5' : 'left-1'}"></span>
				</button>
			</div>
		{/each}
	</div>

	<div class="h-px bg-zinc-800/60"></div>

	<!-- Danger zone -->
	<div class="flex flex-col gap-3">
		<div>
			<p class="text-zinc-200 text-sm font-medium">Danger zone</p>
			<p class="text-zinc-500 text-xs mt-0.5">Irreversible actions — proceed with caution</p>
		</div>

		{#if !deleteConfirm}
			<div class="flex items-center justify-between p-4 border border-zinc-800 rounded-2xl bg-zinc-900/50">
				<div>
					<p class="text-zinc-200 text-sm font-medium">Delete account</p>
					<p class="text-zinc-500 text-xs mt-0.5">Permanently deletes your account and all data</p>
				</div>
				<Button
					type="button"
					variant="outline"
					onclick={() => deleteConfirm = true}
					class="border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/40 rounded-xl text-sm h-8 px-4"
				>
					Delete
				</Button>
			</div>
		{:else}
			<div class="flex flex-col gap-3 p-4 border border-red-500/30 rounded-2xl bg-red-500/5">
				<p class="text-zinc-200 text-sm font-medium">Are you sure?</p>
				<p class="text-zinc-500 text-xs">This will permanently delete your account, notes, followers, and all data. This cannot be undone.</p>
				<div class="flex gap-2">
					<Button
						type="button"
						onclick={() => deleteConfirm = false}
						variant="outline"
						class="border-zinc-800 text-zinc-300 hover:text-white rounded-xl text-sm h-8 px-4"
					>
						Cancel
					</Button>
					<Button
						type="button"
						class="bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm h-8 px-4"
					>
						Yes, delete my account
					</Button>
				</div>
			</div>
		{/if}
	</div>

</div>