<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  // Typed form data — fixes "Property 'error' does not exist on type '{}'"
  type FormData = { error?: string; field?: string } | null;
  const { form }: { form: FormData } = $props();

  let loading = $state(false);
</script>

<svelte:head>
  <title>Login — Auroxi</title>
</svelte:head>

<div class="min-h-screen bg-zinc-900 flex items-center justify-center px-4 py-16">

  <div class="fixed inset-0 pointer-events-none"
    style="background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px);
           background-size: 28px 28px; opacity: 0.3;">
  </div>

  <div class="w-full max-w-sm relative z-10">

    <a href="/" class="flex items-center gap-3 mb-8 w-fit">
      <img src="/favicon.svg" alt="Auroxi" class="w-9 h-9 rounded-xl" />
      <span class="text-white font-black text-lg tracking-tight">Auroxi</span>
    </a>

    <Card.Root class="bg-zinc-800/50 border-zinc-700/60 rounded-2xl">
      <Card.Header>
        <Card.Title class="text-white text-xl font-black">Welcome back</Card.Title>
        <Card.Description class="text-zinc-500 text-sm">
          Login to your Auroxi account.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        {#if form?.error}
          <div class="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="9" stroke="#ef4444" stroke-width="2"/>
              <path d="M12 8v4M12 16h.01" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <p class="text-red-400 text-sm">{form.error}</p>
          </div>
        {/if}

        <form method="POST" use:enhance={() => {
          loading = true;
          return async ({ update }) => { await update(); loading = false; };
        }} class="flex flex-col gap-4">

          <!-- Email -->
          <div class="flex flex-col gap-1.5">
            <label for="email" class="text-zinc-400 text-xs font-semibold uppercase tracking-wide">Email</label>
            <input id="email" name="email" type="email" placeholder="you@email.com"
              required autocomplete="email"
              class="w-full bg-zinc-900 border rounded-xl px-4 py-2.5 text-zinc-200 text-sm placeholder-zinc-600
                focus:outline-none focus:border-zinc-500 transition-colors duration-200
                {form?.field === 'email' ? 'border-red-500/60' : 'border-zinc-700'}" />
          </div>

          <!-- Password -->
          <div class="flex flex-col gap-1.5">
            <div class="flex items-center justify-between">
              <label for="password" class="text-zinc-400 text-xs font-semibold uppercase tracking-wide">Password</label>
              <a href="/forgot-password" class="text-zinc-600 hover:text-zinc-400 text-xs transition-colors duration-200">
                Forgot password?
              </a>
            </div>
            <input id="password" name="password" type="password" placeholder="Your password"
              required autocomplete="current-password"
              class="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-zinc-200 text-sm placeholder-zinc-600
                focus:outline-none focus:border-zinc-500 transition-colors duration-200" />
          </div>

          <Button type="submit" disabled={loading}
            class="w-full bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black rounded-xl py-2.5 text-sm
              transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed mt-1">
            {loading ? 'Logging in...' : 'Login'}
          </Button>

        </form>
      </Card.Content>

      <Card.Footer class="justify-center pt-0">
        <p class="text-zinc-600 text-sm">
          Don't have an account?
          <a href="/register" class="text-zinc-400 hover:text-white transition-colors duration-200 font-medium ml-1">Register</a>
        </p>
      </Card.Footer>
    </Card.Root>

  </div>
</div>