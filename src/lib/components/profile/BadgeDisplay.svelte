<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';
  import Badge from '$lib/components/badges/Badge.svelte';

  type Profile = InferSelectModel<typeof profile>;
  const { userProfile }: { userProfile: Profile | undefined } = $props();

  // placeholder until badges are loaded from DB
  const badges: { name: string; icon: string; color: string; description: string }[] = [];
</script>

<div class="flex flex-col gap-3">
  <h2 class="text-zinc-400 text-xs font-semibold uppercase tracking-wide">Badges</h2>
  {#if badges.length > 0}
    <div class="grid grid-cols-8 gap-2">
      {#each badges as badge}
        <Badge {...badge} />
      {/each}
    </div>
  {:else}
    <p class="text-zinc-600 text-sm">No badges yet.</p>
  {/if}
</div>