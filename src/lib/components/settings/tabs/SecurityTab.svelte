<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	let changingPassword = $state(false);
	let loading = $state(false);
	let revoking = $state(false);
	let success = $state('');
	let error = $state('');

	let currentPassword = $state('');
	let newPassword = $state('');
	let confirmPassword = $state('');

	async function handlePasswordChange() {
		error = ''; success = '';
		if (newPassword !== confirmPassword) { error = 'Passwords do not match'; return; }
		if (newPassword.length < 8) { error = 'Must be at least 8 characters'; return; }

		loading = true;
		try {
			const res = await fetch('/api/auth/change-password', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ currentPassword, newPassword }),
			});
			const data = await res.json();
			if (res.ok) {
				success = 'Password updated';
				changingPassword = false;
				currentPassword = ''; newPassword = ''; confirmPassword = '';
			} else {
				error = data.message ?? 'Failed to update password';
			}
		} catch {
			error = 'Something went wrong';
		}
		loading = false;
	}

	async function revokeOtherSessions() {
		revoking = true;
		try {
			const res = await fetch('/api/auth/revoke-other-sessions', { method: 'POST' });
			if (res.ok) success = 'Other sessions signed out';
			else error = 'Failed to sign out sessions';
		} catch {
			error = 'Something went wrong';
		}
		revoking = false;
	}
</script>

<div class="flex flex-col gap-6">

	<!-- Password -->
	<div class="flex flex-col gap-3">
		<div class="flex items-center justify-between">
			<div>
				<p class="text-zinc-200 text-sm font-medium">Password</p>
				<p class="text-zinc-500 text-xs mt-0.5">Change your login password</p>
			</div>
			<Button
				type="button"
				variant="outline"
				onclick={() => { changingPassword = !changingPassword; error = ''; success = ''; }}
				class="border-zinc-800 text-zinc-300 hover:text-white rounded-xl text-sm h-8 px-4"
			>
				{changingPassword ? 'Cancel' : 'Change'}
			</Button>
		</div>

		{#if changingPassword}
			<div class="flex flex-col gap-3 p-4 border border-zinc-800 rounded-2xl bg-zinc-900/50">
				<div class="flex flex-col gap-1.5">
					<Label class="text-zinc-400 text-xs">Current password</Label>
					<Input type="password" bind:value={currentPassword}
						class="bg-zinc-900 border-zinc-800 text-white rounded-xl focus:border-blue-500 h-10" />
				</div>
				<div class="flex flex-col gap-1.5">
					<Label class="text-zinc-400 text-xs">New password</Label>
					<Input type="password" bind:value={newPassword}
						class="bg-zinc-900 border-zinc-800 text-white rounded-xl focus:border-blue-500 h-10" />
				</div>
				<div class="flex flex-col gap-1.5">
					<Label class="text-zinc-400 text-xs">Confirm new password</Label>
					<Input type="password" bind:value={confirmPassword}
						class="bg-zinc-900 border-zinc-800 text-white rounded-xl focus:border-blue-500 h-10" />
				</div>

				{#if error}<p class="text-red-400 text-xs">{error}</p>{/if}
				{#if success}<p class="text-green-400 text-xs">{success}</p>{/if}

				<Button
					type="button"
					onclick={handlePasswordChange}
					disabled={loading}
					class="w-fit bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm h-9 px-4 disabled:opacity-50"
				>
					{loading ? 'Updating...' : 'Update password'}
				</Button>
			</div>
		{/if}
	</div>

	<div class="h-px bg-zinc-800/60"></div>

	<!-- Sessions -->
	<div class="flex flex-col gap-3">
		<div>
			<p class="text-zinc-200 text-sm font-medium">Active sessions</p>
			<p class="text-zinc-500 text-xs mt-0.5">Manage where you're logged in</p>
		</div>

		<div class="p-4 border border-zinc-800 rounded-2xl bg-zinc-900/50 flex items-center justify-between">
			<div>
				<p class="text-zinc-200 text-sm font-medium">This device</p>
				<p class="text-zinc-500 text-xs mt-0.5">Active now</p>
			</div>
			<span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_1px_rgba(34,197,94,0.5)]"></span>
		</div>

		<Button
			type="button"
			variant="outline"
			onclick={revokeOtherSessions}
			disabled={revoking}
			class="w-fit border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/40 rounded-xl text-sm h-8 px-4 disabled:opacity-50"
		>
			{revoking ? 'Signing out...' : 'Sign out all other sessions'}
		</Button>

		{#if success}<p class="text-green-400 text-xs">{success}</p>{/if}
		{#if error}<p class="text-red-400 text-xs">{error}</p>{/if}
	</div>

</div>