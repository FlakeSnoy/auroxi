<script lang="ts">
  import Avatar from '$lib/components/ui/avatar.svelte';
  import type { User } from 'better-auth';

  const { user }: { user: User | undefined } = $props();
</script>

<div class="flex items-center gap-2 group cursor-pointer">
  <Avatar src={user?.image ?? undefined} name={user?.name} size={8} />
  <span class="text-zinc-300 text-sm font-medium hidden sm:block group-hover:text-white transition-colors">
    {user?.name}
  </span>
</div>