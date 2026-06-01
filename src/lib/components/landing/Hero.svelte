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

  // Example note card — clearly labelled as example, not fake data
  const exampleNote = {
    title: 'Example note — yours will appear here',
    subject: 'Your Subject',
    grade: 'Your Grade',
    school: 'Your School',
    description: 'Once you publish a note it shows up in the library tagged to your school and class. Other students can find it instantly.',
  };

  let visible = $state(false);
  onMount(() => { requestAnimationFrame(() => { visible = true; }); });
</script>

<style>
  @keyframes spin-cw  { to { transform: rotate(360deg);  } }
  @keyframes spin-ccw { to { transform: rotate(-360deg); } }
  .ring {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
    transform-origin: center center;
    pointer-events: none;
    user-select: none;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background: none !important;
    display: block;
  }
  .cw  { animation: spin-cw  linear infinite; }
  .ccw { animation: spin-ccw linear infinite; }
</style>

<section class="min-h-screen bg-zinc-900 flex items-center px-6 relative overflow-hidden pt-24 pb-16">

  <div class="absolute inset-0 pointer-events-none"
    style="background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px);
           background-size: 28px 28px; opacity: 0.25;"></div>

  <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
    transition-all duration-1000
    {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}">

    <!-- LEFT: description -->
    <div class="flex flex-col items-start">

      <Badge variant="outline"
        class="border-zinc-700 text-zinc-500 rounded-full px-3 py-1 mb-8 flex items-center gap-2 w-fit">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"></span>
        Open to all students
      </Badge>

      <h1 class="text-5xl lg:text-6xl font-black text-white leading-[1.06] tracking-tight mb-5">
        Your school's<br/>knowledge,<br/>
        <span class="text-blue-400">shared.</span>
      </h1>

      <p class="text-zinc-500 text-base leading-relaxed mb-8 max-w-sm">
        Auroxi is a study platform where students publish notes tagged to their school,
        grade and subject. Find notes from your class, join study groups,
        chat with classmates and earn rewards for contributing.
      </p>

      <div class="flex items-center gap-6 mb-10 border-t border-zinc-800 pt-6 w-full">
        <div>
          <p class="text-zinc-300 font-bold text-sm">Notes library</p>
          <p class="text-zinc-600 text-xs mt-0.5">Tagged by school & class</p>
        </div>
        <div class="w-px h-8 bg-zinc-800"></div>
        <div>
          <p class="text-zinc-300 font-bold text-sm">Study groups</p>
          <p class="text-zinc-600 text-xs mt-0.5">Join by subject</p>
        </div>
        <div class="w-px h-8 bg-zinc-800"></div>
        <div>
          <p class="text-zinc-300 font-bold text-sm">Lunes</p>
          <p class="text-zinc-600 text-xs mt-0.5">Daily rewards</p>
        </div>
      </div>

      <!-- CTAs — underline hover only -->
      <div class="flex items-center gap-8">
        <a href="/register"
          class="text-white font-black text-sm underline-offset-4 hover:underline transition-all">
          Get started
        </a>
        <a href="#how-it-works"
          class="text-zinc-500 font-medium text-sm underline-offset-4 hover:underline transition-all">
          How it works
        </a>
      </div>

    </div>

    <!-- RIGHT: orbital + example note card -->
    <div class="flex flex-col items-center gap-8">

      <!-- Orbital ring -->
      <div class="relative flex items-center justify-center shrink-0"
        style="width: 420px; height: 420px; max-width: 100%;">
        {#each rings as ring}
          <img src={ring.src} alt="" aria-hidden="true"
            class="ring {ring.reverse ? 'ccw' : 'cw'}"
            style="width:{ring.size}px;height:{ring.size}px;animation-duration:{ring.duration}s;" />
        {/each}
        <div class="absolute inset-0 flex items-center justify-center z-10">
          <img src="/favicon.svg" alt="Auroxi"
            class="w-16 h-16 rounded-2xl shadow-2xl shadow-black/70 border-0 outline-none" />
        </div>
      </div>

      <!-- Example note card — half square, book thumbnail -->
      <Card.Root class="w-full max-w-xs bg-zinc-800/50 border-zinc-700/60 rounded-xl overflow-hidden">
        <!-- Top half: thumbnail -->
        <div class="aspect-video bg-zinc-800 border-b border-zinc-700/60 flex items-center justify-center relative">
          <!-- Book SVG from jsdelivr -->
          <img
            src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/svgs/solid/book-open.svg"
            alt="Note thumbnail"
            class="w-12 h-12 opacity-20 invert"
          />
          <!-- Example label -->
          <div class="absolute top-2 left-2">
            <Badge variant="outline" class="text-zinc-500 border-zinc-700 text-[10px] rounded-full px-2 py-0">
              Example
            </Badge>
          </div>
          <!-- Auroxi logo circle bottom right -->
          <div class="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700
            flex items-center justify-center">
            <img src="/favicon.svg" alt="" class="w-4 h-4 rounded-sm border-0 outline-none" />
          </div>
        </div>
        <!-- Bottom half: content -->
        <Card.Content class="p-3">
          <Badge variant="outline" class="text-zinc-500 border-zinc-700 text-[10px] rounded-full px-2 py-0 mb-2">
            {exampleNote.subject}
          </Badge>
          <p class="text-zinc-200 font-semibold text-sm mb-1 leading-snug">{exampleNote.title}</p>
          <p class="text-zinc-600 text-[11px] leading-relaxed mb-2">{exampleNote.description}</p>
          <div class="flex items-center gap-1 text-zinc-700 text-[10px]">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            {exampleNote.school} · {exampleNote.grade}
          </div>
        </Card.Content>
      </Card.Root>

    </div>
  </div>
</section>