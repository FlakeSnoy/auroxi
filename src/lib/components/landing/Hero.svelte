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
    { src: redSemi,    size: 420, duration: 8,  reverse: false },
    { src: red,        size: 388, duration: 10, reverse: true  },
    { src: orangeSemi, size: 358, duration: 12, reverse: false },
    { src: orange,     size: 330, duration: 14, reverse: true  },
    { src: yellowSemi, size: 304, duration: 16, reverse: false },
    { src: yellow,     size: 280, duration: 18, reverse: true  },
    { src: greenSemi,  size: 258, duration: 20, reverse: false },
    { src: green,      size: 238, duration: 22, reverse: true  },
    { src: blueSemi,   size: 220, duration: 24, reverse: false },
    { src: blue,       size: 204, duration: 26, reverse: true  },
  ];

  const skeletonNotes = [
    { initials: 'YO', w1: 'w-3/4', w2: 'w-1/2' },
    { initials: 'AU', w1: 'w-2/3', w2: 'w-5/6' },
    { initials: 'XI', w1: 'w-5/6', w2: 'w-2/3' },
    { initials: 'RX', w1: 'w-1/2', w2: 'w-3/4' },
  ];

  let visible = $state(false);
  onMount(() => { requestAnimationFrame(() => { visible = true; }); });
</script>

<style>
  @keyframes spin-cw  { to { transform: rotate(360deg);  } }
  @keyframes spin-ccw { to { transform: rotate(-360deg); } }

  .ring {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    transform-origin: center center;
    pointer-events: none;
    user-select: none;
    /* Remove any browser default img outline/border */
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background: none !important;
    display: block;
  }
  .cw  { animation: spin-cw  linear infinite; }
  .ccw { animation: spin-ccw linear infinite; }
</style>

<section class="min-h-screen bg-zinc-900 flex flex-col items-center justify-center px-6 relative overflow-hidden pt-24 pb-16">

  <!-- Dot grid -->
  <div class="absolute inset-0 pointer-events-none"
    style="background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px);
           background-size: 28px 28px; opacity: 0.25;">
  </div>

  <!-- ── Orbital ring ───────────────────────────────────── -->
  <div
    class="relative flex items-center justify-center mb-12 shrink-0"
    style="width: 420px; height: 420px;"
  >
    {#each rings as ring}
      <img
        src={ring.src}
        alt=""
        aria-hidden="true"
        class="ring {ring.reverse ? 'ccw' : 'cw'}"
        style="width:{ring.size}px; height:{ring.size}px; animation-duration:{ring.duration}s;"
      />
    {/each}

    <!-- Favicon centre -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <img
        src="/favicon.svg"
        alt="Auroxi"
        class="w-16 h-16 rounded-2xl shadow-2xl shadow-black/70 border-0 outline-none"
      />
    </div>
  </div>

  <!-- ── Text ───────────────────────────────────────────── -->
  <div class="flex flex-col items-center text-center max-w-lg w-full transition-all duration-1000
    {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}">

    <Badge variant="outline"
      class="border-zinc-700 text-zinc-500 rounded-full px-3 py-1 mb-6 flex items-center gap-2 w-fit">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
      Open to all students
    </Badge>

    <h1 class="text-5xl sm:text-6xl font-black text-white leading-[1.06] tracking-tight mb-4">
      Your school's knowledge,<br/>
      <span class="text-blue-400">shared.</span>
    </h1>

    <p class="text-zinc-500 text-base leading-relaxed mb-8 max-w-md">
      Auroxi is where students publish notes, join study groups
      and chat with classmates — organised by school, grade and subject.
    </p>

    <!-- CTAs — underline on hover only -->
    <div class="flex items-center gap-8 mb-14">
      <a href="/register"
        class="text-white font-black text-sm underline-offset-4 hover:underline transition-all">
        Get started
      </a>
      <a href="#how-it-works"
        class="text-zinc-500 font-medium text-sm underline-offset-4 hover:underline transition-all">
        How it works
      </a>
    </div>

    <!-- Note skeleton grid -->
    <div class="w-full">
      <p class="text-zinc-600 text-[11px] uppercase tracking-[0.18em] font-semibold mb-4">
        From the library
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {#each skeletonNotes as note}
          <Card.Root class="bg-zinc-800/50 border-zinc-700/60 rounded-xl overflow-hidden
            hover:border-zinc-600 transition-colors duration-200 cursor-pointer">
            <div class="aspect-square bg-zinc-800/60 border-b border-zinc-700/50
              flex items-center justify-center relative p-4">
              <div class="absolute inset-4 flex flex-col gap-2 justify-center">
                <div class="h-px bg-zinc-700/60 w-full"></div>
                <div class="h-px bg-zinc-700/50 w-4/5"></div>
                <div class="h-px bg-zinc-700/40 w-full"></div>
                <div class="h-px bg-zinc-700/30 w-3/5"></div>
                <div class="h-px bg-zinc-700/20 w-4/5"></div>
              </div>
              <div class="absolute top-2 right-2 w-6 h-6 rounded-full bg-zinc-700 border border-zinc-600
                flex items-center justify-center text-[9px] text-zinc-400 font-bold">
                {note.initials}
              </div>
              <div class="absolute bottom-2 left-2">
                <Badge variant="outline"
                  class="text-zinc-600 border-zinc-700 text-[10px] rounded-full px-2 py-0">
                  Subject
                </Badge>
              </div>
            </div>
            <Card.Content class="p-3">
              <div class="h-2.5 bg-zinc-700/60 rounded-full {note.w1} mb-1.5"></div>
              <div class="h-2 bg-zinc-700/30 rounded-full {note.w2}"></div>
              <div class="flex items-center gap-1 mt-2.5 text-zinc-700 text-[10px]">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Your school · Grade
              </div>
            </Card.Content>
          </Card.Root>
        {/each}
      </div>
      <p class="text-zinc-700 text-xs mt-3">
        Notes appear once students from your school publish them.
      </p>
    </div>

  </div>
</section>