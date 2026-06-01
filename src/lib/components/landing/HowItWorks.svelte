<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let visible = $state(false);

  const steps = [
    {
      number: '01', title: 'Create your account',
      description: 'Sign up with your name, email and password. Set your school, country and grade.',
      detail: 'No payment required.',
      svg: `
        <circle cx="32" cy="22" r="10" stroke="#60a5fa" stroke-width="2.5" fill="none"
          style="stroke-dasharray:63;stroke-dashoffset:63;animation:draw 0.8s ease forwards 0.2s"/>
        <path d="M14 52c0-9.9 8.1-18 18-18s18 8.1 18 18"
          stroke="#60a5fa" stroke-width="2.5" fill="none" stroke-linecap="round"
          style="stroke-dasharray:57;stroke-dashoffset:57;animation:draw 0.8s ease forwards 0.6s"/>
        <circle cx="46" cy="16" r="9" fill="#18181b" stroke="#60a5fa" stroke-width="2"
          style="opacity:0;animation:pop 0.3s ease forwards 1s"/>
        <path d="M42 16l3 3 5-5" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
          style="stroke-dasharray:14;stroke-dashoffset:14;animation:draw 0.4s ease forwards 1.2s"/>
      `,
    },
    {
      number: '02', title: 'Publish your notes',
      description: 'Type notes, upload a photo or drop a PDF. Tag it to your school, grade and subject.',
      detail: 'Photos converted to PDF via OCR.',
      svg: `
        <rect x="14" y="8" width="28" height="36" rx="4"
          stroke="#60a5fa" stroke-width="2.5" fill="none"
          style="stroke-dasharray:120;stroke-dashoffset:120;animation:draw 0.8s ease forwards 0.2s"/>
        <path d="M20 22h16M20 28h12" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"
          style="stroke-dasharray:30;stroke-dashoffset:30;animation:draw 0.5s ease forwards 0.9s"/>
        <circle cx="44" cy="44" r="10" fill="#18181b" stroke="#60a5fa" stroke-width="2"
          style="opacity:0;animation:pop 0.3s ease forwards 1.1s"/>
        <path d="M44 48v-9" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"
          style="stroke-dasharray:10;stroke-dashoffset:10;animation:draw 0.3s ease forwards 1.3s"/>
        <path d="M41 42l3-3 3 3" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
          style="stroke-dasharray:10;stroke-dashoffset:10;animation:draw 0.3s ease forwards 1.5s"/>
      `,
    },
    {
      number: '03', title: 'Join groups and chat',
      description: 'Browse study groups by subject. Chat with members — every message is auto-moderated.',
      detail: 'No manual reporting needed.',
      svg: `
        <circle cx="22" cy="24" r="8" stroke="#60a5fa" stroke-width="2.5" fill="none"
          style="stroke-dasharray:50;stroke-dashoffset:50;animation:draw 0.6s ease forwards 0.2s"/>
        <circle cx="42" cy="24" r="8" stroke="#60a5fa" stroke-width="2.5" fill="none"
          style="stroke-dasharray:50;stroke-dashoffset:50;animation:draw 0.6s ease forwards 0.4s"/>
        <path d="M8 48c0-7.7 6.3-14 14-14" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" fill="none"
          style="stroke-dasharray:22;stroke-dashoffset:22;animation:draw 0.5s ease forwards 0.8s"/>
        <path d="M56 48c0-7.7-6.3-14-14-14" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" fill="none"
          style="stroke-dasharray:22;stroke-dashoffset:22;animation:draw 0.5s ease forwards 0.8s"/>
        <path d="M28 48c0-3.9 1.8-7 4-7s4 3.1 4 7" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" fill="none"
          style="stroke-dasharray:14;stroke-dashoffset:14;animation:draw 0.4s ease forwards 1.1s"/>
      `,
    },
    {
      number: '04', title: 'Earn Lunes rewards',
      description: 'Log in daily to earn 0.5 Lunes. Save up to unlock Premium or buy a pack.',
      detail: '40 Lunes = 1 month Premium.',
      svg: `
        <circle cx="32" cy="32" r="18" stroke="#60a5fa" stroke-width="2.5" fill="none"
          style="stroke-dasharray:113;stroke-dashoffset:113;animation:draw 1s ease forwards 0.2s"/>
        <path d="M26 27c0-3.3 2.7-6 6-6s6 2.7 6 6c0 5-6 6-6 10"
          stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" fill="none"
          style="stroke-dasharray:40;stroke-dashoffset:40;animation:draw 0.6s ease forwards 1s"/>
        <circle cx="32" cy="42" r="1.5" fill="#60a5fa"
          style="opacity:0;animation:pop 0.3s ease forwards 1.5s"/>
      `,
    },
  ];

  onMount(() => { requestAnimationFrame(() => { visible = true; }); });
</script>

<style>
  @keyframes draw { to { stroke-dashoffset: 0; } }
  @keyframes pop  { to { opacity: 1; } }
  :global(.step-svg svg *) { animation-play-state: paused; }
  :global(.step-svg.play svg *) { animation-play-state: running; }
</style>

<section id="how-it-works" class="bg-zinc-900 py-24 px-6 border-t border-zinc-800/60 relative overflow-hidden">


  <div class="max-w-5xl mx-auto relative z-10">

    <div class="mb-10 transition-all duration-700
      {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
      <Badge variant="outline"
        class="text-zinc-500 border-zinc-700 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase">
        How it works
      </Badge>
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
        Four steps to get started
      </h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {#each steps as step, i}
        <Card.Root
          class="bg-zinc-800/40 border-zinc-700/50 rounded-xl overflow-hidden
            hover:border-zinc-600 transition-colors duration-200 group step-svg play"
          style="animation-delay:{i * 80}ms"
        >
          <div class="aspect-square bg-zinc-800/60 border-b border-zinc-700/50
            flex items-center justify-center relative">
            <div class="absolute top-2 left-2">
              <Badge variant="outline"
                class="text-blue-400 border-zinc-700 text-[10px] font-mono font-bold rounded-full px-2 py-0">
                {step.number}
              </Badge>
            </div>
            <svg viewBox="0 0 64 64" fill="none" class="w-16 h-16 mt-4">
              {@html step.svg}
            </svg>
            <div class="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700
              flex items-center justify-center">
              <img src="/favicon.svg" alt="" class="w-4 h-4 rounded-sm border-0 outline-none" />
            </div>
          </div>
          <Card.Content class="p-3">
            <Card.Title class="text-zinc-100 text-xs font-bold mb-1 group-hover:text-white transition-colors">
              {step.title}
            </Card.Title>
            <p class="text-zinc-500 text-[11px] leading-relaxed mb-2">{step.description}</p>
            <Separator class="bg-zinc-700/50 mb-2" />
            <p class="text-zinc-600 text-[10px]">{step.detail}</p>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>

  </div>
</section>