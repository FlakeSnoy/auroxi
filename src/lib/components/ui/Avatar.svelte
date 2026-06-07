<script lang="ts">
  const { src, name, size = 8 }: { src?: string; name?: string; size?: number } = $props();
  const px = $derived(size * 4);
  const fontSize = $derived(Math.max(px / 3, 10));
</script>

<div style="width:{px}px;height:{px}px"
  class="rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden shrink-0 flex items-center justify-center">
  {#if src}
    <img {src} alt={name} class="w-full h-full object-cover" />
  {:else}
    <span class="text-zinc-400 font-bold" style="font-size:{fontSize}px">
      {name?.[0]?.toUpperCase() ?? '?'}
    </span>
  {/if}
</div>