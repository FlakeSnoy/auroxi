<script lang="ts">
  import { page } from '$app/stores';

  const current = $derived($page.url.pathname);

  const nav = [
    { href: '/home',      label: 'Home' },
    { href: '/library',   label: 'Library' },
    { href: '/workshop',  label: 'Workshop' },
    { href: '/artifacts', label: 'Artifacts' },
  ];
</script>

<aside class="hidden md:flex flex-col w-56 border-r border-zinc-800 px-3 py-6 gap-1 fixed h-full bg-zinc-950 z-40">

  <!-- Logo -->
  <div class="flex items-center gap-2 px-3 mb-8">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="8" fill="#2563eb"/>
      <path d="M7 14L12 9L17 14L12 19L7 14Z" fill="white" opacity="0.9"/>
      <path d="M13 14L18 9L21 12L18 17L13 14Z" fill="white" opacity="0.5"/>
    </svg>
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
        {item.label}
      </a>
    {/each}
  </nav>

  <!-- Version -->
  <p class="text-zinc-600 text-xs px-3">v0.0.1</p>

</aside>

<!-- Mobile bottom nav -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 flex justify-around px-2 py-3 z-50">
  {#each nav as item}
    <a href={item.href}
      class="text-xs font-medium transition-all
        {current.startsWith(item.href) ? 'text-blue-500' : 'text-zinc-500'}">
      {item.label}
    </a>
  {/each}
</nav>