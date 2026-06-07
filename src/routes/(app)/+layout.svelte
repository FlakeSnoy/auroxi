<script lang="ts">
  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Frame from '$lib/components/layout/Frame.svelte';

  const { children } = $props();
</script>

<div class="h-screen bg-zinc-900 flex overflow-hidden">
  <Sidebar />
  <Frame>
    <Navbar />
    <main class="flex-1 overflow-y-auto">
      {@render children()}
    </main>
  </Frame>
</div>