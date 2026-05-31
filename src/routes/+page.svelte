<script lang="ts">
  import Navbar from '$lib/components/landing/Navbar.svelte';
  import Hero from '$lib/components/landing/Hero.svelte';
  import HowItWorks from '$lib/components/landing/HowItWorks.svelte';
  import Features from '$lib/components/landing/Features.svelte';
  import Footer from '$lib/components/landing/Footer.svelte';
</script>

<svelte:head>
  <title>Auroxi — Your school's knowledge, all in one place</title>
  <meta name="description" content="Auroxi is the student platform where you publish notes, join study groups, chat with classmates and earn rewards — all tagged to your school and class." />
  <meta property="og:title" content="Auroxi" />
  <meta property="og:description" content="Your school's knowledge, all in one place." />
  <meta name="theme-color" content="#a3e635" />
  <link rel="icon" href="/favicon.png" type="image/svg+xml" />
</svelte:head>

<Navbar />

<main class="bg-zinc-950 min-h-screen">
  <Hero />
  <HowItWorks />
  <Features />
  <Footer />
</main>