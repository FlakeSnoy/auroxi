<script lang="ts">
  import SearchBar from '$lib/components/search/SearchBar.svelte';
  import ProfileMenu from '$lib/components/profile/UserMenu.svelte';
</script>

<header class="h-14 flex items-center justify-center relative bg-zinc-900 px-6">
  <div class="w-96">
    <SearchBar />
  </div>
  <div class="absolute right-6">
    <ProfileMenu />
  </div>
</header>