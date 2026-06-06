<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';

  type FormData = { error?: string; field?: string } | null;
  const { form }: { form: FormData } = $props();

  let loading = $state(false);
</script>

<svelte:head><title>Login — Auroxi</title></svelte:head>

<div class="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
  <div class="w-full max-w-sm">

    <div class="flex items-center gap-2 mb-6">
      <img src="/favicon.svg" alt="Auroxi" class="w-7 h-7 rounded-lg" />
      <span class="text-white font-bold text-sm">Auroxi</span>
    </div>

    <Card.Root class="bg-zinc-900 border-zinc-800 rounded-2xl">
      <Card.Header class="pb-3">
        <Card.Title class="text-white font-black">Welcome back</Card.Title>
        <Card.Description class="text-zinc-500 text-xs">Login to your Auroxi account.</Card.Description>
      </Card.Header>

      <Card.Content class="flex flex-col gap-3">
        {#if form?.error}
          <p class="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">{form.error}</p>
        {/if}

        <form method="POST" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }} class="flex flex-col gap-3">

          <div class="flex flex-col gap-1">
            <Label for="email" class="text-zinc-400 text-xs">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@email.com" required
              class="bg-zinc-800 border-zinc-700 rounded-xl h-10 text-zinc-200 placeholder-zinc-600 text-sm {form?.field === 'email' ? 'border-red-500/50' : ''}" />
          </div>

          <div class="flex flex-col gap-1">
            <div class="flex justify-between items-center">
              <Label for="password" class="text-zinc-400 text-xs">Password</Label>
              <a href="/forgot-password" class="text-zinc-500 hover:text-zinc-400 text-xs transition-colors">Forgot?</a>
            </div>
            <Input id="password" name="password" type="password" placeholder="Your password" required
              class="bg-zinc-800 border-zinc-700 rounded-xl h-10 text-zinc-200 placeholder-zinc-600 text-sm" />
          </div>

          <Button type="submit" disabled={loading}
            class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl h-10 text-sm mt-1 transition-all active:scale-95 disabled:opacity-50">
            {loading ? 'Logging in...' : 'Login'}
          </Button>

        </form>
      </Card.Content>

      <Card.Footer class="justify-center pt-0 pb-5">
        <p class="text-zinc-600 text-xs">Don't have an account? <a href="/register" class="text-blue-500 hover:text-blue-400 font-medium">Sign Up</a></p>
      </Card.Footer>
    </Card.Root>
  </div>
</div>