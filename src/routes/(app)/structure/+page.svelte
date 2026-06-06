<script lang="ts">
  import { page } from '$app/stores';
  import type { profile } from '$lib/server/db/schema.js';

  type Profile = typeof profile.$inferSelect;
  const { userProfile }: { userProfile: Profile | undefined } = $props();

  const user = $derived($page.data.user);
</script>

<div class="min-h-screen bg-zinc-950 text-white">
  <div class="flex">
    <main class="flex-1 flex flex-col gap-6 p-6 max-w-4xl mx-auto w-full">

      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-white font-black text-xl">
            Hey, {userProfile?.displayName ?? user?.name} 👋
          </h1>
          <p class="text-zinc-500 text-sm">Here's what's happening today.</p>
        </div>
        <div class="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden shrink-0">
          {#if user?.image}
            <img src={user.image} alt="avatar" class="w-full h-full object-cover" />
          {:else}
            <div class="w-full h-full flex items-center justify-center text-zinc-400 text-sm font-bold">
              {user?.name?.[0]?.toUpperCase()}
            </div>
          {/if}
        </div>
      </div>

      <!-- Components go here -->

    </main>
  </div>
</div>