<script lang="ts">
  import Structure from '../structure/+page.svelte';
  import type { profile } from '$lib/server/db/schema.js';
  import type { User } from 'better-auth';

  type Profile = typeof profile.$inferSelect;
  type PageData = { userProfile: Profile | undefined; user: User | undefined };

  const { data }: { data: PageData } = $props();
</script>

<svelte:head><title>Home | Auroxi</title></svelte:head>

<Structure userProfile={data.userProfile} />