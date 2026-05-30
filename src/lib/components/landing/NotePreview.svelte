<script lang="ts">
  const {
    title = '',
    school = '',
    country = '',
    grade = '',
    subject = '',
    initials = '',
    color = 'text-lime-400 bg-lime-400/10 border-lime-400/20',
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

<div
  class="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5
    hover:border-lime-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-400/5
    transition-all duration-300 group cursor-pointer backdrop-blur-sm"
  style="animation-delay: {delay}ms"
>
  <!-- Top row: subject tag + avatar -->
  <div class="flex items-start justify-between mb-4">
    <span class="text-xs border rounded-full px-3 py-0.5 font-semibold {color}">
      {subject}
    </span>
    <div class="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center
      text-xs text-zinc-400 font-bold shrink-0
      group-hover:ring-2 group-hover:ring-lime-400/20 transition-all">
      {initials}
    </div>
  </div>

  <!-- Note title -->
  <h3 class="text-white font-bold text-sm mb-4 group-hover:text-lime-400 transition-colors leading-snug">
    {title}
  </h3>

  <!-- Footer: location + grade -->
  <div class="flex items-center gap-1.5 text-zinc-600 text-xs">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
    <span>{school}, {country}</span>
    <span class="text-zinc-700">·</span>
    <span>{grade}</span>
  </div>
</div>