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

<div class="min-h-screen flex">

  <!-- Left panel: dark zinc -->
  <div class="hidden lg:flex flex-col justify-between w-[42%] shrink-0 bg-zinc-900 border-r border-zinc-800 p-10">
    <div class="flex items-center gap-2">
      <img src="/favicon.svg" alt="Auroxi" class="w-7 h-7 rounded-lg" />
      <span class="text-white font-bold text-sm tracking-tight">Auroxi</span>
    </div>

    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-4">
        <div class="w-10 h-10 rounded-2xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center">
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

      <div class="flex flex-col gap-3.5">
        {#each [
          { path: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z', text: 'Upload and discover notes from your school' },
          { path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', text: 'Earn Lunes daily and unlock Premium perks' },
          { path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', text: 'Connect with friends and study groups' },
        ] as item}
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d={item.path}/>
              </svg>
            </div>
            <p class="text-zinc-400 text-sm">{item.text}</p>
          </div>
        {/each}
      </div>
    </div>

    <p class="text-zinc-700 text-xs">© 2026 Auroxi. All rights reserved.</p>
  </div>

  <!-- Right panel: cream -->
  <div class="flex-1 flex items-center justify-center px-6 py-10" style="background:#F5F0E8">
    <div class="w-full max-w-sm flex flex-col gap-5">

      <div class="flex items-center gap-2 lg:hidden">
        <img src="/favicon.svg" alt="Auroxi" class="w-7 h-7 rounded-lg" />
        <span class="font-bold text-sm" style="color:#1a1a1a">Auroxi</span>
      </div>

      <div>
        <h2 class="text-2xl font-black tracking-tight" style="color:#1a1a1a">Create your account</h2>
        <p class="text-sm mt-1" style="color:#6b6b6b">Join your school's knowledge network.</p>
      </div>

      {#if form?.error}
        <p class="text-xs px-3 py-2 rounded-xl" style="color:#dc2626; background:#fee2e2; border:1px solid #fecaca">{form.error}</p>
      {/if}

      <form method="POST" use:enhance={() => { loading = true; return async ({ update }) => { await update(); loading = false; }; }} class="flex flex-col gap-3">

        <div class="flex flex-col gap-1.5">
          <Label for="name" class="text-xs" style="color:#6b6b6b">Full name</Label>
          <Input id="name" name="name" type="text" placeholder="Your name" required
            class="rounded-xl h-10 text-sm {form?.field === 'name' ? 'border-red-400' : ''}"
            style="background:#EDE8DF; border-color:#D5CFC6; color:#1a1a1a" />
        </div>

        <div class="flex flex-col gap-1.5">
          <Label for="username" class="text-xs" style="color:#6b6b6b">Username</Label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-sm select-none" style="color:#9a9a9a">@</span>
            <Input id="username" name="username" type="text" placeholder="your_username" required
              class="rounded-xl h-10 text-sm pl-7 {form?.field === 'username' ? 'border-red-400' : ''}"
              style="background:#EDE8DF; border-color:#D5CFC6; color:#1a1a1a" />
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <Label for="email" class="text-xs" style="color:#6b6b6b">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required
            class="rounded-xl h-10 text-sm {form?.field === 'email' ? 'border-red-400' : ''}"
            style="background:#EDE8DF; border-color:#D5CFC6; color:#1a1a1a" />
        </div>

        <div class="flex flex-col gap-1.5">
          <Label for="password" class="text-xs" style="color:#6b6b6b">Password</Label>
          <Input id="password" name="password" type="password" placeholder="Min 8 characters" required
            class="rounded-xl h-10 text-sm {form?.field === 'password' ? 'border-red-400' : ''}"
            style="background:#EDE8DF; border-color:#D5CFC6; color:#1a1a1a" />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col gap-1.5">
            <Label for="country" class="text-xs" style="color:#6b6b6b">Country</Label>
            <select id="country" name="country" required class="rounded-xl px-3 h-10 text-sm border focus:outline-none transition-colors"
              style="background:#EDE8DF; border-color:#D5CFC6; color:#1a1a1a">
              <option value="" disabled selected>Select</option>
              {#each countries as c}<option value={c}>{c}</option>{/each}
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <Label for="grade" class="text-xs" style="color:#6b6b6b">Grade</Label>
            <select id="grade" name="grade" required class="rounded-xl px-3 h-10 text-sm border focus:outline-none transition-colors"
              style="background:#EDE8DF; border-color:#D5CFC6; color:#1a1a1a">
              <option value="" disabled selected>Select</option>
              {#each grades as g}<option value={g}>{g}</option>{/each}
            </select>
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <Label for="school" class="text-xs" style="color:#6b6b6b">School</Label>
          <Input id="school" name="school" type="text" placeholder="e.g. Maru-a-Pula" required
            class="rounded-xl h-10 text-sm"
            style="background:#EDE8DF; border-color:#D5CFC6; color:#1a1a1a" />
        </div>

        <Button type="submit" disabled={loading}
          class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl h-10 text-sm mt-1 transition-all active:scale-95 disabled:opacity-50">
          {loading ? 'Creating account...' : 'Sign up'}
        </Button>
      </form>

      <p class="text-xs text-center" style="color:#9a9a9a">Already have an account? <a href="/login" class="font-medium" style="color:#3b82f6">Login</a></p>
    </div>
  </div>
</div>