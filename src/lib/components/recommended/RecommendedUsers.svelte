<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="flex flex-col gap-3">
  <div class="flex items-center justify-between">
    <div>
      <h2 class="text-white font-bold text-base">Recommended For You</h2>
      <p class="text-zinc-500 text-xs mt-0.5">People you might know</p>
    </div>
    <a href="/search" class="text-blue-500 hover:text-blue-400 text-sm transition-colors">See more →</a>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
    {#each Array(4) as _}
      <Card.Root class="bg-zinc-800/30 border-zinc-700/30 rounded-2xl">
        <Card.Content class="p-4 flex flex-col items-center gap-2">
          <div class="w-14 h-14 rounded-full bg-zinc-700/50 animate-pulse"></div>
          <div class="w-20 h-3 rounded bg-zinc-700/50 animate-pulse"></div>
          <div class="w-14 h-2.5 rounded bg-zinc-700/30 animate-pulse"></div>
        </Card.Content>
      </Card.Root>
    {/each}
  </div>
</div>