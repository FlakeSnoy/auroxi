<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { PageData, ActionData } from './$types.js';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	const tabs = [
		{ id: 'avatar',          label: 'Avatar' },
		{ id: 'profile',         label: 'Profile' },
		{ id: 'account',         label: 'Account' },
		{ id: 'security',        label: 'Security' },
		{ id: 'privacy',         label: 'Privacy' },
		{ id: 'notifications',   label: 'Notifications' },
		{ id: 'subscription',    label: 'Subscription' },
		{ id: 'system-messages', label: 'System Messages' },
	];

	let activeTab = $state('avatar');
	let avatarPreview = $state<string | null>(null);
	let uploading = $state(false);
	let fileInput = $state<HTMLInputElement | null>(null);

	$effect(() => {
		activeTab = (data as any).activeTab ?? 'avatar';
		avatarPreview = data.userProfile?.avatar ?? null;
	});

	function setTab(id: string) {
		activeTab = id;
		goto(`/settings?tab=${id}`, { replaceState: true, noScroll: true });
	}

	function close() {
		history.back();
	}

	function onFileChange(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;
		avatarPreview = URL.createObjectURL(file);
	}
</script>

<div
	role="dialog"
	aria-modal="true"
	aria-label="Settings"
	class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
	onkeydown={(e) => { if (e.key === 'Escape') close(); }}
>
	<!-- Backdrop click -->
	<div class="absolute inset-0 -z-10" role="presentation" onclick={close}></div>

	<div class="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-5xl h-[85vh] flex overflow-hidden shadow-2xl">

		<!-- Sidebar -->
		<div class="w-56 shrink-0 border-r border-zinc-800 flex flex-col">
			<div class="p-4 border-b border-zinc-800">
				<p class="text-xs text-zinc-500 font-semibold uppercase tracking-widest">Settings</p>
			</div>
			<div class="flex-1 overflow-y-auto p-3 flex flex-col gap-0.5">
				{#each tabs as tab (tab.id)}
					<button
						type="button"
						onclick={() => setTab(tab.id)}
						class="px-3 py-2.5 rounded-lg text-sm text-left transition-all {activeTab === tab.id
							? 'bg-zinc-800 text-white font-semibold'
							: 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'}"
					>
						{tab.label}
					</button>
				{/each}
			</div>
			<div class="p-3 border-t border-zinc-800">
				<p class="text-xs text-zinc-600 px-3">v0.0.1</p>
			</div>
		</div>

		<!-- Content -->
		<div class="flex-1 flex flex-col overflow-hidden">

			<!-- Top bar -->
			<div class="flex items-center justify-between px-8 py-4 border-b border-zinc-800 shrink-0">
				<h2 class="text-white font-bold text-lg capitalize">{activeTab.replace('-', ' ')}</h2>
				<button
					type="button"
					onclick={close}
					class="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
				>
					✕
				</button>
			</div>

			<div class="flex-1 overflow-y-auto px-8 py-6">

				{#if activeTab === 'avatar'}
					<p class="text-zinc-500 text-sm mb-8">JPG, PNG or WebP · Max 5MB</p>

					<div class="flex flex-col items-center gap-8">
						{#if avatarPreview}
							<img src={avatarPreview} alt="Avatar" class="w-36 h-36 rounded-full object-cover border-2 border-zinc-700 shadow-xl" />
						{:else}
							<div class="w-36 h-36 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-4xl font-black text-zinc-500">
								{data.userProfile?.username?.[0]?.toUpperCase() ?? '?'}
							</div>
						{/if}

						<form
							method="POST"
							action="?/uploadAvatar"
							enctype="multipart/form-data"
							use:enhance={() => {
								uploading = true;
								return async ({ update }) => {
									uploading = false;
									await update();
								};
							}}
							class="flex flex-col items-center gap-3 w-full max-w-sm"
						>
							<input
								bind:this={fileInput}
								type="file"
								name="avatar"
								accept="image/jpeg,image/png,image/webp"
								onchange={onFileChange}
								class="hidden"
							/>
							<button
								type="button"
								onclick={() => fileInput?.click()}
								class="w-full px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold border border-zinc-700 transition-all"
							>
								Choose image
							</button>
							<button
								type="submit"
								disabled={uploading}
								class="w-full px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-semibold transition-all"
							>
								{uploading ? 'Uploading...' : 'Save avatar'}
							</button>
						</form>

						{#if form?.success}
							<p class="text-green-400 text-sm">Avatar updated!</p>
						{:else if form?.message}
							<p class="text-red-400 text-sm">{form.message}</p>
						{/if}
					</div>

				{:else if activeTab === 'profile'}
					<p class="text-zinc-500 text-sm mb-8">Update your display info</p>

					<form method="POST" action="?/updateProfile" use:enhance class="flex flex-col gap-5 max-w-lg">
						<div class="flex flex-col gap-1.5">
							<label for="displayName" class="text-sm text-zinc-400 font-medium">Display name</label>
							<input
								id="displayName"
								name="displayName"
								type="text"
								value={data.userProfile?.displayName ?? ''}
								class="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
							/>
						</div>
						<div class="flex flex-col gap-1.5">
							<label for="bio" class="text-sm text-zinc-400 font-medium">Bio</label>
							<textarea
								id="bio"
								name="bio"
								rows="4"
								class="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
							>{data.userProfile?.bio ?? ''}</textarea>
						</div>
						<div class="flex gap-3">
							<div class="flex flex-col gap-1.5 flex-1">
								<label for="school" class="text-sm text-zinc-400 font-medium">School</label>
								<input
									id="school"
									name="school"
									type="text"
									value={data.userProfile?.school ?? ''}
									class="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
								/>
							</div>
							<div class="flex flex-col gap-1.5 w-36">
								<label for="grade" class="text-sm text-zinc-400 font-medium">Grade</label>
								<input
									id="grade"
									name="grade"
									type="text"
									value={data.userProfile?.grade ?? ''}
									class="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
								/>
							</div>
						</div>
						<div class="flex items-center gap-3 pt-2">
							<button
								type="submit"
								class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all"
							>
								Save changes
							</button>
							{#if form?.success}
								<p class="text-green-400 text-sm">Profile updated!</p>
							{:else if form?.message}
								<p class="text-red-400 text-sm">{form.message}</p>
							{/if}
						</div>
					</form>

				{:else}
					<div class="flex items-center justify-center h-64">
						<p class="text-zinc-600 text-sm">Coming soon</p>
					</div>
				{/if}

			</div>
		</div>
	</div>
</div>