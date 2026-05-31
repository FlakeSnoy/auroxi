<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let visible = $state(false);

  onMount(() => {
    requestAnimationFrame(() => {
      visible = true;
    });
  });

  const features = [
    {
      title: 'Notes Library',
      description: 'Publish typed notes, photos or PDFs tagged to your school and class.',
      detail: 'Searchable by subject and grade.',
      svg: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="9" y1="9" x2="15" y2="9" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="9" y1="13" x2="15" y2="13" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      title: 'Photo to PDF',
      description: 'Snap a photo of handwritten notes - OCR converts it to a clean PDF.',
      detail: 'No scanning app needed.',
      svg: `<rect x="3" y="3" width="18" height="18" rx="2" stroke="#a3e635" stroke-width="1.5"/>
            <circle cx="8.5" cy="8.5" r="1.5" stroke="#a3e635" stroke-width="1.5"/>
            <polyline points="21 15 16 10 5 21" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: 'Study Groups',
      description: 'Create or join groups by subject. Discuss, share notes and collaborate.',
      detail: 'Public and private groups.',
      svg: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="#a3e635" stroke-width="1.5"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: 'Messaging',
      description: 'DM friends or chat in groups with auto-moderation on every message.',
      detail: 'Safe by default.',
      svg: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: 'Smart Feed',
      description: 'Notes from your school surface first, powered by your grade and subject.',
      detail: 'Gets better over time.',
      svg: `<line x1="18" y1="20" x2="18" y2="10" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="12" y1="20" x2="12" y2="4" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="6" y1="20" x2="6" y2="14" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      title: 'Friends',
      description: 'Add friends, see who is online and get notified when they publish notes.',
      detail: 'Online status included.',
      svg: `<circle cx="10" cy="8" r="4" stroke="#a3e635" stroke-width="1.5" fill="none"/>
            <path d="M2 19c0-4 3.6-7 8-7" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <line x1="17" y1="11" x2="17" y2="17" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="20" y1="14" x2="14" y2="14" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      title: 'Badges',
      description: 'Earn badges for contributing notes and hitting activity milestones.',
      detail: 'Shown on your profile.',
      svg: `<circle cx="12" cy="8" r="6" stroke="#a3e635" stroke-width="1.5"/>
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      title: 'Lunes',
      description: 'Earn 0.5 Lunes per active day. Save up for Premium or buy a pack.',
      detail: '40 Lunes = 1 month Premium.',
      svg: `<circle cx="12" cy="12" r="9" stroke="#a3e635" stroke-width="1.5" fill="none"/>
            <path d="M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 2.5-3 3-3 5" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            <circle cx="12" cy="17" r="1" fill="#a3e635"/>`,
    },
    {
      title: 'Auto-Moderation',
      description: 'Every message scanned for inappropriate content including bypass attempts.',
      detail: 'No manual review needed.',
      svg: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="9 12 11 14 15 10" stroke="#a3e635" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
  ];
</script>

<section id="features" class="bg-zinc-900 py-20 px-6 border-t border-zinc-800/60">
  <div class="max-w-4xl mx-auto">
    <div
      class="mb-8 transition-all duration-700
        {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
    >
      <Badge
        variant="outline"
        class="text-zinc-500 border-zinc-700 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase"
      >
        Features
      </Badge>
      <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
        Built for how students work
      </h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {#each features as feature, i}
        <Card.Root
          class="h-48 bg-zinc-800/40 border-zinc-700/50 rounded-xl overflow-hidden
            hover:border-zinc-600 transition-colors duration-200 group"
          style="animation-delay: {i * 50}ms"
        >
          <div class="h-1/2 bg-zinc-800/60 border-b border-zinc-700/50 flex items-center justify-center p-3">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              {@html feature.svg}
            </svg>
          </div>

          <Card.Content class="h-1/2 p-3 flex flex-col">
            <Card.Title class="text-zinc-100 text-xs font-bold mb-1 group-hover:text-white transition-colors duration-200">
              {feature.title}
            </Card.Title>
            <p class="text-zinc-500 text-[11px] leading-snug mb-2 line-clamp-2">
              {feature.description}
            </p>
            <Separator class="bg-zinc-700/50 mt-auto mb-2" />
            <p class="text-zinc-600 text-[10px] leading-none">{feature.detail}</p>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>
  </div>
</section>