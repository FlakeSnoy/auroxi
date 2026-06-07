<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';
  import ProfilePage from '../profile/+page.svelte';

  type UserProfile = InferSelectModel<typeof profile>;
  type PageData = { userProfile: UserProfile | undefined; isOwner: boolean };

  const { data }: { data: PageData } = $props();
  const userProfile = $derived(data.userProfile);
  const isOwner = $derived(data.isOwner);
</script>

<svelte:head><title>@{userProfile?.username ?? 'Profile'} — Auroxi</title></svelte:head>

<ProfilePage {data} />