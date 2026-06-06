<script lang="ts">
  import { page } from '$app/stores';

  const current = $derived($page.url.pathname);

  const nav = [
    {
      href: '/home', label: 'Home',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
      href: '/library', label: 'Library',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
      href: '/workshop', label: 'Workshop',
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
    },
    {
      href: '/artifacts', label: 'Artifacts',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
  ];
</script>

<aside class="hidden md:flex flex-col w-56 border-r border-zinc-800 px-3 py-6 gap-1 fixed h-full bg-zinc-900 z-40">

  <!-- Logo -->
  <div class="flex items-center gap-2 px-3 mb-8">
    <img src="/favicon.svg" alt="Auroxi" class="w-7 h-7 rounded-lg" />
    <span class="text-white font-black text-base tracking-tight">Auroxi</span>
  </div>

  <!-- Nav -->
  <nav class="flex flex-col gap-1 flex-1">
    {#each nav as item}
      <a href={item.href}
        class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
          {current.startsWith(item.href)
            ? 'bg-blue-600 text-white'
            : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}">
        <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
        </svg>
        {item.label}
      </a>
    {/each}
  </nav>

  <p class="text-zinc-600 text-xs px-3">v0.0.1</p>
</aside>

<!-- Mobile bottom nav -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 flex justify-around px-2 py-3 z-50">
  {#each nav as item}
    <a href={item.href}
      class="flex flex-col items-center gap-1 transition-all
        {current.startsWith(item.href) ? 'text-blue-500' : 'text-zinc-500'}">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
      </svg>
      <span class="text-[10px]">{item.label}</span>
    </a>
  {/each}
</nav>