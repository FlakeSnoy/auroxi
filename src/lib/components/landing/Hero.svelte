<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  import redSemi    from '$lib/assets/(background)/index-portal-red-semi.svg';
  import red        from '$lib/assets/(background)/index-portal-red.svg';
  import orangeSemi from '$lib/assets/(background)/index-portal-orange-semi.svg';
  import orange     from '$lib/assets/(background)/index-portal-orange.svg';
  import yellowSemi from '$lib/assets/(background)/index-portal-yellow-semi.svg';
  import yellow     from '$lib/assets/(background)/index-portal-yellow.svg';
  import greenSemi  from '$lib/assets/(background)/index-portal-green-semi.svg';
  import green      from '$lib/assets/(background)/index-portal-green.svg';
  import blueSemi   from '$lib/assets/(background)/index-portal-blue-semi.svg';
  import blue       from '$lib/assets/(background)/index-portal-blue.svg';

  const rings = [
    { src: redSemi,    size: 500, duration: 8,  reverse: false },
    { src: red,        size: 464, duration: 10, reverse: true  },
    { src: orangeSemi, size: 430, duration: 12, reverse: false },
    { src: orange,     size: 398, duration: 14, reverse: true  },
    { src: yellowSemi, size: 368, duration: 16, reverse: false },
    { src: yellow,     size: 340, duration: 18, reverse: true  },
    { src: greenSemi,  size: 314, duration: 20, reverse: false },
    { src: green,      size: 290, duration: 22, reverse: true  },
    { src: blueSemi,   size: 268, duration: 24, reverse: false },
    { src: blue,       size: 248, duration: 26, reverse: true  },
  ];

  const exampleNote = {
    title: 'Photosynthesis — Complete Notes',
    subject: 'Biology',
    grade: 'Form 3',
    school: 'Maru-a-Pula',
  };

  let visible = $state(false);
  onMount(() => requestAnimationFrame(() => { visible = true; }));
</script>

<style>
  @keyframes spin-cw  { to { transform: rotate(360deg);  } }
  @keyframes spin-ccw { to { transform: rotate(-360deg); } }
  .ring { position: absolute; top: 50%; left: 50%; translate: -50% -50%; transform-origin: center; pointer-events: none; display: block; }
  .cw  { animation: spin-cw  linear infinite; }
  .ccw { animation: spin-ccw linear infinite; }
</style>

<section class="min-h-screen bg-zinc-950 flex items-center px-6 relative overflow-hidden pt-24 pb-16">

  <div class="absolute inset-0 pointer-events-none"
    style="background-image:radial-gradient(circle,#3f3f4618 1px,transparent 1px);background-size:32px 32px;"></div>

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

      <div class="flex items-center gap-4">
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

    <!-- RIGHT -->
    <div class="flex flex-col items-center gap-10">

      <!-- Orbital rings -->
      <div class="relative flex items-center justify-center shrink-0"
        style="width:500px;height:500px;max-width:100%;">
        {#each rings as ring}
          <img src={ring.src} alt="" aria-hidden="true"
            class="ring {ring.reverse ? 'ccw' : 'cw'}"
            style="width:{ring.size}px;height:{ring.size}px;animation-duration:{ring.duration}s;" />
        {/each}
        <!-- Center -->
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div class="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black/50 flex items-center justify-center">
            <img src="/favicon.svg" alt="Auroxi" class="w-12 h-12 rounded-xl" />
          </div>
        </div>
      </div>

      <!-- Example note card -->
      <Card.Root class="w-full max-w-xs bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden">
        <div class="aspect-video bg-zinc-800 border-b border-zinc-800 flex items-center justify-center relative">
          <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/svgs/solid/book-open.svg"
            alt="" class="w-10 h-10 opacity-10 invert" />
          <Badge variant="outline" class="absolute top-2 left-2 text-zinc-500 border-zinc-700 text-[10px] rounded-full">Example</Badge>
          <Badge variant="outline" class="absolute top-2 right-2 text-blue-400 border-blue-500/20 text-[10px] rounded-full bg-blue-500/10">{exampleNote.subject}</Badge>
        </div>
        <Card.Content class="p-4">
          <p class="text-zinc-200 font-bold text-sm mb-1">{exampleNote.title}</p>
          <p class="text-zinc-500 text-xs">{exampleNote.school} · {exampleNote.grade}</p>
        </Card.Content>
      </Card.Root>

    </div>
  </div>
</section>