<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  function handleScroll() {
    scrolled = window.scrollY > 20;
  }

  // Dropdown link style — underline on hover, white text, no bg
  const dropItem = 'flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-zinc-400 hover:text-white transition-colors duration-200 group underline-offset-4 hover:underline';
</script>

<svelte:window on:scroll={handleScroll} />

<nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500
  {scrolled
    ? 'bg-zinc-900/98 backdrop-blur-xl shadow-xl shadow-black/40 border-zinc-700/50'
    : 'bg-zinc-900/75 backdrop-blur-md border-zinc-800/50'}
  rounded-2xl border px-5 py-3">

  <div class="flex items-center justify-between">

    <!-- Brand -->
    <a href="/" class="flex items-center gap-3 group">
      <img src="/favicon.svg" alt="Auroxi logo"
        class="w-9 h-9 rounded-xl transition-opacity duration-200 group-hover:opacity-80" />
      <div class="flex flex-col leading-none">
        <span class="text-white font-black text-base tracking-tight">Auroxi</span>
        <span class="text-zinc-600 text-[10px] hidden sm:block font-medium">by Anthro-labs</span>
      </div>
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-1">

      <!-- About dropdown -->
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button {...props} variant="ghost"
              class="text-zinc-400 hover:text-white hover:bg-transparent font-medium text-sm
                transition-colors duration-200 gap-1.5 underline-offset-4 hover:underline">
              About
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          class="w-52 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl shadow-black/60 p-2 mt-2"
          align="start">

          <DropdownMenu.Item class="p-0 focus:bg-transparent">
            <a href="/about/information" class={dropItem}>
              <div class="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#60a5fa" stroke-width="2"/>
                  <path d="M12 8v4M12 16h.01" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-sm font-semibold">Information</span>
                <span class="text-xs text-zinc-600 mt-0.5">About Auroxi</span>
              </div>
            </a>
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <!-- Documentation dropdown -->
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button {...props} variant="ghost"
              class="text-zinc-400 hover:text-white hover:bg-transparent font-medium text-sm
                transition-colors duration-200 gap-1.5 underline-offset-4 hover:underline">
              Documentation
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          class="w-52 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl shadow-black/60 p-2 mt-2"
          align="start">

          <DropdownMenu.Item class="p-0 focus:bg-transparent">
            <a href="/docs/newsroom" class={dropItem}>
              <div class="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2V9" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 14H10M18 10H10M12 18H10" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
                </svg>
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

      <!-- Authentication dropdown -->
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button {...props} variant="ghost"
              class="text-zinc-300 hover:text-white hover:bg-transparent font-semibold text-sm
                transition-colors duration-200 gap-1.5 underline-offset-4 hover:underline">
              Authentication
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          class="w-52 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl shadow-black/60 p-2 mt-2"
          align="end">

          <DropdownMenu.Item class="p-0 focus:bg-transparent">
            <a href="/register" class={dropItem}>
              <div class="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#60a5fa" stroke-width="2"/>
                  <line x1="19" y1="8" x2="19" y2="14" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
                  <line x1="22" y1="11" x2="16" y2="11" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-sm font-semibold">Register</span>
                <span class="text-xs text-zinc-600 mt-0.5">Create your account</span>
              </div>
            </a>
          </DropdownMenu.Item>

          <DropdownMenu.Item class="p-0 focus:bg-transparent">
            <a href="/login" class={dropItem}>
              <div class="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="10 17 15 12 10 7" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="15" y1="12" x2="3" y2="12" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-sm font-semibold">Login</span>
                <span class="text-xs text-zinc-600 mt-0.5">Welcome back</span>
              </div>
            </a>
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Root>

    </div>

    <!-- Mobile toggle -->
    <Button variant="ghost" size="icon"
      onclick={() => mobileOpen = !mobileOpen}
      aria-label="Toggle navigation menu"
      class="md:hidden w-9 h-9 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors duration-200">
      {#if mobileOpen}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      {:else}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      {/if}
    </Button>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div class="md:hidden mt-3 pt-3 border-t border-zinc-800 flex flex-col gap-1">
      <p class="text-zinc-600 text-[10px] uppercase tracking-widest font-semibold px-3 pb-1">About</p>
      <a href="/about/information" onclick={() => mobileOpen = false}
        class="text-zinc-400 hover:text-white text-sm px-3 py-2 transition-colors duration-200 underline-offset-4 hover:underline">
        Information
      </a>
      <Separator class="bg-zinc-800 my-1" />
      <p class="text-zinc-600 text-[10px] uppercase tracking-widest font-semibold px-3 pb-1">Documentation</p>
      <a href="/docs/newsroom" onclick={() => mobileOpen = false}
        class="text-zinc-400 hover:text-white text-sm px-3 py-2 transition-colors duration-200 underline-offset-4 hover:underline">
        Newsroom
      </a>
      <Separator class="bg-zinc-800 my-1" />
      <a href="/register"
        class="text-zinc-300 hover:text-white text-sm font-semibold px-3 py-2.5 transition-colors duration-200 underline-offset-4 hover:underline">
        Register
      </a>
      <a href="/login"
        class="text-zinc-500 hover:text-zinc-300 text-sm px-3 py-2 transition-colors duration-200 underline-offset-4 hover:underline">
        Login
      </a>
    </div>
  {/if}
</nav>