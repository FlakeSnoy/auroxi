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

  <DropdownMenu.Content class="w-56 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-1" align="end">

    <!-- User info -->
    <div class="flex items-center gap-3 px-3 py-2.5 border-b border-zinc-800 mb-1">
      <Avatar src={userProfile?.avatar ?? undefined} name={userProfile?.username} size={8} />
      <div class="flex flex-col min-w-0">
        <p class="text-white text-sm font-semibold truncate">{userProfile?.displayName ?? userProfile?.username ?? user?.name}</p>
        <p class="text-zinc-500 text-xs truncate">@{userProfile?.username ?? ''}</p>
      </div>
    </div>

    <DropdownMenu.Item
      class="flex items-center gap-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl px-3 py-2 cursor-pointer text-sm transition-colors"
      onclick={() => goto(`/users/${profileId}/profile`)}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
      Profile
    </DropdownMenu.Item>

    <DropdownMenu.Item
      class="flex items-center gap-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl px-3 py-2 cursor-pointer text-sm transition-colors"
      onclick={() => goto('/settings')}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
      Settings
    </DropdownMenu.Item>

    <div class="h-px bg-zinc-800 my-1"></div>

    <DropdownMenu.Item
      class="flex items-center gap-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl px-3 py-2 cursor-pointer text-sm transition-colors"
      onclick={logout}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
      </svg>
      Sign out
    </DropdownMenu.Item>

  </DropdownMenu.Content>
</DropdownMenu.Root>