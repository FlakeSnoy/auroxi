<script lang="ts">
  let scrolled = $state(false);
  let mobileOpen = $state(false);

  function handleScroll() {
    scrolled = window.scrollY > 20;
  }

  function toggleMobile() {
    mobileOpen = !mobileOpen;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<!-- Floating rounded navbar -->
<nav
  class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500
    {scrolled
      ? 'bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-black/50 border-zinc-700/80'
      : 'bg-zinc-900/70 backdrop-blur-md border-zinc-800/80'}
    rounded-2xl border px-5 py-3"
>
  <div class="flex items-center justify-between">

    <!-- Brand left -->
    <a href="/" class="flex items-center gap-2.5 group">
      <div class="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center shadow-lg shadow-lime-400/30 group-hover:shadow-lime-400/50 transition-all group-hover:scale-105">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="#09090b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="flex flex-col leading-none">
        <span class="text-white font-black text-base tracking-tight">Auroxi</span>
        <span class="text-zinc-600 text-[10px] hidden sm:block">by Anthro-labs</span>
      </div>
    </a>

    <!-- Nav items right — desktop -->
    <div class="hidden md:flex items-center gap-1">
      <a href="#how-it-works"
        class="text-zinc-400 hover:text-white text-sm px-3 py-2 rounded-xl hover:bg-zinc-800/80 transition-all">
        How it works
      </a>
      <a href="#features"
        class="text-zinc-400 hover:text-white text-sm px-3 py-2 rounded-xl hover:bg-zinc-800/80 transition-all">
        Features
      </a>
      <div class="w-px h-4 bg-zinc-700 mx-2"></div>
      <a href="/login"
        class="text-zinc-400 hover:text-white text-sm px-4 py-2 rounded-xl hover:bg-zinc-800/80 transition-all font-medium">
        Login
      </a>
      <a href="/register"
        class="bg-lime-400 hover:bg-lime-300 active:scale-95 text-zinc-950 font-black text-sm px-5 py-2 rounded-xl transition-all shadow-lg shadow-lime-400/20 hover:shadow-lime-400/40">
        Register
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button
      onclick={toggleMobile}
      class="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all text-zinc-400 hover:text-white"
      aria-label="Toggle menu"
    >
      {#if mobileOpen}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      {:else}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      {/if}
    </button>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div class="md:hidden mt-3 pt-3 border-t border-zinc-800 flex flex-col gap-1">
      <a href="#how-it-works" onclick={toggleMobile}
        class="text-zinc-400 hover:text-white text-sm px-3 py-2.5 rounded-xl hover:bg-zinc-800 transition-all">
        How it works
      </a>
      <a href="#features" onclick={toggleMobile}
        class="text-zinc-400 hover:text-white text-sm px-3 py-2.5 rounded-xl hover:bg-zinc-800 transition-all">
        Features
      </a>
      <div class="w-full h-px bg-zinc-800 my-1"></div>
      <a href="/login"
        class="text-zinc-400 hover:text-white text-sm px-3 py-2.5 rounded-xl hover:bg-zinc-800 transition-all font-medium">
        Login
      </a>
      <a href="/register"
        class="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-sm px-4 py-2.5 rounded-xl transition-all text-center mt-1">
        Register
      </a>
    </div>
  {/if}
</nav>