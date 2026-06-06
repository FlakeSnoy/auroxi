<script lang="ts">
  import { enhance } from '$app/forms';
  import type { InferSelectModel } from 'drizzle-orm';
  import type { profile } from '$lib/server/db/schema.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import { Button } from '$lib/components/ui/button/index.js';

  type Profile = InferSelectModel<typeof profile>;
  const { userProfile }: { userProfile: Profile | undefined } = $props();

  let loading = $state(false);
</script>

<div class="flex flex-col gap-4 border border-zinc-800 rounded-2xl p-5 bg-zinc-900/50">
  <h2 class="text-white font-bold text-sm">Edit Profile</h2>

  <form method="POST" action="/settings?/updateProfile" use:enhance={() => {
    loading = true;
    return async ({ update }) => { await update(); loading = false; };
  }} class="flex flex-col gap-4">

    <div class="flex flex-col gap-1">
      <Label class="text-zinc-400 text-xs">Display Name</Label>
      <Input name="displayName" value={userProfile?.displayName ?? ''} placeholder="Your display name"
        class="bg-zinc-800 border-zinc-700 rounded-xl h-10 text-zinc-200 text-sm" />
    </div>

    <div class="flex flex-col gap-1">
      <Label class="text-zinc-400 text-xs">Bio</Label>
      <textarea name="bio" rows="3" placeholder="Tell us about yourself..."
        class="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none focus:border-blue-500 resize-none">
        {userProfile?.bio ?? ''}
      </textarea>
    </div>

    <Button type="submit" disabled={loading}
      class="w-fit bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl px-6 h-10 text-sm transition-all">
      {loading ? 'Saving...' : 'Save changes'}
    </Button>

  </form>
</div>