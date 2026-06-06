<script lang="ts">
  import { page } from '$app/stores';
  import Avatar from '$lib/components/ui/Avatar.svelte';
  import { goto } from '$app/navigation';

  const user = $derived($page.data.user);
  const profileId = $derived($page.data.profileId);
  let open = $state(false);

  async function logout() {
    await fetch('/api/auth/sign-out', { method: 'POST' });
    goto('/login');
  }
</script>

<div class="relative">
  <button onclick={() => open = !open} class="rounded-full focus:outline-none">
    <Avatar src={user?.image ?? undefined} name={user?.name} size={8} />
  </button>

  {#if open}
    <button class="fixed inset-0 z-40" onclick={() => open = false} aria-label="close"></button>
    <div class="absolute right-0 top-10 w-48 bg-zinc-800 border border-zinc-700 rounded-xl shadow-xl z-50 overflow-hidden">
      <div class="px-4 py-3 border-b border-zinc-700">
        <p class="text-white text-sm font-semibold truncate">{user?.name}</p>
        <p class="text-zinc-500 text-xs truncate">{user?.email}</p>
      </div>
      <div class="flex flex-col py-1">
        <a href="/users/{profileId}" onclick={() => open = false}
          class="px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors">
          Profile
        </a>
        <a href="/settings" onclick={() => open = false}
          class="px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors">
          Settings
        </a>
        <button onclick={logout}
          class="px-4 py-2 text-sm text-red-400 hover:bg-zinc-700 text-left transition-colors w-full">
          Sign out
        </button>
      </div>
    </div>
  {/if}
</div>