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

<svelte:head>
  <title>Login — Auroxi</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center px-4 py-12">
  <div class="w-full max-w-sm">

    <Card.Root class="rounded-3xl border-0 shadow-2xl bg-white">
      <Card.Header class="pb-2 pt-8 px-8">
        <div class="flex items-center gap-3 mb-1">
          <img src="/favicon.svg" alt="Auroxi" class="w-8 h-8 rounded-xl" />
          <span class="text-zinc-400 text-sm font-medium">Auroxi</span>
        </div>
        <Card.Title class="text-zinc-900 text-2xl font-black">Welcome back</Card.Title>
        <Card.Description class="text-zinc-500 text-sm">
          Login to your Auroxi account.
        </Card.Description>
      </Card.Header>

      <Card.Content class="px-8 pb-6">
        {#if form?.error}
          <div class="flex items-start gap-2 bg-red-50 border border-red-200 rounded-2xl px-4 py-3 mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="9" stroke="#ef4444" stroke-width="2"/>
              <path d="M12 8v4M12 16h.01" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p class="text-red-500 text-sm">{form.error}</p>
          </div>
        {/if}

        <form method="POST" use:enhance={() => {
          loading = true;
          return async ({ update }) => { await update(); loading = false; };
        }} class="flex flex-col gap-5">

          <div class="flex flex-col gap-2">
            <Label for="email" class="text-zinc-800 font-bold text-sm">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com"
              required autocomplete="email"
              class="rounded-2xl border-zinc-200 bg-zinc-50 h-12 px-4 text-zinc-800 placeholder-zinc-400
                focus:border-blue-400 focus:ring-blue-400/20
                {form?.field === 'email' ? 'border-red-300' : ''}" />
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <Label for="password" class="text-zinc-800 font-bold text-sm">Password</Label>
              <a href="/forgot-password" class="text-blue-500 hover:text-blue-600 text-xs font-medium transition-colors">
                Forgot password?
              </a>
            </div>
            <Input id="password" name="password" type="password" placeholder="Your password"
              required autocomplete="current-password"
              class="rounded-2xl border-zinc-200 bg-zinc-50 h-12 px-4 text-zinc-800 placeholder-zinc-400
                focus:border-blue-400 focus:ring-blue-400/20" />
          </div>

          <Button type="submit" disabled={loading}
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-black rounded-2xl h-12 text-sm
              transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 mt-1">
            {loading ? 'Logging in...' : 'Login'}
          </Button>

        </form>
      </Card.Content>

      <Card.Footer class="justify-center pb-8 pt-0">
        <p class="text-zinc-400 text-sm">
          Don't have an account?
          <a href="/register" class="text-blue-500 hover:text-blue-600 font-bold ml-1 transition-colors">Sign Up</a>
        </p>
      </Card.Footer>
    </Card.Root>

  </div>
</div>