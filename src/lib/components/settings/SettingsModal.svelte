<script lang="ts">
	import { goto } from '$app/navigation';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import AccountTab        from './tabs/AccountTab.svelte';
	import SecurityTab       from './tabs/SecurityTab.svelte';
	import PrivacyTab        from './tabs/PrivacyTab.svelte';
	import NotificationsTab  from './tabs/NotificationsTab.svelte';
	import SubscriptionTab   from './tabs/SubscriptionTab.svelte';
	import SystemMessagesTab from './tabs/SystemMessagesTab.svelte';

	const { userProfile, form, activeTab: initialTab }: {
		userProfile: any;
		form: any;
		activeTab: string;
	} = $props();

	const tabs = [
		{ id: 'account',         label: 'Account' },
		{ id: 'security',        label: 'Security' },
		{ id: 'privacy',         label: 'Privacy' },
		{ id: 'notifications',   label: 'Notifications' },
		{ id: 'subscription',    label: 'Subscription' },
		{ id: 'system-messages', label: 'System Messages' },
	];

	let activeTab = $state('account');

	$effect(() => {
		activeTab = initialTab ?? 'account';
	});

	function setTab(id: string) {
		activeTab = id;
		goto(`/settings?tab=${id}`, { replaceState: true, noScroll: true });
	}

	function close() {
		history.back();
	}
</script>

<div
	role="dialog"
	aria-modal="true"
	aria-label="Settings"
	tabindex="0"
	class="fixed inset-0 z-50 flex bg-black/80 backdrop-blur-md"
	onkeydown={(e) => { if (e.key === 'Escape') close(); }}
>
	<div class="absolute inset-0 -z-10" role="presentation" onclick={close}></div>

	<div class="w-full h-full flex overflow-hidden bg-zinc-900">

		<!-- Sidebar -->
		<div class="w-64 shrink-0 bg-zinc-900 border-r border-zinc-800/60 flex flex-col">
			<div class="px-6 pt-8 pb-4">
				<p class="text-xs text-zinc-600 font-bold uppercase tracking-widest">User Settings</p>
			</div>
			<div class="flex-1 overflow-y-auto px-3 flex flex-col gap-0.5">
				{#each tabs as tab (tab.id)}
					<button
						type="button"
						onclick={() => setTab(tab.id)}
						class="px-3 py-2.5 rounded-lg text-sm text-left transition-all {activeTab === tab.id
							? 'bg-zinc-800 text-white font-semibold'
							: 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40'}"
					>
						{tab.label}
					</button>
				{/each}
			</div>
			<Separator class="bg-zinc-800/60" />
			<div class="px-6 py-4">
				<p class="text-xs text-zinc-700">v0.0.1</p>
			</div>
		</div>

		<!-- Content -->
		<div class="flex-1 flex flex-col overflow-hidden bg-zinc-950">

			<div class="flex items-center justify-between px-10 py-5 border-b border-zinc-800/60 shrink-0">
				<h2 class="text-white font-bold text-xl capitalize">{activeTab.replace('-', ' ')}</h2>
				<button
					type="button"
					onclick={close}
					class="w-9 h-9 rounded-xl flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all text-lg"
				>
					✕
				</button>
			</div>

			<div class="flex-1 overflow-y-auto px-10 py-8 max-w-3xl w-full">
				{#if activeTab === 'account'}
					<AccountTab {userProfile} {form} />
				{:else if activeTab === 'security'}
					<SecurityTab />
				{:else if activeTab === 'privacy'}
					<PrivacyTab />
				{:else if activeTab === 'notifications'}
					<NotificationsTab />
				{:else if activeTab === 'subscription'}
					<SubscriptionTab />
				{:else if activeTab === 'system-messages'}
					<SystemMessagesTab />
				{/if}
			</div>

		</div>
	</div>
</div>