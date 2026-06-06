<script lang="ts">
  const { children } = $props();
</script>

<div class="min-h-screen bg-zinc-950 flex">
  {@render children()}
</div>