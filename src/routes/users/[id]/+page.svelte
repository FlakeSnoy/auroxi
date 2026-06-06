```svelte
<script lang="ts">
  import { enhance } from '$app/forms';
  import type { profile } from '$lib/server/db/schema.js';
  import Avatar from '$lib/components/ui/avatar.svelte';

  type Profile = typeof profile.$inferSelect;
  type PageData = { userProfile: Profile | undefined; isOwner: boolean };

  const { data }: { data: PageData } = $props();
  const userProfile = $derived(data.userProfile);
  const isOwner = $derived(data.isOwner);

  let uploading = $state(false);
  let formRef = $state<HTMLFormElement>();
</script>

<svelte:head><title>{userProfile?.displayName ?? 'Profile'} — Auroxi</title></svelte:head>

<div class="p-6 max-w-2xl mx-auto flex flex-col gap-6">

  <div class="flex items-center gap-5">

    <div class="relative group">
      <Avatar src={userProfile?.avatar ?? undefined} name={userProfile?.displayName ?? '?'} size={16} />
      {#if isOwner}
        <label for="avatar-upload"
          class="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
          <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </label>
        <form bind:this={formRef} method="POST" action="?/uploadAvatar" use:enhance={() => {
          uploading = true;
          return async ({ update }) => { await update(); uploading = false; };
        }}>
          <input id="avatar-upload" name="avatar" type="file" accept=".jpg,.jpeg,.png,.webp"
            class="hidden" onchange={() => formRef?.requestSubmit()} />
        </form>
      {/if}
    </div>

    <div>
      <h1 class="text-white font-black text-xl">{userProfile?.displayName ?? 'No name'}</h1>
      <p class="text-zinc-500 text-sm">@{userProfile?.username}</p>
      {#if userProfile?.school}
        <p class="text-zinc-600 text-xs mt-1">{userProfile.school} · {userProfile.grade}</p>
      {/if}
    </div>

  </div>

  {#if uploading}<p class="text-blue-400 text-sm">Uploading...</p>{/if}
  {#if userProfile?.bio}<p class="text-zinc-400 text-sm">{userProfile.bio}</p>{/if}

</div>
```