<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Separator } from '$lib/components/ui/separator/index.js';
  import * as Card from '$lib/components/ui/card/index.js';

  // Import ring SVGs for the footer bottom decoration
  import redSemi    from '$lib/assets/(background)/index-portal-red-semi.svg';
  import red        from '$lib/assets/(background)/index-portal-red.svg';
  import orangeSemi from '$lib/assets/(background)/index-portal-orange-semi.svg';
  import orange     from '$lib/assets/(background)/index-portal-orange.svg';
  import yellowSemi from '$lib/assets/(background)/index-portal-yellow-semi.svg';
  import yellow     from '$lib/assets/(background)/index-portal-yellow.svg';
  import greenSemi  from '$lib/assets/(background)/index-portal-green-semi.svg';
  import green      from '$lib/assets/(background)/index-portal-green.svg';
  import blueSemi   from '$lib/assets/(background)/index-portal-blue-semi.svg';
  import blue       from '$lib/assets/(background)/index-portal-blue.svg';

  const rings = [
    { src: redSemi,    size: 400, duration: 8,  reverse: false },
    { src: red,        size: 368, duration: 10, reverse: true  },
    { src: orangeSemi, size: 338, duration: 12, reverse: false },
    { src: orange,     size: 310, duration: 14, reverse: true  },
    { src: yellowSemi, size: 284, duration: 16, reverse: false },
    { src: yellow,     size: 260, duration: 18, reverse: true  },
    { src: greenSemi,  size: 238, duration: 20, reverse: false },
    { src: green,      size: 218, duration: 22, reverse: true  },
    { src: blueSemi,   size: 200, duration: 24, reverse: false },
    { src: blue,       size: 184, duration: 26, reverse: true  },
  ];

  let email = $state('');
  let submitted = $state(false);
  let error = $state('');

  function handleSubscribe() {
    if (!email || !email.includes('@')) {
      error = 'Please enter a valid email address.';
      return;
    }
    error = '';
    submitted = true;
    email = '';
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

<style>
  @keyframes spin-cw  { to { transform: rotate(360deg);  } }
  @keyframes spin-ccw { to { transform: rotate(-360deg); } }
  .ring {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
    transform-origin: center center;
    pointer-events: none;
    user-select: none;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background: none !important;
    display: block;
  }
  .cw  { animation: spin-cw  linear infinite; }
  .ccw { animation: spin-ccw linear infinite; }
</style>

<footer class="bg-zinc-900 border-t border-zinc-800/60 px-6 pt-16 pb-0 relative overflow-hidden">

  <!-- Dot grid -->
  <div class="absolute inset-0 pointer-events-none z-0"
    style="background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px);
           background-size: 28px 28px; opacity: 0.2;">
  </div>

  <div class="max-w-5xl mx-auto relative z-10">

    <!-- Top grid -->
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-10 mb-12">

      <!-- Brand column -->
      <div class="sm:col-span-2 flex flex-col gap-5">
        <div class="flex items-center gap-3">
          <img src="/favicon.svg" alt="Auroxi logo" class="w-9 h-9 rounded-xl border-0 outline-none" />
          <div class="flex flex-col leading-none">
            <span class="text-white font-black text-base tracking-tight">Auroxi</span>
            <span class="text-zinc-600 text-xs">by Anthro-labs</span>
          </div>
        </div>

        <p class="text-zinc-500 text-sm leading-relaxed max-w-xs">
          The student platform where knowledge is shared, connections are made
          and studying feels rewarding.
        </p>

        <!-- Newsletter -->
        <Card.Root class="bg-zinc-800/50 border-zinc-700/60 rounded-xl p-4">
          <Card.Content class="p-0">
            {#if submitted}
              <div class="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#60a5fa" stroke-width="2"/>
                  <path d="M9 12l2 2 4-4" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="text-zinc-400 text-sm">You're on the list.</p>
              </div>
            {:else}
              <p class="text-zinc-400 text-xs font-semibold uppercase tracking-widest mb-3">Stay in the loop</p>
              <div class="flex gap-2">
                <input type="email" bind:value={email} placeholder="your@email.com"
                  class="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2
                    text-zinc-300 text-sm placeholder-zinc-600
                    focus:outline-none focus:border-blue-500/50 transition-colors duration-200" />
                <Button onclick={handleSubscribe}
                  class="bg-blue-500 hover:bg-blue-400 text-white font-black text-xs px-4 rounded-lg shrink-0 transition-colors duration-200">
                  Notify me
                </Button>
              </div>
              {#if error}
                <p class="text-red-400 text-xs mt-2">{error}</p>
              {/if}
            {/if}
          </Card.Content>
        </Card.Root>

        <!-- GitHub -->
        <Button variant="outline" href="https://github.com/Anthro-labs"
          class="w-fit border-zinc-700 hover:border-zinc-600 text-zinc-500 hover:text-zinc-300
            bg-transparent hover:bg-transparent rounded-xl text-xs gap-2 transition-colors duration-200">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          Anthro-labs on GitHub
        </Button>
      </div>

      <!-- Platform links -->
      <div>
        <p class="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4">Platform</p>
        <ul class="space-y-2.5">
          {#each links.platform as link}
            <li>
              <a href={link.href}
                class="text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200
                  underline-offset-4 hover:underline">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Legal links -->
      <div>
        <p class="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4">Legal</p>
        <ul class="space-y-2.5">
          {#each links.legal as link}
            <li>
              <a href={link.href}
                class="text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200
                  underline-offset-4 hover:underline">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

    </div>

    <Separator class="bg-zinc-800" />

    <!-- Bottom bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
      <p class="text-zinc-600 text-xs">
        © {new Date().getFullYear()} Auroxi · Anthro-labs. All rights reserved.
      </p>
      <Badge variant="outline" class="border-zinc-800 text-zinc-700 text-xs rounded-full">
        Made for students, by students.
      </Badge>
    </div>

  </div>

  <!-- ── Spinning rings at the very bottom of footer ── -->
  <div class="relative w-full overflow-hidden" style="height: 220px;">
    <div class="absolute left-1/2 -translate-x-1/2 bottom-0"
      style="width: 400px; height: 400px; opacity: 0.15;">
      {#each rings as ring}
        <img src={ring.src} alt="" aria-hidden="true"
          class="ring {ring.reverse ? 'ccw' : 'cw'}"
          style="width:{ring.size}px;height:{ring.size}px;animation-duration:{ring.duration}s;" />
      {/each}
    </div>
  </div>

</footer>