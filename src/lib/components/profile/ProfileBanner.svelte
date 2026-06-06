<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';

  type Profile = InferSelectModel<typeof profile>;
  const { userProfile }: { userProfile: Profile | undefined } = $props();
</script>

<div class="w-full h-36 rounded-2xl bg-zinc-800 overflow-hidden border border-zinc-700/50">
  {#if userProfile?.banner}
    <img src={userProfile.banner} alt="banner" class="w-full h-full object-cover" />
  {:else}
    <div class="w-full h-full bg-linear-to-br from-zinc-800 to-blue-900/30"></div>
  {/if}
</div>