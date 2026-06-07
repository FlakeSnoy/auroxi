<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let visible = $state(false);
  onMount(() => requestAnimationFrame(() => { visible = true; }));

  const badges = [
    { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', delay: '0ms' },
    { icon: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z', delay: '50ms' },
    { icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', delay: '100ms' },
    { icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z', delay: '150ms' },
    { icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 8v4l3 3', delay: '200ms' },
  ];

  const messages = [
    { msg: 'Can someone share their physics notes?', side: 'left' },
    { msg: 'Just uploaded mine! Check library', side: 'right' },
    { msg: "Thanks! You're a lifesaver", side: 'left' },
  ];

  const noteCards = ['Biology Ch.3', 'Math Notes', 'History'];
  const avatars = ['A', 'B', 'C', 'D'];
  const lunes = ['+0.5', '+0.5', '+0.5'];
</script>

<section id="features" class="bg-zinc-950 py-28 px-6 border-t border-zinc-800/40">
  <div class="max-w-6xl mx-auto flex flex-col gap-16">

    <div class="flex flex-col gap-3 transition-all duration-700 {visible ? 'opacity-100' : 'opacity-0'}">
      <Badge variant="outline" class="text-zinc-500 border-zinc-800 rounded-full text-xs w-fit uppercase tracking-widest">
        Features
      </Badge>
      <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">Built for<br/>how students work.</h2>
      <p class="text-zinc-500 text-base max-w-md">Everything you need to study smarter — notes, groups, chat and rewards.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      <!-- Notes Library -->
      <Card.Root class="lg:col-span-2 bg-zinc-900 border-zinc-800 hover:border-zinc-600 rounded-3xl overflow-hidden transition-all duration-300 group">
        <div class="flex items-center justify-center p-16 bg-linear-to-br from-blue-900/20 to-zinc-900 min-h-64 relative">
          <div class="absolute inset-0 pointer-events-none" style="background-image:radial-gradient(circle,#3b82f615 1px,transparent 1px);background-size:24px 24px;"></div>
          <div class="flex gap-3 z-10">
            {#each noteCards as card, i}
              <div class="bg-zinc-800/80 border border-zinc-700 rounded-2xl p-3 flex flex-col gap-1 shadow-xl"
                style="transform:rotate({(i-1) * 4}deg)">
                <svg class="w-4 h-4 text-blue-400 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6" />
                </svg>
                <span class="text-xs text-zinc-300 font-medium">{card}</span>
              </div>
            {/each}
          </div>
        </div>
        <Card.Content class="p-6 border-t border-zinc-800">
          <Card.Title class="text-white text-xl mb-2">Notes Library</Card.Title>
          <Card.Description class="text-zinc-500 text-sm leading-relaxed">Publish typed notes, photos or PDFs tagged to your school, grade and subject. Find notes from your class instantly.</Card.Description>
        </Card.Content>
      </Card.Root>

      <!-- Lunes -->
      <Card.Root class="bg-zinc-900 border-zinc-800 hover:border-zinc-600 rounded-3xl overflow-hidden transition-all duration-300 group">
        <div class="flex items-center justify-center p-10 bg-linear-to-br from-indigo-900/20 to-zinc-900 min-h-48">
          <div class="flex flex-col items-center gap-3">
            <div class="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2" />
              </svg>
            </div>
            <div class="flex gap-1">
              {#each lunes as l}
                <span class="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full px-2 py-0.5">{l}</span>
              {/each}
            </div>
          </div>
        </div>
        <Card.Content class="p-6 border-t border-zinc-800">
          <Card.Title class="text-white text-xl mb-2">Lunes Rewards</Card.Title>
          <Card.Description class="text-zinc-500 text-sm leading-relaxed">Earn 0.5 Lunes every active day. 40 Lunes unlocks Premium.</Card.Description>
        </Card.Content>
      </Card.Root>

      <!-- Study Groups -->
      <Card.Root class="bg-zinc-900 border-zinc-800 hover:border-zinc-600 rounded-3xl overflow-hidden transition-all duration-300 group">
        <div class="flex items-center justify-center p-10 bg-linear-to-br from-blue-900/20 to-zinc-900 min-h-48">
          <div class="flex -space-x-3 group-hover:space-x-1 transition-all duration-300">
            {#each avatars as letter}
              <div class="w-12 h-12 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center text-zinc-300 text-sm font-bold">
                {letter}
              </div>
            {/each}
          </div>
        </div>
        <Card.Content class="p-6 border-t border-zinc-800">
          <Card.Title class="text-white text-xl mb-2">Study Groups</Card.Title>
          <Card.Description class="text-zinc-500 text-sm leading-relaxed">Create or join groups by subject. Discuss and share notes with your classmates.</Card.Description>
        </Card.Content>
      </Card.Root>

      <!-- Messaging -->
      <Card.Root class="bg-zinc-900 border-zinc-800 hover:border-zinc-600 rounded-3xl overflow-hidden transition-all duration-300 group">
        <div class="flex flex-col justify-center gap-2 p-8 bg-linear-to-br from-indigo-900/20 to-zinc-900 min-h-48">
          {#each messages as item}
            <div class="flex {item.side === 'right' ? 'justify-end' : 'justify-start'}">
              <div class="max-w-[75%] bg-zinc-800 border border-zinc-700 rounded-2xl px-3 py-2 text-zinc-300 text-xs">
                {item.msg}
              </div>
            </div>
          {/each}
        </div>
        <Card.Content class="p-6 border-t border-zinc-800">
          <Card.Title class="text-white text-xl mb-2">Messaging</Card.Title>
          <Card.Description class="text-zinc-500 text-sm leading-relaxed">DM friends or chat in groups. Auto-moderation on every message.</Card.Description>
        </Card.Content>
      </Card.Root>

      <!-- Auto-moderation -->
      <Card.Root class="bg-zinc-900 border-zinc-800 hover:border-zinc-600 rounded-3xl overflow-hidden transition-all duration-300 group">
        <div class="flex items-center justify-center p-10 bg-linear-to-br from-blue-900/20 to-zinc-900 min-h-48">
          <div class="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
            </svg>
          </div>
        </div>
        <Card.Content class="p-6 border-t border-zinc-800">
          <Card.Title class="text-white text-xl mb-2">Auto-Moderation</Card.Title>
          <Card.Description class="text-zinc-500 text-sm leading-relaxed">Every message scanned for inappropriate content including bypass attempts.</Card.Description>
        </Card.Content>
      </Card.Root>

      <!-- Badges - full width -->
      <Card.Root class="lg:col-span-3 bg-zinc-900 border-zinc-800 hover:border-zinc-600 rounded-3xl overflow-hidden transition-all duration-300 group flex flex-col sm:flex-row">
        <div class="flex-1 flex items-center justify-center p-10 bg-linear-to-br from-indigo-900/20 to-zinc-900 min-h-40">
          <div class="flex gap-3 flex-wrap justify-center">
            {#each badges as b}
              <div class="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform"
                style="transition-delay:{b.delay}">
                <svg class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d={b.icon} />
                </svg>
              </div>
            {/each}
          </div>
        </div>
        <Card.Content class="p-8 flex flex-col justify-center border-t sm:border-t-0 sm:border-l border-zinc-800 sm:max-w-sm">
          <Card.Title class="text-white text-xl mb-2">Badges & Achievements</Card.Title>
          <Card.Description class="text-zinc-500 text-sm leading-relaxed">Earn badges for contributing notes, hitting activity milestones and being an active community member.</Card.Description>
        </Card.Content>
      </Card.Root>

    </div>
  </div>
</section>