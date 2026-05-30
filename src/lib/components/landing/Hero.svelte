<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import NotePreview from '$lib/components/landing/NotePreview.svelte';

  let visible = $state(false);

  const previewNotes = [
    {
      title: "Photosynthesis & The Light Reaction",
      school: "Goldmine JSS",
      country: "Botswana",
      grade: "Form 2",
      subject: "Biology",
      initials: "TM",
      color: "text-zinc-300 bg-zinc-800 border-zinc-700",
      delay: 0,
    },
    {
      title: "Solving Quadratic Equations",
      school: "Maru-a-Pula",
      country: "Botswana",
      grade: "Form 3",
      subject: "Mathematics",
      initials: "KD",
      color: "text-zinc-300 bg-zinc-800 border-zinc-700",
      delay: 80,
    },
    {
      title: "The Cold War — Key Events",
      school: "Thornhill",
      country: "Zimbabwe",
      grade: "Form 4",
      subject: "History",
      initials: "NZ",
      color: "text-zinc-300 bg-zinc-800 border-zinc-700",
      delay: 160,
    },
    {
      title: "Newton's Three Laws of Motion",
      school: "Westwood Sec",
      country: "South Africa",
      grade: "Grade 11",
      subject: "Physics",
      initials: "AB",
      color: "text-zinc-300 bg-zinc-800 border-zinc-700",
      delay: 240,
    },
  ];

  onMount(() => {
    requestAnimationFrame(() => { visible = true; });
  });
</script>

<section class="min-h-screen bg-zinc-900 px-6 relative overflow-hidden">

  <!-- Very subtle top gradient — not loud at all -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_20%,rgba(163,230,53,0.04),transparent)] pointer-events-none"></div>

  <!-- Dot grid -->
  <div class="absolute inset-0 pointer-events-none"
    style="background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px); background-size: 28px 28px; opacity: 0.35;">
  </div>

  <div class="max-w-6xl mx-auto min-h-screen flex flex-col justify-center pt-28 pb-16">

    <!-- Two column layout: left text, right notes -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
      transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}">

      <!-- LEFT: brief explanation -->
      <div class="flex flex-col items-start">

        <!-- Small status pill -->
        <div class="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-full px-3 py-1 mb-8">
          <span class="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
          <span class="text-zinc-500 text-xs font-medium">Open to all students</span>
        </div>

        <!-- Headline — lime on ONE word -->
        <h1 class="text-5xl lg:text-6xl font-black text-white leading-[1.06] tracking-tight mb-5">
          Your school's<br/>
          knowledge,<br/>
          <span class="text-lime-400">shared.</span>
        </h1>

        <!-- Brief explanation — kept short and human -->
        <p class="text-zinc-500 text-base leading-relaxed mb-8 max-w-sm">
          Auroxi is where students publish notes, join study groups
          and chat with classmates — organised by school, grade and subject.
        </p>

        <!-- Stats row — feels real and grounded -->
        <div class="flex items-center gap-6 mb-10">
          <div>
            <p class="text-white font-black text-xl">100%</p>
            <p class="text-zinc-600 text-xs mt-0.5">Student built</p>
          </div>
          <div class="w-px h-8 bg-zinc-800"></div>
          <div>
            <p class="text-white font-black text-xl">Free</p>
            <p class="text-zinc-600 text-xs mt-0.5">To get started</p>
          </div>
          <div class="w-px h-8 bg-zinc-800"></div>
          <div>
            <p class="text-white font-black text-xl">Africa</p>
            <p class="text-zinc-600 text-xs mt-0.5">First platform</p>
          </div>
        </div>

        <!-- CTAs -->
        <div class="flex items-center gap-3">
          <Button
            href="/register"
            class="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black px-6 py-2.5 rounded-xl text-sm transition-all active:scale-95"
          >
            Get started
          </Button>
          <Button
            variant="ghost"
            href="#how-it-works"
            class="text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 font-medium text-sm rounded-xl"
          >
            How it works →
          </Button>
        </div>

      </div>

      <!-- RIGHT: note previews — 2x2 grid bottom right feel -->
      <div class="flex flex-col gap-3">

        <p class="text-zinc-600 text-[11px] uppercase tracking-[0.18em] font-semibold mb-1">
          From the library
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {#each previewNotes as note}
            <NotePreview
              title={note.title}
              school={note.school}
              country={note.country}
              grade={note.grade}
              subject={note.subject}
              initials={note.initials}
              color={note.color}
              delay={note.delay}
            />
          {/each}
        </div>

        <!-- Bottom label -->
        <p class="text-zinc-700 text-xs mt-1">
          Notes tagged by school, grade and subject — found instantly.
        </p>

      </div>

    </div>

  </div>

</section>