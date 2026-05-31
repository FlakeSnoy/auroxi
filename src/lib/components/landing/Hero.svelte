<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let visible = $state(false);

  const skeletonNotes = [
    { initials: 'YO', w1: 'w-3/4', w2: 'w-1/2' },
    { initials: 'AU', w1: 'w-2/3', w2: 'w-5/6' },
    { initials: 'XI', w1: 'w-5/6', w2: 'w-2/3' },
    { initials: 'RX', w1: 'w-1/2', w2: 'w-3/4' },
  ];

  onMount(() => {
    requestAnimationFrame(() => {
      visible = true;
    });
  });
</script>

<section class="min-h-screen bg-zinc-900 px-6 relative overflow-hidden flex flex-col items-center justify-center pt-28 pb-16">
  <div
    class="absolute inset-0 pointer-events-none"
    style="background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px);
           background-size: 28px 28px; opacity: 0.3;"
  ></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_10%,rgba(163,230,53,0.04),transparent)] pointer-events-none"></div>

  <div
    class="w-full max-w-3xl flex flex-col items-center text-center transition-all duration-1000
      {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
  >
    <Badge
      variant="outline"
      class="border-zinc-700 text-zinc-500 rounded-full px-3 py-1 mb-8 flex items-center gap-2 w-fit"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-lime-400 inline-block"></span>
      Open to all students
    </Badge>

    <h1 class="text-5xl sm:text-6xl font-black text-white leading-[1.06] tracking-tight mb-5">
      Your school's knowledge,<br />
      <span class="text-lime-400">shared.</span>
    </h1>

    <p class="text-zinc-500 text-base leading-relaxed mb-8 max-w-md">
      Auroxi is where students publish notes, join study groups
      and chat with classmates - organised by school, grade and subject.
    </p>

    <div class="flex items-center gap-3 mb-14">
      <Button
        href="/register"
        class="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black px-6 py-2.5 rounded-xl text-sm active:scale-95 transition-all"
      >
        Get started
      </Button>
      <Button
        variant="ghost"
        href="#how-it-works"
        class="text-zinc-400 hover:text-zinc-200 hover:bg-transparent font-medium text-sm transition-colors duration-200"
      >
        How it works &rarr;
      </Button>
    </div>

    <div class="w-full">
      <p class="text-zinc-600 text-[11px] uppercase tracking-[0.18em] font-semibold mb-4">
        From the library
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {#each skeletonNotes as note}
          <Card.Root
            class="h-52 bg-zinc-800/50 border-zinc-700/60 rounded-xl overflow-hidden
              hover:border-zinc-600 transition-colors duration-200 group cursor-pointer"
          >
            <div class="h-1/2 bg-zinc-800 border-b border-zinc-700/60 flex items-center justify-center relative">
              <div class="absolute inset-4 flex flex-col gap-2 justify-center">
                <div class="h-px bg-zinc-700/60 w-full"></div>
                <div class="h-px bg-zinc-700/50 w-4/5"></div>
                <div class="h-px bg-zinc-700/40 w-full"></div>
                <div class="h-px bg-zinc-700/30 w-3/5"></div>
              </div>
              <div
                class="absolute top-2 right-2 w-6 h-6 rounded-full bg-zinc-700 border border-zinc-600
                  flex items-center justify-center text-[9px] text-zinc-400 font-bold"
              >
                {note.initials}
              </div>
              <div class="absolute bottom-2 left-2">
                <Badge variant="outline" class="text-zinc-600 border-zinc-700 text-[10px] rounded-full px-2 py-0">
                  Subject
                </Badge>
              </div>
            </div>

            <Card.Content class="h-1/2 p-3 flex flex-col justify-center">
              <div class="h-2.5 bg-zinc-700/60 rounded-full {note.w1} mb-1.5"></div>
              <div class="h-2 bg-zinc-700/30 rounded-full {note.w2}"></div>
              <div class="flex items-center gap-1 mt-3 text-zinc-700 text-[10px]">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Your school &middot; Grade
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