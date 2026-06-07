<script lang="ts">
  const { icon, color, name, description }: { icon: string; color: string; name: string; description?: string | null } = $props();
  let show = $state(false);
</script>

<div role="tooltip" aria-label={name}
  class="relative"
  onmouseenter={() => show = true}
  onmouseleave={() => show = false}>
  <div style="background:{color}20;border-color:{color}40"
    class="w-10 h-10 rounded-xl border flex items-center justify-center text-lg cursor-pointer shrink-0">
    {icon}
  </div>
  {#if show}
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 w-36 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 z-50 shadow-xl">
      <p class="text-white text-xs font-bold">{name}</p>
      {#if description}<p class="text-zinc-400 text-xs mt-0.5">{description}</p>{/if}
    </div>
  {/if}
</div>