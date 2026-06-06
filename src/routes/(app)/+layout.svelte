<script lang="ts">
  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Frame from '$lib/components/layout/Frame.svelte';

  const { children } = $props();
</script>

<div class="min-h-screen bg-zinc-900 flex">
  <Sidebar />
  <Frame>
    <Navbar />
    <main class="flex-1 p-6 flex flex-col gap-6">
      {@render children()}
    </main>
  </Frame>
</div>