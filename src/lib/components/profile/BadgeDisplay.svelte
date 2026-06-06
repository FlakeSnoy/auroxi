<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';

  type Profile = InferSelectModel<typeof profile>;
  const { userProfile }: { userProfile: Profile | undefined } = $props();
</script>

<div class="flex flex-col gap-2">
  <h2 class="text-zinc-400 text-xs font-semibold uppercase tracking-wide">Badges</h2>
  <div class="flex gap-2 flex-wrap">
    <span class="text-zinc-600 text-sm">No badges yet.</span>
  </div>
</div>