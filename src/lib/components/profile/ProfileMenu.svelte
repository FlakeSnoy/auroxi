<script lang="ts">
  import { page } from '$app/stores';
  import ProfileCard from '$lib/components/profile/ProfileCard.svelte';

  const user = $derived($page.data.user);
</script>

<a href="/profile" class="flex items-center gap-2 group">
  <ProfileCard {user} />
</a>