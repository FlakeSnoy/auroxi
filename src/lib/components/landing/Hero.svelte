<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let visible = $state(false);
  onMount(() => requestAnimationFrame(() => { visible = true; }));

  const orbitals = [
    { size: 340, duration: 12, reverse: false, color: '#3b82f6', dashes: '20 8' },
    { size: 280, duration: 9,  reverse: true,  color: '#60a5fa', dashes: '12 6' },
    { size: 220, duration: 15, reverse: false, color: '#1d4ed8', dashes: '6 10' },
    { size: 160, duration: 7,  reverse: true,  color: '#93c5fd', dashes: '16 4' },
  ];

  const exampleNote = {
    title: 'Photosynthesis — Complete Notes',
    subject: 'Biology',
    grade: 'Form 3',
    school: 'Maru-a-Pula',
  };
</script>

<style>
  @keyframes spin-cw  { to { transform: rotate(360deg);  } }
  @keyframes spin-ccw { to { transform: rotate(-360deg); } }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }
  .orbital-cw  { animation: spin-cw  linear infinite; transform-origin: center; }
  .orbital-ccw { animation: spin-ccw linear infinite; transform-origin: center; }
  .glow { animation: pulse-glow 3s ease-in-out infinite; }
</style>

<section class="min-h-screen bg-zinc-950 flex items-center px-6 relative overflow-hidden pt-24 pb-16">

  <!-- Subtle grid -->
  <div class="absolute inset-0 pointer-events-none"
    style="background-image:radial-gradient(circle,#3f3f4620 1px,transparent 1px);background-size:32px 32px;"></div>

  <!-- Blue glow blob -->
  <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none glow"></div>

  <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
    transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">

    <!-- LEFT -->
    <div class="flex flex-col gap-6">
      <Badge variant="outline" class="border-blue-500/30 text-blue-400 rounded-full px-3 py-1 w-fit text-xs gap-2 flex items-center">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse"></span>
        Open to all students
      </Badge>

      <h1 class="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
        Your school's<br/>knowledge,<br/>
        <span class="text-blue-400">shared.</span>
      </h1>

      <p class="text-zinc-500 text-base leading-relaxed max-w-sm">
        Publish notes, join study groups, chat with classmates and earn Lunes rewards — all in one place built for students.
      </p>

      <div class="flex items-center gap-6 border-t border-zinc-800 pt-5">
        <div>
          <p class="text-zinc-200 font-bold text-sm">Notes library</p>
          <p class="text-zinc-600 text-xs mt-0.5">Tagged by school & class</p>
        </div>
        <div class="w-px h-8 bg-zinc-800"></div>
        <div>
          <p class="text-zinc-200 font-bold text-sm">Study groups</p>
          <p class="text-zinc-600 text-xs mt-0.5">Join by subject</p>
        </div>
        <div class="w-px h-8 bg-zinc-800"></div>
        <div>
          <p class="text-zinc-200 font-bold text-sm">Lunes</p>
          <p class="text-zinc-600 text-xs mt-0.5">Daily rewards</p>
        </div>
      </div>

      <div class="flex items-center gap-6">
        <a href="/register"
          class="bg-blue-600 hover:bg-blue-500 text-white font-black text-sm px-6 py-2.5 rounded-xl transition-all active:scale-95">
          Get started
        </a>
        <a href="#how-it-works"
          class="text-zinc-500 hover:text-zinc-300 font-medium text-sm transition-colors underline-offset-4 hover:underline">
          How it works
        </a>
      </div>
    </div>

    <!-- RIGHT: Atom orbital -->
    <div class="flex flex-col items-center gap-10">
      <div class="relative flex items-center justify-center" style="width:360px;height:360px;max-width:100%;">

        <!-- SVG orbitals -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 360 360" fill="none">
          {#each orbitals as o, i}
            <circle
              cx="180" cy="180" r={o.size / 2}
              stroke={o.color}
              stroke-width="1.5"
              stroke-dasharray={o.dashes}
              opacity="0.5"
              class="{o.reverse ? 'orbital-ccw' : 'orbital-cw'}"
              style="animation-duration:{o.duration}s"
            />
          {/each}

          <!-- Electron dots orbiting -->
          <g class="orbital-cw" style="animation-duration:6s">
            <circle cx="180" cy="10" r="5" fill="#3b82f6" opacity="0.9"/>
          </g>
          <g class="orbital-ccw" style="animation-duration:9s">
            <circle cx="350" cy="180" r="4" fill="#60a5fa" opacity="0.7"/>
          </g>
          <g class="orbital-cw" style="animation-duration:12s">
            <circle cx="180" cy="350" r="3.5" fill="#93c5fd" opacity="0.6"/>
          </g>
        </svg>

        <!-- Center logo -->
        <div class="relative z-10 w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl shadow-blue-900/30 flex items-center justify-center">
          <img src="/favicon.svg" alt="Auroxi" class="w-12 h-12 rounded-xl" />
        </div>
      </div>

      <!-- Example note card -->
      <Card.Root class="w-full max-w-xs bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden">
        <div class="aspect-video bg-zinc-800 border-b border-zinc-800 flex items-center justify-center relative">
          <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/svgs/solid/book-open.svg"
            alt="" class="w-10 h-10 opacity-10 invert" />
          <Badge variant="outline" class="absolute top-2 left-2 text-zinc-500 border-zinc-700 text-[10px] rounded-full">
            Example
          </Badge>
          <Badge variant="outline" class="absolute top-2 right-2 text-blue-400 border-blue-500/20 text-[10px] rounded-full bg-blue-500/10">
            {exampleNote.subject}
          </Badge>
        </div>
        <Card.Content class="p-3">
          <p class="text-zinc-200 font-semibold text-sm mb-1">{exampleNote.title}</p>
          <p class="text-zinc-600 text-xs">{exampleNote.school} · {exampleNote.grade}</p>
        </Card.Content>
      </Card.Root>
    </div>

  </div>
</section>