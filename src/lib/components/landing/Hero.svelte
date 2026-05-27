<section class="relative isolate overflow-hidden px-4 pt-32 sm:pt-36">
	<div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(190,242,100,0.18),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_28%)]"></div>
	<div class="mx-auto grid max-w-6xl items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr]">
		<div class="space-y-7">
			<p class="w-fit rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-sm font-medium text-lime-200">
				Study platform for focused learners
			</p>
			<div class="space-y-5">
				<h1 class="max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
					Make study sessions feel clear, calm, and doable.
				</h1>
				<p class="max-w-2xl text-lg leading-8 text-zinc-300">
					Auroxi helps students shape rough thoughts into useful notes, organize revision plans, and keep momentum without drowning in tabs, files, and last-minute panic.
				</p>
			</div>

			<form id="register" class="flex max-w-xl flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-3 sm:flex-row">
				<label class="sr-only" for="email">Email address</label>
				<input
					id="email"
					type="email"
					placeholder="Enter your email"
					class="min-h-12 flex-1 rounded-full border-white/10 bg-zinc-900/80 px-5 text-white placeholder:text-zinc-500 focus:border-lime-300 focus:ring-lime-300"
				/>
				<button class="min-h-12 rounded-full bg-lime-300 px-6 font-semibold text-zinc-950 transition hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-200">
					Register
				</button>
			</form>
		</div>

		<div class="relative min-h-[420px]">
			<div class="absolute left-4 top-8 h-72 w-72 animate-pulse rounded-full bg-lime-300/20 blur-3xl"></div>
			<div class="relative animate-[float_6s_ease-in-out_infinite] rounded-[2rem] border border-white/10 bg-zinc-900/90 p-5 shadow-2xl shadow-lime-950/40">
				<div class="mb-5 flex items-center justify-between">
					<div>
						<p class="text-sm text-zinc-400">Today&apos;s study notes</p>
						<h2 class="text-xl font-semibold">Biology: Cell transport</h2>
					</div>
					<span class="rounded-full bg-lime-300 px-3 py-1 text-xs font-bold text-zinc-950">Live</span>
				</div>
				<div class="space-y-3">
					<div class="rounded-2xl bg-white/5 p-4">
						<p class="text-sm font-semibold text-lime-200">Key idea</p>
						<p class="mt-2 text-zinc-300">Osmosis moves water across a partially permeable membrane from high to low water potential.</p>
					</div>
					<div class="grid gap-3 sm:grid-cols-2">
						<div class="rounded-2xl bg-white/5 p-4">
							<p class="text-sm text-zinc-400">Next review</p>
							<p class="mt-2 text-2xl font-bold">18 min</p>
						</div>
						<div class="rounded-2xl bg-lime-300 p-4 text-zinc-950">
							<p class="text-sm font-semibold">Confidence</p>
							<p class="mt-2 text-2xl font-bold">82%</p>
						</div>
					</div>
					<div class="rounded-2xl border border-lime-300/20 bg-lime-300/10 p-4">
						<p class="text-sm font-semibold text-lime-100">Auroxi prompt</p>
						<p class="mt-2 text-sm leading-6 text-zinc-300">Turn this topic into 5 exam-style questions and mark the weak spots.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-14px);
		}
	}
</style>