<script lang="ts">
  const { children } = $props();
</script>

<div class="flex-1 flex flex-col md:ml-56 min-h-screen bg-zinc-900">
  {@render children()}
</div>