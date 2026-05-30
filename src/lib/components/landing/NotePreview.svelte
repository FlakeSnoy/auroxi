<script lang="ts">
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Card } from '$lib/components/ui/card/index.js';

  const {
    title = '',
    school = '',
    country = '',
    grade = '',
    subject = '',
    initials = '',
    color = 'text-zinc-300 bg-zinc-800 border-zinc-700',
    delay = 0,
  }: {
    title: string;
    school: string;
    country: string;
    grade: string;
    subject: string;
    initials: string;
    color?: string;
    delay?: number;
  } = $props();
</script>

<Card
  class="bg-zinc-800/60 border border-zinc-700/70 rounded-xl p-4
    hover:border-zinc-600 hover:bg-zinc-800
    hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer shadow-none"
  style="animation-delay: {delay}ms"
>
  <!-- Top row -->
  <div class="flex items-start justify-between mb-3">
    <Badge
      variant="outline"
      class="text-xs font-semibold border rounded-full px-2.5 py-0.5 {color}"
    >
      {subject}
    </Badge>
    <div class="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-600
      flex items-center justify-center text-[10px] text-zinc-400 font-bold shrink-0">
      {initials}
    </div>
  </div>

  <!-- Title -->
  <p class="text-zinc-200 font-semibold text-sm mb-3 leading-snug
    group-hover:text-white transition-colors">
    {title}
  </p>

  <!-- Location -->
  <div class="flex items-center gap-1.5 text-zinc-600 text-xs">
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
    <span>{school}, {country}</span>
    <span class="text-zinc-700">·</span>
    <span>{grade}</span>
  </div>
</Card>