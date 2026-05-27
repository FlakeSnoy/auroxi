<script lang="ts">
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import HowItWorks from '$lib/components/landing/HowItWorks.svelte';
	import Features from '$lib/components/landing/Features.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';

	let { data }: {
		data: {
			platform: string;
		};
	} = $props();
</script>

<svelte:head>
	<title>{data.platform} | Study smarter</title>
	<meta
		name="description"
		content="Auroxi is a study platform for focused notes, clearer revision, and consistent learning habits."
	/>
</svelte:head>

<main class="min-h-screen bg-zinc-950 text-white">
	<Navbar />
	<Hero />
	<HowItWorks />
	<Features />
	<Footer />
</main>