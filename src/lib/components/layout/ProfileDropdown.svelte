<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Avatar from '$lib/components/ui/Avatar.svelte';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

  const user = $derived($page.data.user);
  const profileId = $derived($page.data.profileId);
  const userProfile = $derived($page.data.userProfile);

  async function logout() {
    await fetch('/api/auth/sign-out', { method: 'POST' });
    goto('/login');
  }
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger class="rounded-full focus:outline-none">
    <Avatar src={userProfile?.avatar ?? undefined} name={userProfile?.username} size={8} />
  </DropdownMenu.Trigger>

  <DropdownMenu.Content class="w-48 bg-zinc-800 border-zinc-700 rounded-xl shadow-xl" align="end">
    <DropdownMenu.Label class="px-3 py-2 border-b border-zinc-700">
      <p class="text-white text-sm font-semibold truncate">{userProfile?.username ?? user?.name}</p>
    </DropdownMenu.Label>

    <DropdownMenu.Group>
      <DropdownMenu.Item
        class="text-zinc-300 hover:text-white hover:bg-zinc-700 cursor-pointer"
        onclick={() => goto(`/users/${profileId}/profile`)}>
        Profile
      </DropdownMenu.Item>
      <DropdownMenu.Item
        class="text-zinc-300 hover:text-white hover:bg-zinc-700 cursor-pointer"
        onclick={() => goto('/settings')}>
        Settings
      </DropdownMenu.Item>
    </DropdownMenu.Group>

    <DropdownMenu.Separator class="bg-zinc-700" />

    <DropdownMenu.Item
      class="text-red-400 hover:bg-zinc-700 cursor-pointer"
      onclick={logout}>
      Sign out
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>