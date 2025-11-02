<script lang="ts">
	import type { IconNameType } from '$lib/types/icon';

	import { STAGE_LABEL, STAGE_LIST, STAGE_ORDER } from '$lib/constants/stage';

	import Panel from '$lib/atoms/Panel.svelte';
	import Icon from '$lib/atoms/Icon/Icon.svelte';
	import { stageState } from '$lib/stores/stage.svelte';

	const bgClass = $derived.by<string | null>(() => {
		switch ($stageState) {
			case 'waiting-connection':
				return 'bg-linear-to-br from-gray-600 to-gray-700';
			case 'pairing-attempt':
				return 'bg-red-500';
			case 'control-handover':
				return 'bg-green-500';
			case 'automatic-control':
				return 'bg-linear-to-br from-orange-500 to-orange-700';
			case 'completed':
				return 'bg-pink-500';
			default:
				return null;
		}
	});

	const iconName = $derived.by<IconNameType | null>(() => {
		switch ($stageState) {
			case 'waiting-connection':
				return 'radio';
			case 'pairing-attempt':
				return 'wifi';
			case 'control-handover':
				return 'shield';
			case 'automatic-control':
				return 'signal';
			case 'completed':
				return 'check-circle';
			default:
				return null;
		}
	});
</script>

<Panel class={`flex w-full gap-3 rounded-2xl p-2 ${bgClass}`}>
	{#if !!iconName}
		<div
			class={`flex h-fit w-fit items-center justify-center rounded-xl bg-white/20 p-3 backdrop-blur`}
		>
			<Icon name={iconName} size={'1.25rem'} class={'text-white'} />
		</div>
	{/if}

	<div class="flex flex-col">
		<p class="text-sm opacity-80">단계 {STAGE_ORDER[$stageState]}/{STAGE_LIST.length}</p>
		<strong class="text-base font-bold">{STAGE_LABEL[$stageState]}</strong>
	</div>
</Panel>
