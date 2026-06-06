<script lang="ts">
  import SearchBar from '$lib/components/search/SearchBar.svelte';
  import ProfileMenu from '$lib/components/profile/ProfileMenu.svelte';
</script>

<header class="h-14 border-b border-zinc-800 px-6 flex items-center justify-between bg-zinc-900 sticky top-0 z-40">
  <SearchBar />
  <ProfileMenu />
</header>