<script lang="ts">
  import { onMount } from 'svelte';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let visible = $state(false);
  onMount(() => requestAnimationFrame(() => { visible = true; }));

  const features = [
    { title: 'Notes Library',    description: 'Publish typed notes, photos or PDFs tagged to your school and class.', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' },
    { title: 'Photo to PDF',     description: 'Snap handwritten notes — OCR converts them to clean searchable PDFs.', icon: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' },
    { title: 'Study Groups',     description: 'Create or join groups by subject. Share and discuss notes together.', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
    { title: 'Messaging',        description: 'DM friends or chat in groups. Auto-moderation on every message.', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
    { title: 'Smart Feed',       description: 'Notes from your school surface first, powered by grade and subject.', icon: 'M18 20V10M12 20V4M6 20v-6' },
    { title: 'Friends',          description: 'Add friends, see who is online and get notified when they publish.', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6' },
    { title: 'Badges',           description: 'Earn badges for contributing notes and hitting activity milestones.', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    { title: 'Lunes',            description: 'Earn 0.5 Lunes per active day. Save up for Premium or buy a pack.', icon: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM9.5 9c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 2.5-2.5 3-2.5 5M12 17.5h.01' },
    { title: 'Auto-Moderation',  description: 'Every message scanned for inappropriate content including bypass attempts.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4' },
  ];
</script>

<section id="features" class="bg-zinc-950 py-24 px-6 border-t border-zinc-800/40">
  <div class="max-w-5xl mx-auto flex flex-col gap-10">

    <div class="flex flex-col gap-2 transition-all duration-700 {visible ? 'opacity-100' : 'opacity-0'}">
      <Badge variant="outline" class="text-zinc-500 border-zinc-800 rounded-full text-xs w-fit uppercase tracking-widest">
        Features
      </Badge>
      <h2 class="text-3xl font-black text-white">Built for how students work</h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {#each features as f}
        <Card.Root class="bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all group">
          <!-- Top: icon visual -->
          <div class="aspect-video bg-zinc-800/60 border-b border-zinc-800 flex items-center justify-center">
            <svg class="w-10 h-10 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d={f.icon} />
            </svg>
          </div>
          <!-- Bottom: text -->
          <Card.Content class="p-3">
            <p class="text-zinc-200 text-xs font-bold mb-1">{f.title}</p>
            <p class="text-zinc-500 text-[11px] leading-relaxed">{f.description}</p>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>

  </div>
</section>