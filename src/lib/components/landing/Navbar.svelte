<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  function handleScroll() {
    scrolled = window.scrollY > 20;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500
  {scrolled
    ? 'bg-zinc-900/98 backdrop-blur-xl shadow-2xl shadow-black/60 border-zinc-700/60'
    : 'bg-zinc-900/80 backdrop-blur-md border-zinc-800/60'}
  rounded-2xl border px-5 py-3">

  <div class="flex items-center justify-between">

    <!-- Brand -->
    <a href="/" class="flex items-center gap-3 group">
      <div class="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700
        group-hover:border-zinc-600 flex items-center justify-center transition-all shrink-0">
        <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
          <path d="M32 48 L32 20 C32 20 24 18 16 22 L16 50 C24 46 32 48 32 48Z"
            stroke="#a3e635" stroke-width="4" stroke-linejoin="round" fill="none"/>
          <path d="M32 48 L32 20 C32 20 40 18 48 22 L48 50 C40 46 32 48 32 48Z"
            stroke="#a3e635" stroke-width="4" stroke-linejoin="round" fill="#a3e635" fill-opacity="0.08"/>
          <line x1="32" y1="20" x2="32" y2="12"
            stroke="#a3e635" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M28 16 L32 11 L36 16"
            stroke="#a3e635" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>
      <div class="flex flex-col leading-none">
        <span class="text-white font-black text-base tracking-tight">Auroxi</span>
        <span class="text-zinc-600 text-[10px] hidden sm:block font-medium">by Anthro-labs</span>
      </div>
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-1">
      <Button variant="ghost" href="#how-it-works"
        class="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 font-medium text-sm rounded-xl">
        How it works
      </Button>

      <Button variant="ghost" href="#features"
        class="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 font-medium text-sm rounded-xl">
        Features
      </Button>

      <Separator orientation="vertical" class="h-4 bg-zinc-700 mx-2" />

      <!-- Auth dropdown -->
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button {...props} variant="ghost"
              class="text-zinc-300 hover:text-white hover:bg-zinc-800/60 font-semibold text-sm rounded-xl gap-1.5">
              Auth
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          class="w-52 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl shadow-black/50 p-1.5 mt-2"
          align="end">

          <!-- Register — plain <a> inside Item -->
          <DropdownMenu.Item>
            <a href="/register"
              class="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full group">
              <div class="w-7 h-7 rounded-lg bg-lime-400/10 border border-lime-400/20
                flex items-center justify-center shrink-0 group-hover:bg-lime-400/15 transition-all">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#a3e635" stroke-width="2"/>
                  <line x1="19" y1="8" x2="19" y2="14" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
                  <line x1="22" y1="11" x2="16" y2="11" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-sm font-semibold text-zinc-200 group-hover:text-white">Register</span>
                <span class="text-xs text-zinc-500 mt-0.5">Create your account</span>
              </div>
            </a>
          </DropdownMenu.Item>

          <Separator class="bg-zinc-800 my-1" />

          <!-- Login -->
          <DropdownMenu.Item>
            <a href="/login"
              class="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full group">
              <div class="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700
                flex items-center justify-center shrink-0 group-hover:border-zinc-600 transition-all">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="10 17 15 12 10 7" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <line x1="15" y1="12" x2="3" y2="12" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-sm font-semibold text-zinc-200 group-hover:text-white">Login</span>
                <span class="text-xs text-zinc-500 mt-0.5">Welcome back</span>
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
      class="md:hidden w-9 h-9 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white">
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
      <Button variant="ghost" href="#how-it-works" onclick={() => mobileOpen = false}
        class="w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-800 font-medium text-sm rounded-xl">
        How it works
      </Button>
      <Button variant="ghost" href="#features" onclick={() => mobileOpen = false}
        class="w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-800 font-medium text-sm rounded-xl">
        Features
      </Button>
      <Separator class="bg-zinc-800 my-1" />
      <Button href="/register"
        class="w-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-sm rounded-xl">
        Register
      </Button>
      <Button variant="ghost" href="/login"
        class="w-full justify-start text-zinc-300 hover:text-white hover:bg-zinc-800 font-semibold text-sm rounded-xl">
        Login
      </Button>
    </div>
  {/if}

</nav>