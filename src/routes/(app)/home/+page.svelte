<script lang="ts">
  import type { PageData } from './$types.js';
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import Avatar from '$lib/components/ui/Avatar.svelte';
  import { formatLunes } from '$lib/utils/format.js';

  // import FriendsList from '$lib/components/friends/FriendsList.svelte';
  // import RecommendedUsers from '$lib/components/algorithm/RecommendedUsers.svelte';

  type Profile = InferSelectModel<typeof profile>;
  const { data }: { data: PageData & { userProfile: Profile | undefined } } = $props();
  const userProfile = $derived(data.userProfile);
</script>

<svelte:head><title>Home — Auroxi</title></svelte:head>

<div class="p-6 flex flex-col gap-8 max-w-3xl mx-auto">

  <!-- Greeting -->
  <div>
    <h1 class="text-white font-black text-2xl">Hey, {userProfile?.displayName ?? userProfile?.username} 👋</h1>
    <p class="text-zinc-500 text-sm mt-1">Here's what's happening today.</p>
  </div>

  <!-- Stats -->
  <div class="grid grid-cols-3 gap-4">
    <Card.Root class="bg-zinc-800/50 border-zinc-700/50 rounded-2xl">
      <Card.Content class="p-4 flex flex-col gap-1">
        <p class="text-zinc-500 text-xs font-medium uppercase tracking-wide">Lunes</p>
        <p class="text-white font-black text-xl">{formatLunes(userProfile?.lunes ?? 0)}</p>
      </Card.Content>
    </Card.Root>
    <Card.Root class="bg-zinc-800/50 border-zinc-700/50 rounded-2xl">
      <Card.Content class="p-4 flex flex-col gap-1">
        <p class="text-zinc-500 text-xs font-medium uppercase tracking-wide">Friends</p>
        <p class="text-white font-black text-xl">0</p>
      </Card.Content>
    </Card.Root>
    <Card.Root class="bg-zinc-800/50 border-zinc-700/50 rounded-2xl">
      <Card.Content class="p-4 flex flex-col gap-1">
        <p class="text-zinc-500 text-xs font-medium uppercase tracking-wide">Status</p>
        <p class="text-green-400 font-black text-xl">Online</p>
      </Card.Content>
    </Card.Root>
  </div>

  <!-- Friends -->
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <h2 class="text-white font-bold text-sm">Friends</h2>
      <a href="/friends" class="text-blue-500 hover:text-blue-400 text-xs transition-colors">See all</a>
    </div>
    <Card.Root class="bg-zinc-800/30 border-zinc-700/30 rounded-2xl">
      <Card.Content class="p-6 text-center flex flex-col gap-1">
        <p class="text-zinc-500 text-sm">No friends yet.</p>
        <a href="/search" class="text-blue-500 hover:text-blue-400 text-xs transition-colors">Find people to connect with</a>
      </Card.Content>
    </Card.Root>
    <!-- <FriendsList /> -->
  </div>

  <!-- Recommended -->
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <h2 class="text-white font-bold text-sm">Recommended for you</h2>
      <a href="/search" class="text-blue-500 hover:text-blue-400 text-xs transition-colors">See more</a>
    </div>
    <Card.Root class="bg-zinc-800/30 border-zinc-700/30 rounded-2xl">
      <Card.Content class="p-6 text-center">
        <p class="text-zinc-500 text-sm">Recommendations coming soon.</p>
      </Card.Content>
    </Card.Root>
    <!-- <RecommendedUsers /> -->
  </div>

</div>