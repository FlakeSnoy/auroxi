<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';
  import Avatar from '$lib/components/ui/Avatar.svelte';

  type Profile = InferSelectModel<typeof profile>;
  const { userProfile }: { userProfile: Profile | undefined } = $props();
</script>

<div class="flex items-center gap-4">
  <Avatar src={userProfile?.avatar ?? undefined} name={userProfile?.username} size={16} />
  <div class="flex flex-col gap-1">
    <h1 class="text-white font-black text-xl">@{userProfile?.username}</h1>
    {#if userProfile?.displayName}
      <p class="text-zinc-400 text-sm">{userProfile.displayName}</p>
    {/if}
    {#if userProfile?.school}
      <p class="text-zinc-500 text-xs">{userProfile.school} · {userProfile.grade}</p>
    {/if}
    {#if userProfile?.bio}
      <p class="text-zinc-400 text-sm mt-1">{userProfile.bio}</p>
    {/if}
    <div class="flex items-center gap-2 mt-1">
      <span class="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/20 rounded-lg px-2 py-0.5">
        {userProfile?.lunes ?? 0} Lunes
      </span>
      {#if userProfile?.isPremium}
        <span class="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 rounded-lg px-2 py-0.5">
          Premium
        </span>
      {/if}
    </div>
  </div>
</div>