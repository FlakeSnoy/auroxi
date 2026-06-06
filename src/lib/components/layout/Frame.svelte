<script lang="ts">
  const { children } = $props();
</script>

<div class="flex-1 flex flex-col md:ml-56">
  <div class="flex-1 flex flex-col border-l border-t border-zinc-800 rounded-tl-2xl overflow-hidden">
    {@render children()}
  </div>
</div>