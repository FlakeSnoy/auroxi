<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  function handleScroll() { scrolled = window.scrollY > 20; }

  const dropItem = 'flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-zinc-400 hover:text-white transition-colors group';
</script>

<svelte:window onscroll={handleScroll} />

<nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300
  {scrolled ? 'bg-zinc-900/98 backdrop-blur-xl shadow-xl shadow-black/40 border-zinc-700/50' : 'bg-zinc-900/75 backdrop-blur-md border-zinc-800/50'}
  rounded-2xl border px-5 py-3">

  <div class="flex items-center justify-between">
    <a href="/" class="flex items-center gap-3 group">
      <img src="/favicon.svg" alt="Auroxi" class="w-9 h-9 rounded-xl group-hover:opacity-80 transition-opacity" />
      <div class="flex flex-col leading-none">
        <span class="text-white font-black text-base tracking-tight">Auroxi</span>
        <span class="text-zinc-600 text-[10px] hidden sm:block font-medium">by Anthro-labs</span>
      </div>
    </a>

    <div class="hidden md:flex items-center gap-1">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button {...props} variant="ghost" class="text-zinc-400 hover:text-white hover:bg-transparent text-sm gap-1.5">
              About
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-52 bg-zinc-900/95 backdrop-blur-xl border-zinc-800 rounded-2xl shadow-2xl p-2 mt-2" align="start">
          <DropdownMenu.Item class="p-0 focus:bg-transparent">
            <a href="/about/information" class={dropItem}>
              <div class="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#60a5fa" stroke-width="2"/><path d="M12 8v4M12 16h.01" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/></svg>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-sm font-semibold">Information</span>
                <span class="text-xs text-zinc-600 mt-0.5">About Auroxi</span>
              </div>
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button {...props} variant="ghost" class="text-zinc-400 hover:text-white hover:bg-transparent text-sm gap-1.5">
              Docs
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-52 bg-zinc-900/95 backdrop-blur-xl border-zinc-800 rounded-2xl shadow-2xl p-2 mt-2" align="start">
          <DropdownMenu.Item class="p-0 focus:bg-transparent">
            <a href="/newsroom" class={dropItem}>
              <div class="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2V9" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-sm font-semibold">Newsroom</span>
                <span class="text-xs text-zinc-600 mt-0.5">Updates & announcements</span>
              </div>
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Separator orientation="vertical" class="h-4 bg-zinc-700/60 mx-2" />

      <a href="/login" class="text-zinc-400 hover:text-white text-sm font-medium transition-colors px-3 py-2">Login</a>
      <a href="/register" class="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all">
        Get started
      </a>
    </div>

    <Button variant="ghost" size="icon" onclick={() => mobileOpen = !mobileOpen}
      class="md:hidden w-9 h-9 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white">
      {#if mobileOpen}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
      {:else}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
      {/if}
    </Button>
  </div>

  {#if mobileOpen}
    <div class="md:hidden mt-3 pt-3 border-t border-zinc-800 flex flex-col gap-1">
      <a href="/about/information" onclick={() => mobileOpen = false} class="text-zinc-400 hover:text-white text-sm px-3 py-2 transition-colors">Information</a>
      <a href="/newsroom" onclick={() => mobileOpen = false} class="text-zinc-400 hover:text-white text-sm px-3 py-2 transition-colors">Newsroom</a>
      <Separator class="bg-zinc-800 my-1" />
      <a href="/register" class="text-white font-bold text-sm px-3 py-2.5">Get started</a>
      <a href="/login" class="text-zinc-500 text-sm px-3 py-2">Login</a>
    </div>
  {/if}
</nav>