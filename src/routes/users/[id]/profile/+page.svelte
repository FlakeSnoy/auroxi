<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';
  import ProfileBanner from '$lib/components/profile/ProfileBanner.svelte';
  import ProfileCard from '$lib/components/profile/ProfileCard.svelte';
  import BadgeDisplay from '$lib/components/profile/BadgeDisplay.svelte';
  import EditProfileForm from '$lib/components/profile/EditProfileForm.svelte';

  type UserProfile = InferSelectModel<typeof profile>;
  type PageData = { userProfile: UserProfile | undefined; isOwner: boolean };

  const { data }: { data: PageData } = $props();
  const userProfile = $derived(data.userProfile);
  const isOwner = $derived(data.isOwner);
</script>

<svelte:head><title>@{userProfile?.username ?? 'Profile'} — Auroxi</title></svelte:head>

<div class="min-h-screen bg-zinc-900 p-6">
  <div class="max-w-2xl mx-auto flex flex-col gap-6">

    <ProfileBanner {userProfile} {isOwner} />
    <ProfileCard {userProfile} {isOwner} />

    <!-- Friends -->
    <div class="flex flex-col gap-3">
      <h2 class="text-zinc-400 text-xs font-semibold uppercase tracking-wide">Friends</h2>
      <p class="text-zinc-600 text-sm">No friends yet.</p>
    </div>

    <BadgeDisplay {userProfile} />

    <!-- Communities -->
    <div class="flex flex-col gap-3">
      <h2 class="text-zinc-400 text-xs font-semibold uppercase tracking-wide">Communities</h2>
      <p class="text-zinc-600 text-sm">Not in any communities yet.</p>
    </div>

    {#if isOwner}
      <EditProfileForm {userProfile} />
    {/if}

  </div>
</div>