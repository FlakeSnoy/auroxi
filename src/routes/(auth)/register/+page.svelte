<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Label } from '$lib/components/ui/label/index.js';

  type FormData = { error?: string; field?: string } | null;
  const { form }: { form: FormData } = $props();

  const grades = ['Form 1','Form 2','Form 3','Form 4','Form 5','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12'];
  const countries = ['Botswana','South Africa','Zimbabwe','Zambia','Namibia','Kenya','Uganda','Ghana','Nigeria','Other'];

  let loading = $state(false);
</script>

<svelte:head><title>Sign Up — Auroxi</title></svelte:head>

<div class="min-h-screen bg-zinc-950 flex">

  <!-- Left panel -->
  <div class="hidden lg:flex flex-col justify-between w-[42%] shrink-0 bg-zinc-900 border-r border-zinc-800/60 p-10">
    <div class="flex items-center gap-2">
      <img src="/favicon.svg" alt="Auroxi" class="w-7 h-7 rounded-lg" />
      <span class="text-white font-bold text-sm tracking-tight">Auroxi</span>
    </div>

    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <div class="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/20 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        </div>
        <h1 class="text-white text-3xl font-black leading-tight tracking-tight">
          Your school's<br />knowledge network.
        </h1>
        <p class="text-zinc-500 text-sm leading-relaxed max-w-xs">
          Share notes, earn Lunes, connect with classmates. Built for students, by students.
        </p>
      </div>

      <div class="flex flex-col gap-3">
        {#each [
          { icon: '📚', text: 'Upload and discover notes from your school' },
          { icon: '✦', text: 'Earn Lunes daily and unlock Premium perks' },
          { icon: '🤝', text: 'Connect with friends and study groups' },
        ] as item}
          <div class="flex items-center gap-3">
            <span class="text-base">{item.icon}</span>
            <p class="text-zinc-400 text-sm">{item.text}</p>
          </div>
        {/each}
      </div>
    </div>

    <p class="text-zinc-700 text-xs">© 2026 Auroxi. All rights reserved.</p>
  </div>

  <!-- Right panel -->
  <div class="flex-1 flex items-center justify-center px-6 py-10">
    <div class="w-full max-w-sm flex flex-col gap-6">

      <!-- Mobile logo -->
      <div class="flex items-center gap-2 lg:hidden">
        <img src="/favicon.svg" alt="Auroxi" class="w-7 h-7 rounded-lg" />
        <span class="text-white font-bold text-sm">Auroxi</span>
      </div>

      <div>
        <h2 class="text-white text-2xl font-black tracking-tight">Create your account</h2>
        <p class="text-zinc-500 text-sm mt-1">Join your school's knowledge network.</p>
      </div>

      {#if form?.error}
        <p class="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">{form.error}</p>
      {/if}

      <form
        method="POST"
        use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }}
        class="flex flex-col gap-3"
      >
        <div class="flex flex-col gap-1.5">
          <Label for="name" class="text-zinc-400 text-xs">Full name</Label>
          <Input id="name" name="name" type="text" placeholder="Your name" required
            class="bg-zinc-900 border-zinc-800 rounded-xl h-10 text-zinc-200 placeholder:text-zinc-600 text-sm focus:border-blue-500 {form?.field === 'name' ? 'border-red-500/50' : ''}" />
        </div>

        <div class="flex flex-col gap-1.5">
          <Label for="username" class="text-zinc-400 text-xs">Username</Label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 text-sm select-none">@</span>
            <Input id="username" name="username" type="text" placeholder="your_username" required
              class="bg-zinc-900 border-zinc-800 rounded-xl h-10 text-zinc-200 placeholder:text-zinc-600 text-sm pl-7 focus:border-blue-500 {form?.field === 'username' ? 'border-red-500/50' : ''}" />
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <Label for="email" class="text-zinc-400 text-xs">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required
            class="bg-zinc-900 border-zinc-800 rounded-xl h-10 text-zinc-200 placeholder:text-zinc-600 text-sm focus:border-blue-500 {form?.field === 'email' ? 'border-red-500/50' : ''}" />
        </div>

        <div class="flex flex-col gap-1.5">
          <Label for="password" class="text-zinc-400 text-xs">Password</Label>
          <Input id="password" name="password" type="password" placeholder="Min 8 characters" required
            class="bg-zinc-900 border-zinc-800 rounded-xl h-10 text-zinc-200 placeholder:text-zinc-600 text-sm focus:border-blue-500 {form?.field === 'password' ? 'border-red-500/50' : ''}" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col gap-1.5">
            <Label for="country" class="text-zinc-400 text-xs">Country</Label>
            <select id="country" name="country" required
              class="bg-zinc-900 border border-zinc-800 rounded-xl px-3 h-10 text-zinc-200 text-sm focus:outline-none focus:border-blue-500 transition-colors">
              <option value="" disabled selected>Select</option>
              {#each countries as c}<option value={c}>{c}</option>{/each}
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <Label for="grade" class="text-zinc-400 text-xs">Grade</Label>
            <select id="grade" name="grade" required
              class="bg-zinc-900 border border-zinc-800 rounded-xl px-3 h-10 text-zinc-200 text-sm focus:outline-none focus:border-blue-500 transition-colors">
              <option value="" disabled selected>Select</option>
              {#each grades as g}<option value={g}>{g}</option>{/each}
            </select>
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <Label for="school" class="text-zinc-400 text-xs">School</Label>
          <Input id="school" name="school" type="text" placeholder="e.g. Maru-a-Pula" required
            class="bg-zinc-900 border-zinc-800 rounded-xl h-10 text-zinc-200 placeholder:text-zinc-600 text-sm focus:border-blue-500" />
        </div>

        <Button type="submit" disabled={loading}
          class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl h-10 text-sm mt-1 transition-all active:scale-95 disabled:opacity-50">
          {loading ? 'Creating account...' : 'Sign up'}
        </Button>
      </form>

      <p class="text-zinc-600 text-xs text-center">Already have an account? <a href="/login" class="text-blue-500 hover:text-blue-400 font-medium transition-colors">Login</a></p>
    </div>
  </div>
</div>