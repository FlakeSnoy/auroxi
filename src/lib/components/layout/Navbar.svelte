<script lang="ts">
  import SearchBar from '$lib/components/search/SearchBar.svelte';
  import ProfileDropdown from '$lib/components/layout/ProfileDropdown.svelte';
</script>

<header class="h-14 flex items-center justify-center relative px-6 bg-zinc-900 sticky top-0 z-30 border-b border-zinc-800/50 shrink-0">
  <div class="w-96">
    <SearchBar />
  </div>
  <div class="absolute right-6">
    <ProfileDropdown />
  </div>
</header>