<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';

  type Profile = InferSelectModel<typeof profile>;
  const { userProfile, isOwner = false }: { userProfile: Profile | undefined; isOwner?: boolean } = $props();
</script>

<div class="flex items-start justify-between gap-4">
  <div class="flex flex-col gap-1">
    <h1 class="text-white font-black text-2xl">{userProfile?.displayName ?? userProfile?.username}</h1>
    <p class="text-zinc-500 text-sm">@{userProfile?.username}</p>

    {#if userProfile?.bio}
      <p class="text-zinc-400 text-sm mt-1 max-w-md">{userProfile.bio}</p>
    {/if}

    <div class="flex items-center gap-2 mt-2 flex-wrap">
      <span class="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/20 rounded-lg px-2 py-0.5">
        {userProfile?.lunes ?? 0} Lunes
      </span>
      {#if userProfile?.school}
        <span class="text-xs bg-zinc-700/50 text-zinc-400 border border-zinc-700 rounded-lg px-2 py-0.5">
          {userProfile.school} · {userProfile.grade}
        </span>
      {/if}
      {#if userProfile?.isPremium}
        <span class="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/20 rounded-lg px-2 py-0.5">
          ✦ Premium
        </span>
      {/if}
    </div>
  </div>

  {#if isOwner}
    <div class="flex items-center gap-2 shrink-0">
      <a href="/settings?tab=avatar"
        class="px-4 py-2 text-sm font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-xl transition-all">
        Edit avatar
      </a>
      <a href="/settings?tab=profile"
        class="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all">
        Edit profile
      </a>
    </div>
  {/if}
</div>