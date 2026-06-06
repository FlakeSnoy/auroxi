<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';

  type FormData = { error?: string; field?: string } | null;
  const { form }: { form: FormData } = $props();

  const grades = ['Form 1','Form 2','Form 3','Form 4','Form 5','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'];
  const countries = ['Botswana','South Africa','Zimbabwe','Zambia','Namibia','Kenya','Uganda','Ghana','Nigeria','Other'];

  let loading = $state(false);
</script>

<svelte:head><title>Sign Up — Auroxi</title></svelte:head>

<div class="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-8">
  <div class="w-full max-w-sm">

    <div class="flex items-center gap-2 mb-6">
      <img src="/favicon.svg" alt="Auroxi" class="w-7 h-7 rounded-lg" />
      <span class="text-white font-bold text-sm">Auroxi</span>
    </div>

    <Card.Root class="bg-zinc-900 border-zinc-800 rounded-2xl">
      <Card.Header class="pb-3">
        <Card.Title class="text-white font-black">Sign Up</Card.Title>
        <Card.Description class="text-zinc-500 text-xs">Join your school's knowledge network.</Card.Description>
      </Card.Header>

      <Card.Content class="flex flex-col gap-3">
        {#if form?.error}
          <p class="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">{form.error}</p>
        {/if}

        <form method="POST" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }} class="flex flex-col gap-3">

          <div class="flex flex-col gap-1">
            <Label for="name" class="text-zinc-400 text-xs">Full Name</Label>
            <Input id="name" name="name" type="text" placeholder="Your name" required
              class="bg-zinc-800 border-zinc-700 rounded-xl h-10 text-zinc-200 placeholder-zinc-600 text-sm {form?.field === 'name' ? 'border-red-500/50' : ''}" />
          </div>

          <div class="flex flex-col gap-1">
            <Label for="username" class="text-zinc-400 text-xs">Username</Label>
            <Input id="username" name="username" type="text" placeholder="your_username" required
              class="bg-zinc-800 border-zinc-700 rounded-xl h-10 text-zinc-200 placeholder-zinc-600 text-sm {form?.field === 'username' ? 'border-red-500/50' : ''}" />
          </div>

          <div class="flex flex-col gap-1">
            <Label for="email" class="text-zinc-400 text-xs">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@email.com" required
              class="bg-zinc-800 border-zinc-700 rounded-xl h-10 text-zinc-200 placeholder-zinc-600 text-sm {form?.field === 'email' ? 'border-red-500/50' : ''}" />
          </div>

          <div class="flex flex-col gap-1">
            <Label for="password" class="text-zinc-400 text-xs">Password</Label>
            <Input id="password" name="password" type="password" placeholder="Min 8 chars" required
              class="bg-zinc-800 border-zinc-700 rounded-xl h-10 text-zinc-200 placeholder-zinc-600 text-sm {form?.field === 'password' ? 'border-red-500/50' : ''}" />
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col gap-1">
              <Label for="country" class="text-zinc-400 text-xs">Country</Label>
              <select id="country" name="country" required
                class="bg-zinc-800 border border-zinc-700 rounded-xl px-3 h-10 text-zinc-200 text-sm focus:outline-none focus:border-blue-500">
                <option value="" disabled selected>Select</option>
                {#each countries as c}<option value={c}>{c}</option>{/each}
              </select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="grade" class="text-zinc-400 text-xs">Grade</Label>
              <select id="grade" name="grade" required
                class="bg-zinc-800 border border-zinc-700 rounded-xl px-3 h-10 text-zinc-200 text-sm focus:outline-none focus:border-blue-500">
                <option value="" disabled selected>Select</option>
                {#each grades as g}<option value={g}>{g}</option>{/each}
              </select>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <Label for="school" class="text-zinc-400 text-xs">School</Label>
            <Input id="school" name="school" type="text" placeholder="e.g. Maru-a-Pula" required
              class="bg-zinc-800 border-zinc-700 rounded-xl h-10 text-zinc-200 placeholder-zinc-600 text-sm" />
          </div>

          <Button type="submit" disabled={loading}
            class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl h-10 text-sm mt-1 transition-all active:scale-95 disabled:opacity-50">
            {loading ? 'Creating...' : 'Sign Up'}
          </Button>

        </form>
      </Card.Content>

      <Card.Footer class="justify-center pt-0 pb-5">
        <p class="text-zinc-600 text-xs">Already have an account? <a href="/login" class="text-blue-500 hover:text-blue-400 font-medium">Login</a></p>
      </Card.Footer>
    </Card.Root>
  </div>
</div>