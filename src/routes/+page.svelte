<script lang="ts">
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Howitworks from '$lib/components/landing/Howitworks.svelte';
	import Features from '$lib/components/landing/Features.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';

	export let data: {
		platform: string;
	};
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
	<Howitworks />
	<Features />
	<Footer />
</main>