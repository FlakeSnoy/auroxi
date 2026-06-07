<script lang="ts">
  import type { PageData } from './$types.js';
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';

  import FriendsRow from '$lib/components/friends/FriendsRow.svelte';
  import RecommendedUsers from '$lib/components/recommended/RecommendedUsers.svelte';

  type Profile = InferSelectModel<typeof profile>;
  const { data }: { data: PageData & { userProfile: Profile | undefined } } = $props();
</script>

<svelte:head><title>Home — Auroxi</title></svelte:head>

<div class="p-6 flex flex-col gap-8">
  <h1 class="text-white font-black text-3xl">Home</h1>
  <FriendsRow />
  <RecommendedUsers />
</div>