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

<div class="min-h-screen flex items-center justify-center px-4" style="background:#F5F0E8">
  <div class="w-full max-w-sm flex flex-col gap-6">

    <div class="flex flex-col items-center gap-3 text-center">
      <img src="/favicon.svg" alt="Auroxi" class="w-10 h-10 rounded-xl" />
      <div>
        <h1 class="text-2xl font-black tracking-tight" style="color:#1a1a1a">Welcome back</h1>
        <p class="text-sm mt-1" style="color:#6b6b6b">Login to your Auroxi account.</p>
      </div>
    </div>

    {#if form?.error}
      <p class="text-xs px-3 py-2 rounded-xl text-center" style="color:#dc2626; background:#fee2e2; border:1px solid #fecaca">{form.error}</p>
    {/if}

    <div class="flex flex-col gap-3 p-6 rounded-2xl" style="background:#EDE8DF; border:1px solid #D5CFC6">

      <form method="POST" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }} class="flex flex-col gap-3">

        <div class="flex flex-col gap-1.5">
          <Label for="email" class="text-xs" style="color:#6b6b6b">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required
            class="rounded-xl h-10 text-sm {form?.field === 'email' ? 'border-red-400' : ''}"
            style="background:#F5F0E8; border-color:#D5CFC6; color:#1a1a1a" />
        </div>

        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between">
            <Label for="password" class="text-xs" style="color:#6b6b6b">Password</Label>
            <a href="/forgot-password" class="text-xs transition-colors hover:opacity-70" style="color:#9a9a9a">Forgot?</a>
          </div>
          <Input id="password" name="password" type="password" placeholder="Your password" required
            class="rounded-xl h-10 text-sm"
            style="background:#F5F0E8; border-color:#D5CFC6; color:#1a1a1a" />
        </div>

        <Button type="submit" disabled={loading}
          class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl h-10 text-sm mt-1 transition-all active:scale-95 disabled:opacity-50">
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>

    <p class="text-xs text-center" style="color:#9a9a9a">Don't have an account? <a href="/register" class="font-medium" style="color:#3b82f6">Sign up</a></p>
  </div>
</div>