<script lang="ts">
  const { name, icon, color, description }: {
    name: string;
    icon: string;
    color: string;
    description?: string | null;
  } = $props();
</script>

<div role="tooltip" aria-label={name} class="relative group">
  <div
    style="background:{color}20;border-color:{color}40"
    class="w-10 h-10 rounded-xl border flex items-center justify-center text-lg cursor-pointer shrink-0 transition-transform group-hover:scale-110">
    {icon}
  </div>
  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 w-36 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 z-50 shadow-xl
    opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150">
    <p class="text-white text-xs font-bold">{name}</p>
    {#if description}
      <p class="text-zinc-400 text-xs mt-0.5">{description}</p>
    {/if}
  </div>
</div>