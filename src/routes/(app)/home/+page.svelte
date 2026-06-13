<script lang="ts">
	import type { PageData } from './$types.js';
	import { FriendsRow } from '$lib/components/friends/index.js';
	import RecommendedUsers from '$lib/components/recommended/RecommendedUsers.svelte';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head><title>Home — Auroxi</title></svelte:head>

<div class="p-6 flex flex-col gap-8 max-w-5xl">
	<h1 class="text-white font-black text-3xl">Home</h1>
	<FriendsRow friends={data.friends ?? []} />
	<RecommendedUsers users={data.recommended ?? []} />
</div>