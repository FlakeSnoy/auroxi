<script lang="ts">
  const { children } = $props();
</script>

<div class="flex-1 flex flex-col md:ml-56 border-l border-t border-zinc-800 rounded-tl-2xl overflow-hidden h-screen">
  {@render children()}
</div>