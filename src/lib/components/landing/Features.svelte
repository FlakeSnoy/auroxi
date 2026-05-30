<script lang="ts">
  import { onMount } from 'svelte';

  let visible = $state(false);

  const features = [
    {
      title: "Notes Library",
      description: "Publish typed notes, photo uploads or PDFs. Every note is tagged to a school, country and class for instant discovery.",
      size: "lg", // large card — spans 2 cols
      svg: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="9" y1="9" x2="15" y2="9" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
            <line x1="9" y1="13" x2="15" y2="13" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>`,
    },
    {
      title: "Photo to PDF via OCR",
      description: "Snap a photo of handwritten notes. Our OCR engine reads and converts it into a clean, shareable PDF automatically.",
      size: "sm",
      svg: `<rect x="3" y="3" width="18" height="18" rx="2" stroke="#a3e635" stroke-width="2"/>
            <circle cx="8.5" cy="8.5" r="1.5" stroke="#a3e635" stroke-width="2"/>
            <polyline points="21 15 16 10 5 21" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: "Study Groups",
      description: "Create or join groups by subject and school. Collaborate, share notes and discuss with your classmates.",
      size: "sm",
      svg: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="#a3e635" stroke-width="2"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: "Messaging",
      description: "DM friends or chat in groups. All messages are automatically moderated to keep every conversation safe.",
      size: "sm",
      svg: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: "Smart Feed Algorithm",
      description: "Your home feed surfaces notes from your school first, then popular content from everywhere else — always relevant.",
      size: "sm",
      svg: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: "Lunes Currency",
      description: "Earn 0.5 Lunes per day just by being active. Save up to unlock Premium or buy a Lunes pack — your effort pays off.",
      size: "lg",
      svg: `<circle cx="12" cy="12" r="9" stroke="#a3e635" stroke-width="2"/>
            <path d="M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 2.5-3 3-3 5" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="16.5" r="0.75" fill="#a3e635"/>`,
    },
    {
      title: "Friends System",
      description: "Add friends, see who's online and get notified when they publish or chat.",
      size: "sm",
      svg: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="#a3e635" stroke-width="2"/>
            <line x1="19" y1="8" x2="19" y2="14" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
            <line x1="22" y1="11" x2="16" y2="11" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>`,
    },
    {
      title: "Badges",
      description: "Earn badges for contributing notes, hitting milestones and being active. Show them off on your profile.",
      size: "sm",
      svg: `<circle cx="12" cy="8" r="6" stroke="#a3e635" stroke-width="2"/>
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: "Auto-Moderation",
      description: "Every message is scanned for inappropriate content including bypass attempts — keeping the platform safe.",
      size: "sm",
      svg: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="9 12 11 14 15 10" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
  ];

  onMount(() => {
    requestAnimationFrame(() => { visible = true; });
  });
</script>

<section
  id="features"
  class="bg-zinc-950 py-28 px-4 border-t border-zinc-900/80"
>
  <div class="max-w-5xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-16 transition-all duration-700
      {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}">
      <span class="text-lime-400 text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
        Everything you need
      </span>
      <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
        Built for how students actually work
      </h2>
      <p class="text-zinc-500 text-lg max-w-xl mx-auto">
        Not just a notes app — a full student productivity and social platform.
      </p>
    </div>

    <!--
      Bento grid layout:
      Row 1: [Notes Library — 2 cols] [OCR — 1 col]
      Row 2: [Groups] [Messaging] [Smart Feed]
      Row 3: [Friends] [Badges] [Lunes — 2 cols]
      Row 4: [Moderation — full width]
    -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

      {#each features as feature, i}
        <div
          class="bg-zinc-900 border border-zinc-800 hover:border-lime-400/30 rounded-2xl p-6 transition-all duration-300 group
            {feature.size === 'lg' ? 'sm:col-span-2' : 'sm:col-span-1'}
            {i === features.length - 1 ? 'sm:col-span-3' : ''}"
          style="animation-delay: {i * 60}ms"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center mb-4
            group-hover:bg-lime-400/15 group-hover:border-lime-400/30 group-hover:scale-110 transition-all duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {@html feature.svg}
            </svg>
          </div>

          <h3 class="text-white font-bold text-base mb-2 group-hover:text-lime-400 transition-colors">
            {feature.title}
          </h3>
          <p class="text-zinc-500 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      {/each}

    </div>
  </div>
</section>