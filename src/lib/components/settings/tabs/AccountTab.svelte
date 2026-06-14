<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const { userProfile, form }: { userProfile: any; form: any } = $props();

	let avatarPreview = $state<string | null>(null);
	let bannerPreview = $state<string | null>(null);

	$effect(() => {
		if (!avatarPreview) avatarPreview = userProfile?.avatar ?? null;
		if (!bannerPreview) bannerPreview = userProfile?.banner ?? null;
	});
	let uploadingAvatar = $state(false);
	let uploadingBanner = $state(false);
	let avatarInput = $state<HTMLInputElement | null>(null);
	let bannerInput = $state<HTMLInputElement | null>(null);

	function onAvatarChange(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (file) avatarPreview = URL.createObjectURL(file);
	}

	function onBannerChange(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (file) bannerPreview = URL.createObjectURL(file);
	}
</script>

<div class="flex flex-col gap-8">

	<!-- Visual identity block -->
	<div class="flex flex-col gap-0">

		<!-- Banner -->
		<form
			method="POST"
			action="?/uploadBanner"
			enctype="multipart/form-data"
			use:enhance={() => {
				uploadingBanner = true;
				return async ({ update }) => { uploadingBanner = false; await update(); };
			}}
		>
			<input bind:this={bannerInput} type="file" name="banner"
				accept="image/jpeg,image/png,image/webp" onchange={onBannerChange} class="hidden" />

			<div class="relative w-full h-36 rounded-2xl overflow-hidden group cursor-pointer"
				onclick={() => bannerInput?.click()} role="button" tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && bannerInput?.click()}>

				{#if bannerPreview}
					<img src={bannerPreview} alt="Banner" class="w-full h-full object-cover" />
				{:else}
					<div class="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
				{/if}

				<!-- Hover overlay -->
				<div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
					</svg>
					<span class="text-white text-sm font-medium">Change banner</span>
				</div>
			</div>

			<!-- Save banner — only shows if a new file is picked -->
			{#if bannerPreview && bannerPreview.startsWith('blob:')}
				<div class="flex justify-end mt-2">
					<Button type="submit" disabled={uploadingBanner}
						class="bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm h-8 px-4 disabled:opacity-50">
						{uploadingBanner ? 'Saving...' : 'Save banner'}
					</Button>
				</div>
			{/if}
		</form>

		<!-- Avatar overlapping banner -->
		<form
			method="POST"
			action="?/uploadAvatar"
			enctype="multipart/form-data"
			use:enhance={() => {
				uploadingAvatar = true;
				return async ({ update }) => { uploadingAvatar = false; await update(); };
			}}
			class="-mt-10 px-2 flex items-end justify-between"
		>
			<input bind:this={avatarInput} type="file" name="avatar"
				accept="image/jpeg,image/png,image/webp" onchange={onAvatarChange} class="hidden" />

			<div class="relative group cursor-pointer w-20 h-20"
				onclick={() => avatarInput?.click()} role="button" tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && avatarInput?.click()}>

				{#if avatarPreview}
					<img src={avatarPreview} alt="Avatar"
						class="w-20 h-20 rounded-full object-cover border-[3px] border-zinc-950 bg-zinc-900" />
				{:else}
					<div class="w-20 h-20 rounded-full border-[3px] border-zinc-950 bg-zinc-800 flex items-center justify-center text-2xl font-black text-zinc-500">
						{userProfile?.username?.[0]?.toUpperCase() ?? '?'}
					</div>
				{/if}

				<div class="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
					</svg>
				</div>
			</div>

			<div class="flex items-center gap-2 pb-1">
				{#if avatarPreview && avatarPreview.startsWith('blob:')}
					<Button type="submit" disabled={uploadingAvatar}
						class="bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm h-8 px-4 disabled:opacity-50">
						{uploadingAvatar ? 'Saving...' : 'Save avatar'}
					</Button>
				{/if}
				{#if form?.success && 'avatarUrl' in form}
					<p class="text-green-400 text-xs">Saved</p>
				{:else if form?.message}
					<p class="text-red-400 text-xs">{form.message}</p>
				{/if}
			</div>
		</form>
	</div>

	<!-- Profile fields -->
	<form method="POST" action="?/updateProfile" use:enhance class="flex flex-col gap-5">

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div class="flex flex-col gap-1.5">
				<Label for="displayName" class="text-zinc-400 text-xs">Display name</Label>
				<Input id="displayName" name="displayName" type="text"
					value={userProfile?.displayName ?? ''}
					placeholder={userProfile?.username ?? ''}
					class="bg-zinc-900 border-zinc-800 text-white focus:border-blue-500 rounded-xl h-10" />
			</div>
			<div class="flex flex-col gap-1.5">
				<Label for="username" class="text-zinc-400 text-xs">Username</Label>
				<div class="relative">
					<span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm select-none">@</span>
					<Input id="username" name="username" type="text"
						value={userProfile?.username ?? ''}
						class="bg-zinc-900 border-zinc-800 text-white focus:border-blue-500 rounded-xl h-10 pl-7" />
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-1.5">
			<Label for="bio" class="text-zinc-400 text-xs">Bio</Label>
			<textarea id="bio" name="bio" rows="3"
				placeholder="Tell people about yourself..."
				class="bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
			>{userProfile?.bio ?? ''}</textarea>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div class="flex flex-col gap-1.5">
				<Label for="school" class="text-zinc-400 text-xs">School</Label>
				<Input id="school" name="school" type="text"
					value={userProfile?.school ?? ''}
					placeholder="Your school"
					class="bg-zinc-900 border-zinc-800 text-white focus:border-blue-500 rounded-xl h-10" />
			</div>
			<div class="flex flex-col gap-1.5">
				<Label for="grade" class="text-zinc-400 text-xs">Grade</Label>
				<Input id="grade" name="grade" type="text"
					value={userProfile?.grade ?? ''}
					placeholder="e.g. 11th"
					class="bg-zinc-900 border-zinc-800 text-white focus:border-blue-500 rounded-xl h-10" />
			</div>
		</div>

		<div class="flex items-center gap-3 pt-1">
			<Button type="submit" class="bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm h-9 px-5">
				Save changes
			</Button>
			{#if form?.success && !('avatarUrl' in form) && !('bannerUrl' in form)}
				<p class="text-green-400 text-sm">Saved</p>
			{/if}
		</div>
	</form>

</div>