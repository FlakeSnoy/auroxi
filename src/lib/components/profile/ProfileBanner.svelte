<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';
  import Avatar from '$lib/components/ui/Avatar.svelte';

  type Profile = InferSelectModel<typeof profile>;
  const { userProfile, isOwner = false }: { userProfile: Profile | undefined; isOwner?: boolean } = $props();
</script>

<div class="relative">
  <!-- Banner -->
  <div class="w-full h-48 bg-zinc-800 overflow-hidden">
    {#if userProfile?.banner}
      <img src={userProfile.banner} alt="banner" class="w-full h-full object-cover" />
    {:else}
      <div class="w-full h-full bg-gradient-to-br from-zinc-800 to-blue-900/30"></div>
    {/if}
  </div>

  <!-- Avatar overlapping -->
  <div class="absolute -bottom-12 left-6">
    <div class="rounded-full border-4 border-zinc-900 overflow-hidden">
      <Avatar src={userProfile?.avatar ?? undefined} name={userProfile?.username} size={24} />
    </div>
  </div>

  <!-- Edit profile button top right (owner only) -->
  {#if isOwner}
    <div class="absolute bottom-4 right-4">
      <a href="/settings?tab=profile"
        class="px-4 py-2 text-sm font-semibold bg-zinc-900/80 backdrop-blur hover:bg-zinc-800 text-white border border-zinc-700 rounded-full transition-all">
        Edit profile
      </a>
    </div>
  {/if}
</div>

<!-- Spacer for avatar overlap -->
<div class="h-14"></div>