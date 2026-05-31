<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let visible = $state(false);

  onMount(() => {
    requestAnimationFrame(() => { visible = true; });
  });
</script>

<section class="min-h-screen bg-zinc-900 px-6 relative overflow-hidden">

  <!-- Subtle radial glow -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_20%,rgba(163,230,53,0.04),transparent)] pointer-events-none"></div>

  <!-- Dot grid -->
  <div class="absolute inset-0 pointer-events-none"
    style="background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px);
           background-size: 28px 28px; opacity: 0.35;">
  </div>

  <div class="max-w-6xl mx-auto min-h-screen flex flex-col justify-center pt-28 pb-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
      transition-all duration-1000
      {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}">

      <!-- LEFT -->
      <div class="flex flex-col items-start">

        <!-- Status badge -->
        <Badge variant="outline"
          class="border-zinc-700 text-zinc-500 rounded-full px-3 py-1 mb-8 flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-lime-400 inline-block"></span>
          Open to all students
        </Badge>

        <h1 class="text-5xl lg:text-6xl font-black text-white leading-[1.06] tracking-tight mb-5">
          Your school's<br/>
          knowledge,<br/>
          <span class="text-lime-400">shared.</span>
        </h1>

        <p class="text-zinc-500 text-base leading-relaxed mb-8 max-w-sm">
          Auroxi is where students publish notes, join study groups
          and chat with classmates — organised by school, grade and subject.
        </p>

        <!-- Stats -->
        <div class="flex items-center gap-6 mb-10">
          <div>
            <p class="text-white font-black text-xl">100%</p>
            <p class="text-zinc-600 text-xs mt-0.5">Student built</p>
          </div>
          <Separator orientation="vertical" class="h-8 bg-zinc-800" />
          <div>
            <p class="text-white font-black text-xl">Free</p>
            <p class="text-zinc-600 text-xs mt-0.5">To get started</p>
          </div>
          <Separator orientation="vertical" class="h-8 bg-zinc-800" />
          <div>
            <p class="text-white font-black text-xl">Africa</p>
            <p class="text-zinc-600 text-xs mt-0.5">First platform</p>
          </div>
        </div>

        <!-- CTAs -->
        <div class="flex items-center gap-3">
          <Button
            href="/register"
            class="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black px-6 py-2.5 rounded-xl text-sm active:scale-95 transition-all">
            Get started
          </Button>
          <Button variant="ghost" href="#how-it-works"
            class="text-zinc-400 hover:text-zinc-200 hover:bg-transparent font-medium text-sm transition-colors duration-200">
            How it works →
          </Button>
        </div>

      </div>

      <!-- RIGHT: shadcn Card skeletons — no fake data -->
      <div class="flex flex-col gap-3">
        <p class="text-zinc-600 text-[11px] uppercase tracking-[0.18em] font-semibold mb-1">
          From the library
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <!-- Skeleton card 1 -->
          <Card.Root class="bg-zinc-800/50 border-zinc-700/60 rounded-xl p-4 hover:border-zinc-600 transition-colors duration-200">
            <Card.Content class="p-0">
              <div class="flex items-start justify-between mb-3">
                <Badge variant="outline" class="text-zinc-500 border-zinc-700 text-xs rounded-full">Subject</Badge>
                <div class="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 font-bold">YO</div>
              </div>
              <div class="h-3 bg-zinc-700/60 rounded-full w-3/4 mb-2"></div>
              <div class="h-2.5 bg-zinc-700/40 rounded-full w-1/2 mb-4"></div>
              <div class="flex items-center gap-1.5 text-zinc-700 text-xs">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Your school · Your grade
              </div>
            </Card.Content>
          </Card.Root>

          <!-- Skeleton card 2 -->
          <Card.Root class="bg-zinc-800/40 border-zinc-700/50 rounded-xl p-4 hover:border-zinc-600 transition-colors duration-200">
            <Card.Content class="p-0">
              <div class="flex items-start justify-between mb-3">
                <Badge variant="outline" class="text-zinc-500 border-zinc-700 text-xs rounded-full">Subject</Badge>
                <div class="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 font-bold">AU</div>
              </div>
              <div class="h-3 bg-zinc-700/50 rounded-full w-2/3 mb-2"></div>
              <div class="h-2.5 bg-zinc-700/30 rounded-full w-5/6 mb-4"></div>
              <div class="flex items-center gap-1.5 text-zinc-700 text-xs">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Your school · Your grade
              </div>
            </Card.Content>
          </Card.Root>

          <!-- Skeleton card 3 -->
          <Card.Root class="bg-zinc-800/35 border-zinc-700/45 rounded-xl p-4 hover:border-zinc-600 transition-colors duration-200">
            <Card.Content class="p-0">
              <div class="flex items-start justify-between mb-3">
                <Badge variant="outline" class="text-zinc-500 border-zinc-700 text-xs rounded-full">Subject</Badge>
                <div class="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 font-bold">XI</div>
              </div>
              <div class="h-3 bg-zinc-700/45 rounded-full w-5/6 mb-2"></div>
              <div class="h-2.5 bg-zinc-700/25 rounded-full w-2/3 mb-4"></div>
              <div class="flex items-center gap-1.5 text-zinc-700 text-xs">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Your school · Your grade
              </div>
            </Card.Content>
          </Card.Root>

          <!-- Skeleton card 4 -->
          <Card.Root class="bg-zinc-800/30 border-zinc-700/40 rounded-xl p-4 hover:border-zinc-600 transition-colors duration-200">
            <Card.Content class="p-0">
              <div class="flex items-start justify-between mb-3">
                <Badge variant="outline" class="text-zinc-500 border-zinc-700 text-xs rounded-full">Subject</Badge>
                <div class="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-500 font-bold">RX</div>
              </div>
              <div class="h-3 bg-zinc-700/40 rounded-full w-1/2 mb-2"></div>
              <div class="h-2.5 bg-zinc-700/20 rounded-full w-3/4 mb-4"></div>
              <div class="flex items-center gap-1.5 text-zinc-700 text-xs">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Your school · Your grade
              </div>
            </Card.Content>
          </Card.Root>

        </div>

        <p class="text-zinc-700 text-xs mt-1">
          Notes appear once students from your school publish them.
        </p>
      </div>

    </div>
  </div>
</section>