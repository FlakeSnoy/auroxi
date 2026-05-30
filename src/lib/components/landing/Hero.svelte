<script lang="ts">
  import { onMount } from 'svelte';
  import NotePreview from '$lib/components/landing/NotePreview.svelte';

  let visible = $state(false);

  const previewNotes = [
    {
      title: "Photosynthesis Explained",
      school: "Goldmine JSS",
      country: "Botswana",
      grade: "Form 2",
      subject: "Biology",
      initials: "TM",
      color: "text-lime-400 bg-lime-400/10 border-lime-400/20",
      delay: 0,
    },
    {
      title: "Quadratic Equations",
      school: "Maru-a-Pula",
      country: "Botswana",
      grade: "Form 3",
      subject: "Mathematics",
      initials: "KD",
      color: "text-sky-400 bg-sky-400/10 border-sky-400/20",
      delay: 100,
    },
    {
      title: "The Cold War Summary",
      school: "Thornhill",
      country: "Zimbabwe",
      grade: "Form 4",
      subject: "History",
      initials: "NZ",
      color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
      delay: 200,
    },
    {
      title: "Newton's Laws of Motion",
      school: "Westwood Sec",
      country: "South Africa",
      grade: "Grade 11",
      subject: "Physics",
      initials: "AB",
      color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
      delay: 300,
    },
    {
      title: "Shakespeare's Macbeth",
      school: "Francistown Sec",
      country: "Botswana",
      grade: "Form 5",
      subject: "English",
      initials: "KM",
      color: "text-rose-400 bg-rose-400/10 border-rose-400/20",
      delay: 400,
    },
    {
      title: "Supply and Demand",
      school: "Gaborone Sec",
      country: "Botswana",
      grade: "Form 4",
      subject: "Economics",
      initials: "LP",
      color: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      delay: 500,
    },
  ];

  onMount(() => {
    requestAnimationFrame(() => { visible = true; });
  });
</script>

<section class="min-h-screen bg-zinc-950 flex flex-col items-center justify-center pt-32 pb-24 px-4 relative overflow-hidden">

  <!-- Ambient glow -->
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 bg-lime-400/6 rounded-full blur-[160px] pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/4 rounded-full blur-[100px] pointer-events-none"></div>
  <div class="absolute top-24 left-10 w-48 h-48 bg-lime-400/3 rounded-full blur-[60px] pointer-events-none"></div>

  <!-- Entrance wrapper -->
  <div class="flex flex-col items-center w-full max-w-5xl transition-all duration-1000
    {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">

    <!-- Live badge -->
    <div class="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
      <span class="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
      <span class="text-zinc-400 text-xs font-medium tracking-wide">Built for students across Africa and beyond</span>
    </div>

    <!-- Headline -->
    <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-white text-center leading-[1.04] max-w-4xl mb-6 tracking-tight">
      Your school's knowledge
      <br/>
      <span class="text-lime-400 relative">
        all in one place.
        <span class="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-lime-400/60 to-transparent"></span>
      </span>
    </h1>

    <!-- Subheading -->
    <p class="text-zinc-400 text-center text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
      Auroxi is the student platform where you publish notes, join study groups,
      chat with classmates and earn rewards —
      <span class="text-zinc-300 font-medium">all tagged to your school and class.</span>
    </p>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row items-center gap-3 mb-20">
      <a href="/register"
        class="bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black px-8 py-3.5 rounded-xl transition-all text-sm w-full sm:w-auto text-center shadow-xl shadow-lime-400/25 hover:shadow-lime-400/40 hover:scale-105 active:scale-95">
        Get started — it's free
      </a>
      <a href="#how-it-works"
        class="border border-zinc-700 hover:border-lime-400/40 text-zinc-300 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-all text-sm w-full sm:w-auto text-center hover:bg-zinc-900/50">
        See how it works ↓
      </a>
    </div>

    <!-- Note previews — masonry-style grid -->
    <div class="w-full">
      <p class="text-zinc-600 text-xs text-center mb-5 uppercase tracking-[0.2em] font-medium">
        Live from the library
      </p>

      <!-- 3 cols on desktop, 2 on tablet, 1 on mobile -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>

  </div>
</section>