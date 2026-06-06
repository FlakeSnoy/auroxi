<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';
  import * as Select from '$lib/components/ui/select/index.js';

  type FormData = { error?: string; field?: string } | null;
  const { form }: { form: FormData } = $props();

  const grades = [
    'Form 1','Form 2','Form 3','Form 4','Form 5',
    'Grade 8','Grade 9','Grade 10','Grade 11','Grade 12',
    'Year 7','Year 8','Year 9','Year 10','Year 11','Year 12',
  ];

  const countries = [
    'Botswana','South Africa','Zimbabwe','Zambia','Namibia',
    'Tanzania','Kenya','Uganda','Ghana','Nigeria','Other',
  ];

  let loading = $state(false);
</script>

<svelte:head>
  <title>Sign Up — Auroxi</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center px-4 py-12">
  <div class="w-full max-w-md">

    <Card.Root class="rounded-3xl border-0 shadow-2xl bg-white">
      <Card.Header class="pb-2 pt-8 px-8">
        <div class="flex items-center gap-3 mb-1">
          <img src="/favicon.svg" alt="Auroxi" class="w-8 h-8 rounded-xl" />
          <span class="text-zinc-400 text-sm font-medium">Auroxi</span>
        </div>
        <Card.Title class="text-zinc-900 text-2xl font-black">Sign Up</Card.Title>
        <Card.Description class="text-zinc-500 text-sm">
          Welcome to the Auroxi study community!
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

          <!-- Name -->
          <div class="flex flex-col gap-2">
            <Label for="name" class="text-zinc-800 font-bold text-sm">Full Name</Label>
            <Input id="name" name="name" type="text" placeholder="Your full name"
              required autocomplete="name"
              class="rounded-2xl border-zinc-200 bg-zinc-50 h-12 px-4 text-zinc-800 placeholder-zinc-400
                focus:border-blue-400 focus:ring-blue-400/20
                {form?.field === 'name' ? 'border-red-300' : ''}" />
          </div>

          <!-- Username -->
          <div class="flex flex-col gap-2">
            <Label for="username" class="text-zinc-800 font-bold text-sm">Username</Label>
            <Input id="username" name="username" type="text" placeholder="@your_username"
              required autocomplete="username"
              class="rounded-2xl border-zinc-200 bg-zinc-50 h-12 px-4 text-zinc-800 placeholder-zinc-400
                focus:border-blue-400 focus:ring-blue-400/20
                {form?.field === 'username' ? 'border-red-300' : ''}" />
            <p class="text-zinc-400 text-xs">Letters, numbers, underscores. 3–20 characters.</p>
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-2">
            <Label for="email" class="text-zinc-800 font-bold text-sm">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com"
              required autocomplete="email"
              class="rounded-2xl border-zinc-200 bg-zinc-50 h-12 px-4 text-zinc-800 placeholder-zinc-400
                focus:border-blue-400 focus:ring-blue-400/20
                {form?.field === 'email' ? 'border-red-300' : ''}" />
          </div>

          <!-- Password -->
          <div class="flex flex-col gap-2">
            <Label for="password" class="text-zinc-800 font-bold text-sm">Password</Label>
            <Input id="password" name="password" type="password"
              placeholder="At least 8 characters"
              required autocomplete="new-password"
              class="rounded-2xl border-zinc-200 bg-zinc-50 h-12 px-4 text-zinc-800 placeholder-zinc-400
                focus:border-blue-400 focus:ring-blue-400/20
                {form?.field === 'password' ? 'border-red-300' : ''}" />
          </div>

          <Separator class="bg-zinc-100" />

          <!-- Country + Grade -->
          <div class="grid grid-cols-2 gap-3">
            <div class="flex flex-col gap-2">
              <Label for="country" class="text-zinc-800 font-bold text-sm">Country</Label>
              <select id="country" name="country" required
                class="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 h-12 text-zinc-800 text-sm
                  focus:outline-none focus:border-blue-400 transition-colors
                  {form?.field === 'country' ? 'border-red-300' : ''}">
                <option value="" disabled selected class="text-zinc-400">Select</option>
                {#each countries as c}
                  <option value={c}>{c}</option>
                {/each}
              </select>
            </div>
            <div class="flex flex-col gap-2">
              <Label for="grade" class="text-zinc-800 font-bold text-sm">Grade</Label>
              <select id="grade" name="grade" required
                class="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 h-12 text-zinc-800 text-sm
                  focus:outline-none focus:border-blue-400 transition-colors
                  {form?.field === 'grade' ? 'border-red-300' : ''}">
                <option value="" disabled selected>Select</option>
                {#each grades as g}
                  <option value={g}>{g}</option>
                {/each}
              </select>
            </div>
          </div>

          <!-- School -->
          <div class="flex flex-col gap-2">
            <Label for="school" class="text-zinc-800 font-bold text-sm">School Name</Label>
            <Input id="school" name="school" type="text" placeholder="e.g. Maru-a-Pula School"
              required
              class="rounded-2xl border-zinc-200 bg-zinc-50 h-12 px-4 text-zinc-800 placeholder-zinc-400
                focus:border-blue-400 focus:ring-blue-400/20
                {form?.field === 'school' ? 'border-red-300' : ''}" />
          </div>

          <p class="text-zinc-400 text-xs leading-relaxed">
            By clicking "Sign Up" you agree to our
            <a href="/terms" class="text-blue-500 hover:underline">Terms of Service</a>
            and
            <a href="/privacy" class="text-blue-500 hover:underline">Privacy Policy</a>.
          </p>

          <Button type="submit" disabled={loading}
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-black rounded-2xl h-12 text-sm
              transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30">
            {loading ? 'Creating account...' : 'Sign Up'}
          </Button>

        </form>
      </Card.Content>

      <Card.Footer class="justify-center pb-8 pt-0">
        <p class="text-zinc-400 text-sm">
          Already have an account?
          <a href="/login" class="text-blue-500 hover:text-blue-600 font-bold ml-1 transition-colors">Login</a>
        </p>
      </Card.Footer>
    </Card.Root>

  </div>
</div>