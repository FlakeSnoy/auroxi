<script lang="ts">
  const { src, name, size = 8 }: { src?: string; name?: string; size?: number } = $props();
</script>

<div class="w-{size} h-{size} rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden shrink-0">
  {#if src}
    <img {src} alt={name} class="w-full h-full object-cover" />
  {:else}
    <div class="w-full h-full flex items-center justify-center text-zinc-400 text-xs font-bold">
      {name?.[0]?.toUpperCase() ?? '?'}
    </div>
  {/if}
</div>