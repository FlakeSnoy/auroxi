<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types.js';
  import type { profile } from '$lib/server/db/schema.js';

  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Frame from '$lib/components/layout/Frame.svelte';

  type Profile = typeof profile.$inferSelect;
  const { data }: { data: PageData & { userProfile: Profile | undefined } } = $props();
  const user = $derived($page.data.user);
</script>

<svelte:head><title>Home — Auroxi</title></svelte:head>

<Sidebar />

<div class="flex-1 flex flex-col md:ml-56">
  <Navbar {user} />
  <main class="flex-1 p-6 flex flex-col gap-6">
    <!-- import dashboard components here -->
  </main>
</div>