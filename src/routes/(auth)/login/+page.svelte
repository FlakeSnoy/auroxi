<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';

  type FormData = { error?: string; field?: string } | null;
  const { form }: { form: FormData } = $props();

  let loading = $state(false);
</script>

<svelte:head><title>Login — Auroxi</title></svelte:head>

<div class="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
  <div class="w-full max-w-sm flex flex-col gap-6">

    <div class="flex flex-col items-center gap-3 text-center">
      <img src="/favicon.svg" alt="Auroxi" class="w-10 h-10 rounded-xl" />
      <div>
        <h1 class="text-white text-2xl font-black tracking-tight">Welcome back</h1>
        <p class="text-zinc-500 text-sm mt-1">Login to your Auroxi account.</p>
      </div>
    </div>

    {#if form?.error}
      <p class="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2 text-center">{form.error}</p>
    {/if}

    <form
      method="POST"
      use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }}
      class="flex flex-col gap-3"
    >
      <div class="flex flex-col gap-1.5">
        <Label for="email" class="text-zinc-400 text-xs">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@email.com" required
          class="bg-zinc-900 border-zinc-800 rounded-xl h-10 text-zinc-200 placeholder:text-zinc-600 text-sm focus:border-blue-500 {form?.field === 'email' ? 'border-red-500/50' : ''}" />
      </div>

      <div class="flex flex-col gap-1.5">
        <div class="flex items-center justify-between">
          <Label for="password" class="text-zinc-400 text-xs">Password</Label>
          <a href="/forgot-password" class="text-zinc-500 hover:text-zinc-400 text-xs transition-colors">Forgot?</a>
        </div>
        <Input id="password" name="password" type="password" placeholder="Your password" required
          class="bg-zinc-900 border-zinc-800 rounded-xl h-10 text-zinc-200 placeholder:text-zinc-600 text-sm focus:border-blue-500" />
      </div>

      <Button type="submit" disabled={loading}
        class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl h-10 text-sm mt-1 transition-all active:scale-95 disabled:opacity-50">
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </form>

    <p class="text-zinc-600 text-xs text-center">Don't have an account? <a href="/register" class="text-blue-500 hover:text-blue-400 font-medium transition-colors">Sign up</a></p>
  </div>
</div>