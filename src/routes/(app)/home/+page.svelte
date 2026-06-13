<script lang="ts">
	import type { PageData } from './$types.js';
	import FriendsRow from '$lib/components/friends/FriendsRow.svelte';
	import HomeFeed from '$lib/components/recommended/HomeFeed.svelte';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head><title>Home — Auroxi</title></svelte:head>

<div class="p-6 flex flex-col gap-8">
	<h1 class="text-white font-black text-3xl">Home</h1>
	<FriendsRow friends={data.friends ?? []} />
	<HomeFeed feed={data.feed ?? []} />
</div>