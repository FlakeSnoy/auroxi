<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let activeStep = $state(0);
  let visible = $state(false);
  let animating = $state(false);

  const steps = [
    {
      number: '01', label: 'Register',
      title: 'Create your account',
      description: 'Sign up with your name, email and password. Set your school, country and grade — Auroxi uses this to surface notes and groups from your own class first.',
      detail: 'Takes less than a minute. No payment required to get started.',
      svg: `
        <circle cx="32" cy="22" r="10" stroke="#a3e635" stroke-width="2.5" fill="none"
          style="stroke-dasharray:63;stroke-dashoffset:63;animation:draw 0.8s ease forwards 0.2s"/>
        <path d="M14 52c0-9.9 8.1-18 18-18s18 8.1 18 18"
          stroke="#a3e635" stroke-width="2.5" fill="none" stroke-linecap="round"
          style="stroke-dasharray:57;stroke-dashoffset:57;animation:draw 0.8s ease forwards 0.6s"/>
        <circle cx="46" cy="16" r="9" fill="#18181b" stroke="#a3e635" stroke-width="2"
          style="opacity:0;animation:pop 0.3s ease forwards 1s"/>
        <path d="M42 16l3 3 5-5" stroke="#a3e635" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
          style="stroke-dasharray:14;stroke-dashoffset:14;animation:draw 0.4s ease forwards 1.2s"/>
      `,
    },
    {
      number: '02', label: 'Publish',
      title: 'Publish your notes',
      description: 'Type notes, upload a photo of your notebook or drop a PDF. Tag it to your school, grade and subject — it lands in the shared library and appears in your classmates feeds instantly.',
      detail: 'Photo uploads are processed through OCR and converted to PDF automatically.',
      svg: `
        <rect x="14" y="8" width="28" height="36" rx="4"
          stroke="#a3e635" stroke-width="2.5" fill="none"
          style="stroke-dasharray:120;stroke-dashoffset:120;animation:draw 0.8s ease forwards 0.2s"/>
        <path d="M20 22h16M20 28h12" stroke="#a3e635" stroke-width="2.5" stroke-linecap="round"
          style="stroke-dasharray:30;stroke-dashoffset:30;animation:draw 0.5s ease forwards 0.9s"/>
        <circle cx="44" cy="44" r="10" fill="#18181b" stroke="#a3e635" stroke-width="2"
          style="opacity:0;animation:pop 0.3s ease forwards 1.1s"/>
        <path d="M44 48v-9" stroke="#a3e635" stroke-width="2.5" stroke-linecap="round"
          style="stroke-dasharray:10;stroke-dashoffset:10;animation:draw 0.3s ease forwards 1.3s"/>
        <path d="M41 42l3-3 3 3" stroke="#a3e635" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
          style="stroke-dasharray:10;stroke-dashoffset:10;animation:draw 0.3s ease forwards 1.5s"/>
      `,
    },
    {
      number: '03', label: 'Connect',
      title: 'Join groups and chat',
      description: 'Browse and join study groups by subject. Chat with members, share notes and discuss topics. Every message is automatically scanned to keep conversations appropriate.',
      detail: 'Auto-moderation runs on every message. No manual reporting needed.',
      svg: `
        <circle cx="22" cy="24" r="8" stroke="#a3e635" stroke-width="2.5" fill="none"
          style="stroke-dasharray:50;stroke-dashoffset:50;animation:draw 0.6s ease forwards 0.2s"/>
        <circle cx="42" cy="24" r="8" stroke="#a3e635" stroke-width="2.5" fill="none"
          style="stroke-dasharray:50;stroke-dashoffset:50;animation:draw 0.6s ease forwards 0.4s"/>
        <path d="M8 48c0-7.7 6.3-14 14-14" stroke="#a3e635" stroke-width="2.5" stroke-linecap="round" fill="none"
          style="stroke-dasharray:22;stroke-dashoffset:22;animation:draw 0.5s ease forwards 0.8s"/>
        <path d="M56 48c0-7.7-6.3-14-14-14" stroke="#a3e635" stroke-width="2.5" stroke-linecap="round" fill="none"
          style="stroke-dasharray:22;stroke-dashoffset:22;animation:draw 0.5s ease forwards 0.8s"/>
        <path d="M28 48c0-3.9 1.8-7 4-7s4 3.1 4 7" stroke="#a3e635" stroke-width="2.5" stroke-linecap="round" fill="none"
          style="stroke-dasharray:14;stroke-dashoffset:14;animation:draw 0.4s ease forwards 1.1s"/>
        <rect x="22" y="36" width="20" height="12" rx="3" fill="none" stroke="#a3e635" stroke-width="1.5"
          style="opacity:0;animation:pop 0.3s ease forwards 1.3s"/>
        <path d="M26 42h12M26 46h8" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round"
          style="stroke-dasharray:15;stroke-dashoffset:15;animation:draw 0.3s ease forwards 1.5s"/>
      `,
    },
    {
      number: '04', label: 'Earn',
      title: 'Earn Lunes rewards',
      description: 'Every day you log in and engage with the platform you earn 0.5 Lunes. Save up to unlock Premium for extra features — or buy a Lunes pack to get there faster.',
      detail: '40 Lunes = 1 month Premium. Daily Lunes require an active session to claim.',
      svg: `
        <circle cx="32" cy="32" r="18" stroke="#a3e635" stroke-width="2.5" fill="none"
          style="stroke-dasharray:113;stroke-dashoffset:113;animation:draw 1s ease forwards 0.2s"/>
        <path d="M26 27c0-3.3 2.7-6 6-6s6 2.7 6 6c0 5-6 6-6 10"
          stroke="#a3e635" stroke-width="2.5" stroke-linecap="round" fill="none"
          style="stroke-dasharray:40;stroke-dashoffset:40;animation:draw 0.6s ease forwards 1s"/>
        <circle cx="32" cy="42" r="1.5" fill="#a3e635"
          style="opacity:0;animation:pop 0.3s ease forwards 1.5s"/>
        <path d="M20 10 L10 4M44 10 L54 4" stroke="#a3e635" stroke-width="2" stroke-linecap="round" opacity="0.4"
          style="stroke-dasharray:12;stroke-dashoffset:12;animation:draw 0.4s ease forwards 1.6s"/>
        <path d="M32 6 L32 2" stroke="#a3e635" stroke-width="2" stroke-linecap="round" opacity="0.4"
          style="stroke-dasharray:5;stroke-dashoffset:5;animation:draw 0.3s ease forwards 1.7s"/>
      `,
    },
  ];

  function setStep(i: number) {
    if (i === activeStep) return;
    animating = true;
    setTimeout(() => { activeStep = i; animating = false; }, 150);
  }

  onMount(() => {
    requestAnimationFrame(() => { visible = true; });
    const t = setInterval(() => setStep((activeStep + 1) % steps.length), 4000);
    return () => clearInterval(t);
  });
</script>

<style>
  @keyframes draw { to { stroke-dashoffset: 0; } }
  @keyframes pop  { to { opacity: 1; } }
  /* :global needed because SVG is injected via {@html} */
  :global(.svg-wrap svg *) { animation-play-state: paused; }
  :global(.svg-wrap.active svg *) { animation-play-state: running; }
</style>

<section id="how-it-works" class="bg-zinc-900 py-28 px-6 border-t border-zinc-800/60">
  <div class="max-w-5xl mx-auto">

    <div class="mb-14 transition-all duration-700
      {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
      <Badge variant="outline"
        class="text-zinc-500 border-zinc-700 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase">
        How it works
      </Badge>
      <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3">
        Four steps to get started
      </h2>
      <p class="text-zinc-500 text-base max-w-lg">
        Straightforward by design — here is everything you need to know before signing up.
      </p>
    </div>

    <!-- Step tabs -->
    <div class="flex flex-wrap gap-2 mb-8">
      {#each steps as step, i}
        <Button
          variant={activeStep === i ? 'secondary' : 'ghost'}
          onclick={() => setStep(i)}
          aria-label="Step {step.number}: {step.title}"
          class="gap-2 rounded-xl transition-colors duration-200
            {activeStep === i ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}"
        >
          <span class="font-mono text-xs font-bold
            {activeStep === i ? 'text-lime-400' : 'text-zinc-700'}">
            {step.number}
          </span>
          <span class="hidden sm:block text-sm">{step.label}</span>
        </Button>
      {/each}
    </div>

    <Separator class="bg-zinc-800 mb-10" />

    <!-- Step content -->
    <div class="transition-all duration-150
      {animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

        <!-- Text card -->
        <Card.Root class="bg-zinc-800/40 border-zinc-700/50 rounded-2xl">
          <Card.Header>
            <div class="flex items-center gap-3 mb-1">
              <span class="font-mono text-lime-400 text-sm font-bold">
                {steps[activeStep].number}
              </span>
              <Card.Title class="text-white text-xl font-black">
                {steps[activeStep].title}
              </Card.Title>
            </div>
            <Card.Description class="text-zinc-400 text-sm leading-relaxed">
              {steps[activeStep].description}
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div class="flex items-start gap-2.5 bg-zinc-800 border border-zinc-700/60 rounded-xl px-4 py-3 mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="9" stroke="#a3e635" stroke-width="2"/>
                <path d="M12 8v4M12 16h.01" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <p class="text-zinc-500 text-xs leading-relaxed">{steps[activeStep].detail}</p>
            </div>
            <div class="flex gap-2">
              {#each steps as _, j}
                <button
                  onclick={() => setStep(j)}
                  aria-label="Go to step {j + 1}"
                  class="h-1.5 rounded-full transition-all duration-300
                    {activeStep === j ? 'bg-lime-400 w-8' : 'bg-zinc-700 w-3 hover:bg-zinc-600'}"
                ></button>
              {/each}
            </div>
          </Card.Content>
        </Card.Root>

        <!-- SVG card -->
        <Card.Root class="bg-zinc-800/30 border-zinc-700/40 rounded-2xl flex items-center justify-center p-10
          hover:border-zinc-600 transition-colors duration-300">
          <div class="svg-wrap {!animating ? 'active' : ''}">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-32 h-32">
              {@html steps[activeStep].svg}
            </svg>
          </div>
        </Card.Root>

      </div>
    </div>
  </div>
</section>