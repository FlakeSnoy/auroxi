<script lang="ts">
	import { SettingsModal } from '$lib/components/settings/index.js';
	import type { PageData, ActionData } from './$types.js';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<SettingsModal
	userProfile={data.userProfile}
	{form}
	activeTab={(data as any).activeTab ?? 'account'}
/>