<script lang="ts">
  import type { PageData } from './$types.js';
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';

  type Profile = InferSelectModel<typeof profile>;
  const { data }: { data: PageData & { userProfile: Profile | undefined } } = $props();
</script>

<svelte:head><title>Home | Auroxi</title></svelte:head>

<!-- dashboard components go here -->