<script lang="ts">
  import { onMount } from 'svelte';

  let activeStep = $state(0);
  let visible = $state(false);

  const steps = [
    {
      title: "Create your account",
      description: "Register in seconds. Set your school, country and grade — Auroxi personalises your entire experience around you from day one.",
      svg: `
        <circle cx="12" cy="8" r="4" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 3.5c1.5.5 2.5 2 2.5 3.5S17.5 10 16 10.5" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
        <path d="M19.5 20c0-2.5-1.5-4.5-3.5-5.5" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
      `,
    },
    {
      title: "Publish your notes",
      description: "Type notes directly, upload a photo of your notebook, or drop a PDF. Tag it to your school, grade and subject — it lands in the shared library instantly.",
      svg: `
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
        <line x1="10" y1="9" x2="8" y2="9" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
        <circle cx="18" cy="18" r="3" stroke="#a3e635" stroke-width="2"/>
        <path d="m21 21-1.5-1.5" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
      `,
    },
    {
      title: "Join groups and chat",
      description: "Create or join study groups by subject. Chat with friends, discuss notes and collaborate — with automatic moderation keeping every conversation safe.",
      svg: `
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="#a3e635" stroke-width="2"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#a3e635" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `,
    },
    {
      title: "Earn Lunes rewards",
      description: "Stay active and earn Lunes currency every day. Save up to unlock Premium features or buy a Lunes pack — your contributions to the platform pay off.",
      svg: `
        <circle cx="12" cy="12" r="9" stroke="#a3e635" stroke-width="2"/>
        <path d="M12 6v2" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 16v2" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
        <path d="M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 2.5-3 3-3 5" stroke="#a3e635" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="16" r="0.5" fill="#a3e635" stroke="#a3e635" stroke-width="1"/>
      `,
    },
  ];

  onMount(() => {
    requestAnimationFrame(() => { visible = true; });

    const interval = setInterval(() => {
      activeStep = (activeStep + 1) % steps.length;
    }, 3500);

    return () => clearInterval(interval);
  });
</script>

<section
  id="how-it-works"
  class="bg-zinc-950 py-28 px-4 border-t border-zinc-900/80 relative overflow-hidden"
>
  <!-- Subtle glow -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-400/4 rounded-full blur-[120px] pointer-events-none"></div>

  <div class="max-w-5xl mx-auto relative z-10">

    <!-- Header -->
    <div class="text-center mb-16 transition-all duration-700
      {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}">
      <span class="text-lime-400 text-xs font-bold uppercase tracking-[0.25em] mb-3 block">
        Simple by design
      </span>
      <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
        How Auroxi works
      </h2>
      <p class="text-zinc-500 text-lg max-w-xl mx-auto">
        Four steps and you're part of your school's knowledge network.
      </p>
    </div>

    <!-- Step tabs -->
    <div class="flex flex-wrap justify-center gap-2 mb-12">
      {#each steps as step, i}
        <button
          onclick={() => activeStep = i}
          aria-label="Go to step {i + 1}: {step.title}"
          class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border
            {activeStep === i
              ? 'bg-lime-400/10 border-lime-400/40 text-lime-400 shadow-lg shadow-lime-400/10'
              : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'}"
        >
          <span class="w-5 h-5 rounded-full text-xs font-black flex items-center justify-center shrink-0 transition-all
            {activeStep === i ? 'bg-lime-400 text-zinc-950' : 'bg-zinc-800 text-zinc-500'}">
            {i + 1}
          </span>
          <span class="hidden sm:block">{step.title}</span>
        </button>
      {/each}
    </div>

    <!-- Active step detail -->
    {#each steps as step, i}
      {#if activeStep === i}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center
          transition-all duration-500 opacity-100 translate-y-0">

          <!-- Text side -->
          <div>
            <div class="flex items-center gap-3 mb-5">
              <span class="w-8 h-8 rounded-xl bg-lime-400 text-zinc-950 font-black text-sm flex items-center justify-center shadow-lg shadow-lime-400/30">
                {i + 1}
              </span>
              <h3 class="text-white font-black text-2xl">{step.title}</h3>
            </div>
            <p class="text-zinc-400 text-base leading-relaxed mb-8">
              {step.description}
            </p>
            <!-- Progress dots -->
            <div class="flex gap-2">
              {#each steps as _, j}
                <button
                  onclick={() => activeStep = j}
                  aria-label="Step {j + 1}"
                  class="h-1.5 rounded-full transition-all duration-500
                    {activeStep === j ? 'bg-lime-400 w-8' : 'bg-zinc-800 w-4 hover:bg-zinc-700'}"
                ></button>
              {/each}
            </div>
          </div>

          <!-- SVG icon side -->
          <div class="flex items-center justify-center">
            <div class="w-48 h-48 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center
              shadow-2xl shadow-black/50 hover:border-lime-400/30 transition-all duration-500
              hover:shadow-lime-400/10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                {@html step.svg}
              </svg>
            </div>
          </div>

        </div>
      {/if}
    {/each}

  </div>
</section>