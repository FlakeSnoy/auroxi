<script lang="ts">
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  let email = $state('');
  let submitted = $state(false);
  let error = $state('');

  function handleSubscribe() {
    if (!email || !email.includes('@')) { error = 'Please enter a valid email.'; return; }
    error = ''; submitted = true; email = '';
  }

  const links = {
    platform: [
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Features',     href: '#features' },
      { label: 'Register',     href: '/register' },
      { label: 'Login',        href: '/login' },
    ],
    legal: [
      { label: 'Privacy Policy',       href: '/privacy' },
      { label: 'Terms of Service',     href: '/terms' },
      { label: 'Community Guidelines', href: '/guidelines' },
      { label: 'Moderation Policy',    href: '/moderation' },
    ],
  };
</script>

<footer class="bg-zinc-950 border-t border-zinc-800/40 px-6 pt-16 pb-10">
  <div class="max-w-5xl mx-auto flex flex-col gap-10">

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
      <div class="sm:col-span-2 flex flex-col gap-5">
        <a href="/" class="flex items-center gap-3">
          <img src="/favicon.svg" alt="Auroxi" class="w-9 h-9 rounded-xl" />
          <div class="flex flex-col leading-none">
            <span class="text-white font-black text-base">Auroxi</span>
            <span class="text-zinc-600 text-xs">by Anthro-labs</span>
          </div>
        </a>

        <p class="text-zinc-500 text-sm leading-relaxed max-w-xs">
          The student platform where knowledge is shared, connections are made and studying feels rewarding.
        </p>

        <Card.Root class="bg-zinc-900 border-zinc-800 rounded-xl p-4">
          <Card.Content class="p-0">
            {#if submitted}
              <p class="text-zinc-400 text-sm">You're on the list — we'll be in touch.</p>
            {:else}
              <p class="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-3">Stay in the loop</p>
              <div class="flex gap-2">
                <input type="email" bind:value={email} placeholder="your@email.com"
                  class="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-zinc-300 text-sm placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors" />
                <button onclick={handleSubscribe}
                  class="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 rounded-xl transition-all shrink-0">
                  Notify me
                </button>
              </div>
              {#if error}<p class="text-red-400 text-xs mt-2">{error}</p>{/if}
            {/if}
          </Card.Content>
        </Card.Root>
      </div>

      <div>
        <p class="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4">Platform</p>
        <ul class="space-y-2.5">
          {#each links.platform as link}
            <li><a href={link.href} class="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">{link.label}</a></li>
          {/each}
        </ul>
      </div>

      <div>
        <p class="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4">Legal</p>
        <ul class="space-y-2.5">
          {#each links.legal as link}
            <li><a href={link.href} class="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">{link.label}</a></li>
          {/each}
        </ul>
      </div>
    </div>

    <Separator class="bg-zinc-800" />

    <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
      <p class="text-zinc-600 text-xs">© {new Date().getFullYear()} Auroxi · Anthro-labs. All rights reserved.</p>
      <Badge variant="outline" class="border-zinc-800 text-zinc-700 text-xs rounded-full">Made for students, by students.</Badge>
    </div>

  </div>
</footer>