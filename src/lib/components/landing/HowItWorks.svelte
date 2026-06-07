<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';

  let visible = $state(false);
  onMount(() => requestAnimationFrame(() => { visible = true; }));

  const steps = [
    {
      number: '01',
      title: 'Create your account',
      description: 'Sign up with your name, email and password. Set your school, country and grade.',
      detail: 'No payment required.',
      icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6',
    },
    {
      number: '02',
      title: 'Publish your notes',
      description: 'Type notes, upload a photo or drop a PDF. Tagged to your school, grade and subject.',
      detail: 'Photos converted via OCR.',
      icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M12 18v-6M9 15h6',
    },
    {
      number: '03',
      title: 'Join groups & chat',
      description: 'Browse study groups by subject. Chat with auto-moderation on every message.',
      detail: 'No manual reporting needed.',
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    },
    {
      number: '04',
      title: 'Earn Lunes rewards',
      description: 'Log in daily to earn Lunes. Save up to unlock Premium or buy a pack.',
      detail: '40 Lunes = 1 month Premium.',
      icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2',
    },
  ];
</script>

<section id="how-it-works" class="bg-zinc-950 py-24 px-6 border-t border-zinc-800/40">
  <div class="max-w-5xl mx-auto flex flex-col gap-10">

    <div class="flex flex-col gap-2 transition-all duration-700 {visible ? 'opacity-100' : 'opacity-0'}">
      <Badge variant="outline" class="text-zinc-500 border-zinc-800 rounded-full text-xs w-fit uppercase tracking-widest">
        How it works
      </Badge>
      <h2 class="text-3xl font-black text-white">Four steps to get started</h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {#each steps as step, i}
        <Card.Root class="bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all group">
          <!-- Top: visual -->
          <div class="aspect-square bg-zinc-800/60 border-b border-zinc-800 flex items-center justify-center relative p-6">
            <Badge variant="outline" class="absolute top-2 left-2 text-blue-400 border-blue-500/20 bg-blue-500/10 text-[10px] rounded-full font-mono">
              {step.number}
            </Badge>
            <svg class="w-12 h-12 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d={step.icon} />
            </svg>
          </div>
          <!-- Bottom: text -->
          <Card.Content class="p-3 flex flex-col gap-2">
            <p class="text-zinc-100 text-xs font-bold">{step.title}</p>
            <p class="text-zinc-500 text-[11px] leading-relaxed">{step.description}</p>
            <Separator class="bg-zinc-800" />
            <p class="text-zinc-600 text-[10px]">{step.detail}</p>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>

  </div>
</section>