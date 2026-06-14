<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	const { userProfile, form }: { userProfile: any; form: any } = $props();

	let avatarPreview = $state<string | null>(null);
	let bannerPreview = $state<string | null>(null);
	let uploadingAvatar = $state(false);
	let uploadingBanner = $state(false);
	let avatarInput = $state<HTMLInputElement | null>(null);
	let bannerInput = $state<HTMLInputElement | null>(null);

	$effect(() => {
		avatarPreview = userProfile?.avatar ?? null;
		bannerPreview = userProfile?.banner ?? null;
	});

	function onAvatarChange(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;
		avatarPreview = URL.createObjectURL(file);
	}

	function onBannerChange(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;
		bannerPreview = URL.createObjectURL(file);
	}
</script>

<div class="flex flex-col gap-10">

	<!-- Banner -->
	<div class="flex flex-col gap-4">
		<div>
			<h3 class="text-white font-semibold text-base">Banner</h3>
			<p class="text-zinc-500 text-sm mt-0.5">JPG, PNG or WebP · Max 5MB · Recommended 1500×500</p>
		</div>

		<div class="flex flex-col gap-3">
			<div class="w-full h-32 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-800/50">
				{#if bannerPreview}
					<img src={bannerPreview} alt="Banner" class="w-full h-full object-cover" />
				{:else}
					<div class="w-full h-full bg-gradient-to-br from-zinc-800 to-blue-900/30 flex items-center justify-center">
						<p class="text-zinc-600 text-xs">No banner set</p>
					</div>
				{/if}
			</div>

			<form
				method="POST"
				action="?/uploadBanner"
				enctype="multipart/form-data"
				use:enhance={() => {
					uploadingBanner = true;
					return async ({ update }) => { uploadingBanner = false; await update(); };
				}}
				class="flex gap-2"
			>
				<input
					bind:this={bannerInput}
					type="file"
					name="banner"
					accept="image/jpeg,image/png,image/webp"
					onchange={onBannerChange}
					class="hidden"
				/>
				<Button type="button" variant="outline" onclick={() => bannerInput?.click()} class="border-zinc-700 text-zinc-300 hover:text-white rounded-xl text-sm">
					Choose banner
				</Button>
				<Button type="submit" disabled={uploadingBanner} class="bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm disabled:opacity-50">
					{uploadingBanner ? 'Uploading...' : 'Save banner'}
				</Button>
			</form>
		</div>
	</div>

	<Separator class="bg-zinc-800/60" />

	<!-- Avatar -->
	<div class="flex flex-col gap-4">
		<div>
			<h3 class="text-white font-semibold text-base">Avatar</h3>
			<p class="text-zinc-500 text-sm mt-0.5">JPG, PNG or WebP · Max 5MB</p>
		</div>

		<div class="flex items-center gap-6">
			{#if avatarPreview}
				<img src={avatarPreview} alt="Avatar" class="w-20 h-20 rounded-full object-cover border-2 border-zinc-700 shrink-0" />
			{:else}
				<div class="w-20 h-20 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-2xl font-black text-zinc-500 shrink-0">
					{userProfile?.username?.[0]?.toUpperCase() ?? '?'}
				</div>
			{/if}

			<form
				method="POST"
				action="?/uploadAvatar"
				enctype="multipart/form-data"
				use:enhance={() => {
					uploadingAvatar = true;
					return async ({ update }) => { uploadingAvatar = false; await update(); };
				}}
				class="flex flex-col gap-2"
			>
				<input
					bind:this={avatarInput}
					type="file"
					name="avatar"
					accept="image/jpeg,image/png,image/webp"
					onchange={onAvatarChange}
					class="hidden"
				/>
				<div class="flex gap-2">
					<Button type="button" variant="outline" onclick={() => avatarInput?.click()} class="border-zinc-700 text-zinc-300 hover:text-white rounded-xl text-sm">
						Choose image
					</Button>
					<Button type="submit" disabled={uploadingAvatar} class="bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm disabled:opacity-50">
						{uploadingAvatar ? 'Uploading...' : 'Save avatar'}
					</Button>
				</div>
				{#if form?.success && 'avatarUrl' in form}
					<p class="text-green-400 text-xs">Avatar updated!</p>
				{:else if form?.message}
					<p class="text-red-400 text-xs">{form.message}</p>
				{/if}
			</form>
		</div>
	</div>

	<Separator class="bg-zinc-800/60" />

	<!-- Profile -->
	<div class="flex flex-col gap-4">
		<div>
			<h3 class="text-white font-semibold text-base">Profile</h3>
			<p class="text-zinc-500 text-sm mt-0.5">Update your display info</p>
		</div>

		<form method="POST" action="?/updateProfile" use:enhance class="flex flex-col gap-4 max-w-lg">
			<div class="flex flex-col gap-1.5">
				<Label for="displayName" class="text-zinc-400 text-xs">Display name</Label>
				<Input id="displayName" name="displayName" type="text" value={userProfile?.displayName ?? ''}
					class="bg-zinc-800 border-zinc-700 text-white focus:border-blue-500 rounded-xl" />
			</div>
			<div class="flex flex-col gap-1.5">
				<Label for="bio" class="text-zinc-400 text-xs">Bio</Label>
				<textarea id="bio" name="bio" rows="3"
					class="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
				>{userProfile?.bio ?? ''}</textarea>
			</div>
			<div class="flex gap-3">
				<div class="flex flex-col gap-1.5 flex-1">
					<Label for="school" class="text-zinc-400 text-xs">School</Label>
					<Input id="school" name="school" type="text" value={userProfile?.school ?? ''}
						class="bg-zinc-800 border-zinc-700 text-white focus:border-blue-500 rounded-xl" />
				</div>
				<div class="flex flex-col gap-1.5 w-36">
					<Label for="grade" class="text-zinc-400 text-xs">Grade</Label>
					<Input id="grade" name="grade" type="text" value={userProfile?.grade ?? ''}
						class="bg-zinc-800 border-zinc-700 text-white focus:border-blue-500 rounded-xl" />
				</div>
			</div>
			<div class="flex items-center gap-3 pt-1">
				<Button type="submit" class="bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm">
					Save changes
				</Button>
				{#if form?.success && !('avatarUrl' in form) && !('bannerUrl' in form)}
					<p class="text-green-400 text-sm">Profile updated!</p>
				{/if}
			</div>
		</form>
	</div>

</div>