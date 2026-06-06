<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';
  import Avatar from '$lib/components/ui/Avatar.svelte';

  type Profile = InferSelectModel<typeof profile>;
  type PageData = { userProfile: Profile | undefined; isOwner: boolean };

  const { data }: { data: PageData } = $props();
  const userProfile = $derived(data.userProfile);
  const isOwner = $derived(data.isOwner);
</script>

<svelte:head><title>@{userProfile?.username ?? 'Profile'} — Auroxi</title></svelte:head>

<div class="p-6 max-w-2xl mx-auto flex flex-col gap-6">

  <div class="flex items-center gap-5">
    <Avatar src={userProfile?.avatar ?? undefined} name={userProfile?.username} size={16} />
    <div>
      <h1 class="text-white font-black text-xl">@{userProfile?.username}</h1>
      {#if userProfile?.school}
        <p class="text-zinc-500 text-xs mt-1">{userProfile.school} · {userProfile.grade}</p>
      {/if}
      {#if userProfile?.bio}
        <p class="text-zinc-400 text-sm mt-2">{userProfile.bio}</p>
      {/if}
    </div>
  </div>

  {#if isOwner}
    <a href="/settings" class="text-blue-500 text-sm hover:text-blue-400 transition-colors w-fit">
      Edit profile
    </a>
  {/if}

</div>