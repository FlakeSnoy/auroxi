<script lang="ts">
</script>

<div class="flex flex-col gap-3">
  <div class="flex items-center justify-between">
    <h2 class="text-white font-bold text-base">Friends <span class="text-zinc-500 font-normal text-sm">(0)</span></h2>
    <a href="/friends" class="text-blue-500 hover:text-blue-400 text-sm transition-colors">See All →</a>
  </div>
  <div class="flex items-center gap-4 overflow-x-auto pb-2">
    <a href="/search" class="flex flex-col items-center gap-2 shrink-0">
      <div class="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-zinc-700 transition-all">
        <svg class="w-7 h-7 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <span class="text-zinc-400 text-xs">Add Friends</span>
    </a>
    <!-- FriendCard components load here via API -->
  </div>
</div>