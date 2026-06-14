<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let changingPassword = $state(false);
	let loading = $state(false);
	let success = $state('');
	let error = $state('');

	let currentPassword = $state('');
	let newPassword = $state('');
	let confirmPassword = $state('');

	async function handlePasswordChange() {
		error = ''; success = '';
		if (newPassword !== confirmPassword) { error = 'Passwords do not match'; return; }
		if (newPassword.length < 8) { error = 'Password must be at least 8 characters'; return; }

		loading = true;
		try {
			const res = await fetch('/api/auth/change-password', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ currentPassword, newPassword }),
			});
			if (res.ok) {
				success = 'Password updated successfully';
				changingPassword = false;
				currentPassword = ''; newPassword = ''; confirmPassword = '';
			} else {
				const data = await res.json();
				error = data.message ?? 'Failed to update password';
			}
		} catch {
			error = 'Something went wrong';
		}
		loading = false;
	}
</script>

<div class="flex flex-col gap-8">

	<div>
		<h3 class="text-white font-semibold text-base">Security</h3>
		<p class="text-zinc-500 text-sm mt-0.5">Manage your account security</p>
	</div>

	<!-- Password -->
	<div class="flex flex-col gap-4">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-zinc-200 text-sm font-medium">Password</p>
				<p class="text-zinc-500 text-xs">Change your account password</p>
			</div>
			<Button
				type="button"
				variant="outline"
				onclick={() => changingPassword = !changingPassword}
				class="border-zinc-700 text-zinc-300 hover:text-white rounded-xl text-sm"
			>
				{changingPassword ? 'Cancel' : 'Change'}
			</Button>
		</div>

		{#if changingPassword}
			<div class="flex flex-col gap-3 p-4 border border-zinc-800 rounded-2xl bg-zinc-800/20">
				<div class="flex flex-col gap-1.5">
					<Label class="text-zinc-400 text-xs">Current password</Label>
					<Input
						type="password"
						bind:value={currentPassword}
						class="bg-zinc-800 border-zinc-700 text-white rounded-xl focus:border-blue-500"
					/>
				</div>
				<div class="flex flex-col gap-1.5">
					<Label class="text-zinc-400 text-xs">New password</Label>
					<Input
						type="password"
						bind:value={newPassword}
						class="bg-zinc-800 border-zinc-700 text-white rounded-xl focus:border-blue-500"
					/>
				</div>
				<div class="flex flex-col gap-1.5">
					<Label class="text-zinc-400 text-xs">Confirm new password</Label>
					<Input
						type="password"
						bind:value={confirmPassword}
						class="bg-zinc-800 border-zinc-700 text-white rounded-xl focus:border-blue-500"
					/>
				</div>
				{#if error}<p class="text-red-400 text-xs">{error}</p>{/if}
				{#if success}<p class="text-green-400 text-xs">{success}</p>{/if}
				<Button
					type="button"
					onclick={handlePasswordChange}
					disabled={loading}
					class="w-fit bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm disabled:opacity-50"
				>
					{loading ? 'Updating...' : 'Update password'}
				</Button>
			</div>
		{/if}
	</div>

	<Separator class="bg-zinc-800/60" />

	<!-- Sessions -->
	<div class="flex flex-col gap-3">
		<div>
			<p class="text-zinc-200 text-sm font-medium">Active sessions</p>
			<p class="text-zinc-500 text-xs">Manage where you're logged in</p>
		</div>
		<div class="p-4 border border-zinc-800 rounded-2xl bg-zinc-800/20 flex items-center justify-between">
			<div class="flex flex-col gap-0.5">
				<p class="text-zinc-200 text-sm font-medium">Current session</p>
				<p class="text-zinc-500 text-xs">Active now</p>
			</div>
			<span class="w-2 h-2 rounded-full bg-green-500"></span>
		</div>
		<Button
			variant="outline"
			class="w-fit border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50 rounded-xl text-sm"
		>
			Sign out all other sessions
		</Button>
	</div>

</div>