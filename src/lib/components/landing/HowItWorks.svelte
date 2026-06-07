<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';

  let visible = $state(false);
  onMount(() => requestAnimationFrame(() => { visible = true; }));

  const steps = [
    {
      number: '01',
      title: 'Create your account',
      description: 'Sign up with your name, email and password. Set your school, country and grade — takes 60 seconds.',
      detail: 'No payment required.',
      icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6',
      color: 'from-blue-900/20 to-zinc-900',
    },
    {
      number: '02',
      title: 'Publish your notes',
      description: 'Type notes, upload a photo or drop a PDF. Tagged to your school, grade and subject automatically.',
      detail: 'Photos converted via OCR.',
      icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M12 18v-6M9 15h6',
      color: 'from-indigo-900/20 to-zinc-900',
    },
    {
      number: '03',
      title: 'Join groups & chat',
      description: 'Browse study groups by subject. Chat with classmates — auto-moderation keeps things clean.',
      detail: 'No manual reporting needed.',
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
      color: 'from-blue-900/20 to-zinc-900',
    },
    {
      number: '04',
      title: 'Earn Lunes rewards',
      description: 'Log in daily to earn Lunes. Contribute notes for bonus Lunes. Save up to unlock Premium.',
      detail: '40 Lunes = 1 month Premium.',
      icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2',
      color: 'from-indigo-900/20 to-zinc-900',
    },
  ];
</script>

<section id="how-it-works" class="bg-zinc-950 py-28 px-6 border-t border-zinc-800/40">
  <div class="max-w-6xl mx-auto flex flex-col gap-16">

    <div class="flex flex-col gap-3 transition-all duration-700 {visible ? 'opacity-100' : 'opacity-0'}">
      <Badge variant="outline" class="text-zinc-500 border-zinc-800 rounded-full text-xs w-fit uppercase tracking-widest">
        How it works
      </Badge>
      <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">Four steps.<br/>That's all it takes.</h2>
      <p class="text-zinc-500 text-base max-w-md">From signup to studying with your class — Auroxi gets you there fast.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each steps as step, i}
        <div class="group relative bg-linear-to-b {step.color} border border-zinc-800 hover:border-zinc-600 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col"
          style="animation-delay:{i * 100}ms">

          <!-- Top visual area -->
          <div class="flex-1 flex items-center justify-center p-10 relative min-h-48">
            <!-- Number watermark -->
            <span class="absolute top-4 left-5 text-zinc-800 font-black text-5xl select-none">{step.number}</span>
            <!-- Icon -->
            <div class="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
              <svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d={step.icon} />
              </svg>
            </div>
          </div>

          <!-- Bottom text -->
          <div class="p-5 border-t border-zinc-800/60 flex flex-col gap-2">
            <p class="text-white font-black text-base">{step.title}</p>
            <p class="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
            <p class="text-zinc-700 text-xs mt-1">{step.detail}</p>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>