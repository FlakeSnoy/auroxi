<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import thumbnail from '$lib/assets/webp/thumbnail.webp';

  let visible = $state(false);
  let hovered = $state(false);
  onMount(() => { requestAnimationFrame(() => { visible = true; }); });

  const features = [
    { title: 'Notes Library',         description: 'Publish typed notes, photos or PDFs tagged to your school and class.',           icon: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#60a5fa" stroke-width="1.5"/><line x1="9" y1="9" x2="15" y2="9" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/><line x1="9" y1="13" x2="15" y2="13" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/>` },
    { title: 'Photo to PDF',           description: 'Snap a photo of handwritten notes — OCR converts it to a clean PDF.',           icon: `<rect x="3" y="3" width="18" height="18" rx="2" stroke="#60a5fa" stroke-width="1.5"/><circle cx="8.5" cy="8.5" r="1.5" stroke="#60a5fa" stroke-width="1.5"/><polyline points="21 15 16 10 5 21" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>` },
    { title: 'Study Groups',           description: 'Create or join groups by subject. Discuss and share notes together.',            icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="7" r="4" stroke="#60a5fa" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/>` },
    { title: 'Messaging',              description: 'DM friends or chat in groups with auto-moderation on every message.',            icon: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>` },
    { title: 'Smart Feed',             description: 'Notes from your school surface first, powered by grade and subject.',            icon: `<line x1="18" y1="20" x2="18" y2="10" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/><line x1="12" y1="20" x2="12" y2="4" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/><line x1="6" y1="20" x2="6" y2="14" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/>` },
    { title: 'Friends',                description: 'Add friends, see who is online and get notified when they publish.',              icon: `<circle cx="10" cy="8" r="4" stroke="#60a5fa" stroke-width="1.5" fill="none"/><path d="M2 19c0-4 3.6-7 8-7" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/><line x1="17" y1="11" x2="17" y2="17" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/><line x1="20" y1="14" x2="14" y2="14" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/>` },
    { title: 'Badges',                 description: 'Earn badges for contributing notes and hitting activity milestones.',            icon: `<circle cx="12" cy="8" r="6" stroke="#60a5fa" stroke-width="1.5"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>` },
    { title: 'Lunes',                  description: 'Earn 0.5 Lunes per active day. Save up for Premium or buy a pack.',             icon: `<circle cx="12" cy="12" r="9" stroke="#60a5fa" stroke-width="1.5" fill="none"/><path d="M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 2.5-3 3-3 5" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="17" r="1" fill="#60a5fa"/>` },
    { title: 'Auto-Moderation',        description: 'Every message scanned for inappropriate content including bypass attempts.',      icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9 12 11 14 15 10" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>` },
  ];
</script>

<section id="features" class="bg-zinc-900 py-24 px-6 border-t border-zinc-800/60">
  <div class="max-w-5xl mx-auto">

    <div class="mb-10 transition-all duration-700
      {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
      <Badge variant="outline"
        class="text-zinc-500 border-zinc-700 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase">
        Features
      </Badge>
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
        Built for how students work
      </h2>
    </div>

    <!-- Two col: left = thumbnail card, right = feature grid on hover -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">

      <!-- LEFT: thumbnail card — hover triggers feature reveal on right -->
      <Card.Root
        class="bg-zinc-800/40 border-zinc-700/50 rounded-xl overflow-hidden
          hover:border-zinc-600 transition-colors duration-200 cursor-pointer sticky top-28"
        onmouseenter={() => hovered = true}
        onmouseleave={() => hovered = false}
      >
        <!-- Thumbnail top — full square aspect -->
        <div class="aspect-square bg-zinc-800 relative overflow-hidden">
          <img
            src={thumbnail}
            alt="Blog 0.1 Preview"
            class="w-full h-full object-cover opacity-60"
          />
          <!-- Overlay gradient -->
          <div class="absolute inset-0 bg-linear-to-t from-zinc-900/80 to-transparent"></div>

          <!-- Top label -->
          <div class="absolute top-3 left-3">
            <Badge variant="outline"
              class="text-zinc-400 border-zinc-600 text-xs rounded-full bg-zinc-900/60 backdrop-blur-sm">
              Blog 0.1 Preview
            </Badge>
          </div>

          <!-- Favicon circle bottom right -->
          <div class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700
            flex items-center justify-center">
            <img src="/favicon.svg" alt="" class="w-5 h-5 rounded-sm border-0 outline-none" />
          </div>

          <!-- Hover hint -->
          <div class="absolute bottom-3 left-3 transition-all duration-200
            {hovered ? 'opacity-0' : 'opacity-100'}">
            <p class="text-zinc-500 text-xs">Hover to explore features</p>
          </div>
        </div>

        <!-- Card bottom content -->
        <Card.Content class="p-4">
          <Card.Title class="text-zinc-100 text-sm font-bold mb-1">Auroxi Platform</Card.Title>
          <p class="text-zinc-500 text-xs leading-relaxed">
            A complete study and social platform for students — notes, groups, chat and rewards, all in one place.
          </p>
        </Card.Content>
      </Card.Root>

      <!-- RIGHT: feature grid — revealed on thumbnail hover -->
      <div class="transition-all duration-300
        {hovered ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-2'}">

        <div class="grid grid-cols-1 gap-2">
          {#each features as feature, i}
            <Card.Root
              class="bg-zinc-800/40 border-zinc-700/40 rounded-xl transition-all duration-200
                {hovered ? 'hover:border-zinc-600 hover:bg-zinc-800/60' : ''}"
              style="transition-delay:{hovered ? i * 30 : 0}ms"
            >
              <Card.Content class="p-3 flex items-center gap-3">
                <!-- Icon -->
                <div class="w-8 h-8 rounded-lg bg-zinc-700/50 border border-zinc-700 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    {@html feature.icon}
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="text-zinc-200 text-xs font-bold">{feature.title}</p>
                  <p class="text-zinc-600 text-[11px] leading-relaxed truncate">{feature.description}</p>
                </div>
              </Card.Content>
            </Card.Root>
          {/each}
        </div>

      </div>

    </div>
  </div>
</section>