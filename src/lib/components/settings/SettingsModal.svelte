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
		{
			id: 'account', label: 'Account',
			svg: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
		},
		{
			id: 'security', label: 'Security',
			svg: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
		},
		{
			id: 'privacy', label: 'Privacy',
			svg: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
		},
		{
			id: 'notifications', label: 'Notifications',
			svg: `<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>`,
		},
		{
			id: 'subscription', label: 'Subscription',
			svg: `<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>`,
		},
		{
			id: 'system-messages', label: 'System Messages',
			svg: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
		},
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
		<div class="w-60 shrink-0 border-r border-zinc-800/50 flex flex-col py-6">
			<p class="text-[11px] text-zinc-600 font-bold uppercase tracking-widest px-5 mb-3">User Settings</p>

			<div class="flex-1 px-3 flex flex-col gap-0.5">
				{#each tabs as tab (tab.id)}
					<button
						type="button"
						onclick={() => setTab(tab.id)}
						class="w-full px-3 py-2.5 rounded-lg text-sm text-left transition-all flex items-center gap-3 {activeTab === tab.id
							? 'bg-blue-600/10 text-blue-400 font-medium'
							: 'text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/50'}"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="15"
							height="15"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="shrink-0"
						>
							{@html tab.svg}
						</svg>
						<span>{tab.label}</span>
						{#if activeTab === tab.id}
							<span class="ml-auto w-1 h-4 rounded-full bg-blue-500"></span>
						{/if}
					</button>
				{/each}
			</div>

			<div class="px-5 pt-4 mt-auto">
				<Separator class="bg-zinc-800/50 mb-4" />
				<p class="text-[11px] text-zinc-700">v0.0.1</p>
			</div>
		</div>

		<!-- Content -->
		<div class="flex-1 flex flex-col overflow-hidden bg-zinc-900">

			<!-- Header -->
			<div class="flex items-center justify-between px-10 py-5 border-b border-zinc-800/50 shrink-0">
				<div>
					<h2 class="text-white font-bold text-xl capitalize">{activeTab.replace('-', ' ')}</h2>
					<p class="text-zinc-600 text-xs mt-0.5">{tabs.find(t => t.id === activeTab)?.label} settings</p>
				</div>
				<button
					type="button"
					onclick={close}
					aria-label="Close settings"
					class="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-zinc-700"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
					</svg>
				</button>
			</div>

			<!-- Tab content -->
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