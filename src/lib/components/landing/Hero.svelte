<script lang="ts">
	import { onMount } from 'svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let visible = $state(false);
	onMount(() => requestAnimationFrame(() => { visible = true; }));
</script>

<section class="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-6 py-24">

	<!-- Blue radial glow -->
	<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
		<div class="w-150 h-150 rounded-full bg-blue-600/15 blur-[140px]"></div>
	</div>

	<div class="relative z-10 flex flex-col items-center gap-8 text-center transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">

		<!-- Badge -->
		<Badge variant="outline" class="border-blue-500/30 text-blue-400 rounded-full px-4 py-1.5 text-xs gap-2 flex items-center">
			<span class="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse"></span>
			Open to all students
		</Badge>

		<!-- Favicon -->
		<div class="w-24 h-24 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black flex items-center justify-center">
			<img src="/favicon.svg" alt="Auroxi" class="w-14 h-14 object-contain rounded-2xl" />
		</div>

		<!-- Headline -->
		<div class="flex flex-col gap-3 max-w-2xl">
			<h1 class="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
				Your school's<br/>knowledge,<br/>
				<span class="text-blue-500">shared.</span>
			</h1>
			<p class="text-zinc-500 text-base md:text-lg leading-relaxed max-w-md mx-auto mt-2">
				Publish notes, join study groups, chat with classmates and earn Lunes rewards — all in one place built for students.
			</p>
		</div>

		<!-- CTA -->
		<div class="flex items-center gap-4">
			<Button href="/register" class="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3 rounded-xl text-sm shadow-lg shadow-blue-900/40">
				Get started
			</Button>
			<Button href="#how-it-works" variant="ghost" class="text-zinc-400 hover:text-white text-sm font-semibold">
				How it works
			</Button>
		</div>

		<!-- Stats -->
		<div class="flex items-center gap-8 text-sm mt-4">
			<div class="flex flex-col items-center gap-0.5">
				<span class="text-zinc-200 font-bold">Notes library</span>
				<span class="text-zinc-600 text-xs">Tagged by school & class</span>
			</div>
			<div class="w-px h-8 bg-zinc-800"></div>
			<div class="flex flex-col items-center gap-0.5">
				<span class="text-zinc-200 font-bold">Study groups</span>
				<span class="text-zinc-600 text-xs">Join by subject</span>
			</div>
			<div class="w-px h-8 bg-zinc-800"></div>
			<div class="flex flex-col items-center gap-0.5">
				<span class="text-zinc-200 font-bold">Lunes</span>
				<span class="text-zinc-600 text-xs">Daily rewards</span>
			</div>
		</div>

	</div>
</section>