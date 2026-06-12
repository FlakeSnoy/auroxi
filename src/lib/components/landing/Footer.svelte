<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';

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
		company: [
			{ label: 'About',    href: '/about/information' },
			{ label: 'Newsroom', href: '/newsroom' },
			{ label: 'GitHub',   href: 'https://github.com/Anthro-labs' },
		],
	};
</script>

<footer class="bg-black border-t border-zinc-900">

	<!-- CTA band -->
	<div class="border-b border-zinc-900 py-20 px-6">
		<div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
			<div>
				<h2 class="text-3xl sm:text-4xl font-black text-white mb-2">Ready to study smarter?</h2>
				<p class="text-zinc-500 text-base">Join thousands of students sharing knowledge on Auroxi.</p>
			</div>
			<div class="flex items-center gap-3 shrink-0">
				<Button href="/login" variant="outline" class="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 rounded-xl">
					Login
				</Button>
				<Button href="/register" class="bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl">
					Get started free
				</Button>
			</div>
		</div>
	</div>

	<!-- Main footer -->
	<div class="py-16 px-6">
		<div class="max-w-6xl mx-auto">

			<div class="grid grid-cols-2 sm:grid-cols-5 gap-10 mb-14">

				<!-- Brand -->
				<div class="col-span-2 flex flex-col gap-5">
					<a href="/" class="flex items-center gap-3 w-fit">
						<img src="/favicon.svg" alt="Auroxi" class="w-10 h-10 rounded-xl" />
						<div>
							<p class="text-white font-black text-base leading-none">Auroxi</p>
							<p class="text-zinc-600 text-xs mt-0.5">by Anthro-labs</p>
						</div>
					</a>

					<p class="text-zinc-500 text-sm leading-relaxed max-w-xs">
						The student platform where knowledge is shared, connections are made and studying feels rewarding.
					</p>

					<!-- Newsletter -->
					<div class="flex flex-col gap-2">
						<p class="text-zinc-400 text-xs font-semibold uppercase tracking-widest">Stay in the loop</p>
						{#if submitted}
							<p class="text-zinc-500 text-sm">You're on the list ✓</p>
						{:else}
							<div class="flex gap-2">
								<Input
									type="email"
									bind:value={email}
									placeholder="your@email.com"
									class="bg-zinc-900 border-zinc-800 text-zinc-300 placeholder:text-zinc-600 focus:border-blue-500 rounded-xl min-w-0"
								/>
								<Button
									onclick={handleSubscribe}
									class="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shrink-0"
								>
									Notify me
								</Button>
							</div>
							{#if error}<p class="text-red-400 text-xs">{error}</p>{/if}
						{/if}
					</div>
				</div>

				<!-- Platform -->
				<div class="flex flex-col gap-4">
					<p class="text-zinc-300 font-bold text-xs uppercase tracking-widest">Platform</p>
					<ul class="flex flex-col gap-3">
						{#each links.platform as link}
							<li><a href={link.href} class="text-zinc-500 hover:text-zinc-200 text-sm transition-colors">{link.label}</a></li>
						{/each}
					</ul>
				</div>

				<!-- Company -->
				<div class="flex flex-col gap-4">
					<p class="text-zinc-300 font-bold text-xs uppercase tracking-widest">Company</p>
					<ul class="flex flex-col gap-3">
						{#each links.company as link}
							<li><a href={link.href} class="text-zinc-500 hover:text-zinc-200 text-sm transition-colors">{link.label}</a></li>
						{/each}
					</ul>
				</div>

				<!-- Legal -->
				<div class="flex flex-col gap-4">
					<p class="text-zinc-300 font-bold text-xs uppercase tracking-widest">Legal</p>
					<ul class="flex flex-col gap-3">
						{#each links.legal as link}
							<li><a href={link.href} class="text-zinc-500 hover:text-zinc-200 text-sm transition-colors">{link.label}</a></li>
						{/each}
					</ul>
				</div>

			</div>

			<Separator class="bg-zinc-900 mb-6" />

			<div class="flex flex-col sm:flex-row items-center justify-between gap-3">
				<p class="text-zinc-600 text-xs">© {new Date().getFullYear()} Auroxi · Anthro-labs. All rights reserved.</p>
				<Badge variant="outline" class="border-zinc-800 text-zinc-700 text-xs rounded-full px-3">Made for students, by students.</Badge>
			</div>

		</div>
	</div>

</footer>