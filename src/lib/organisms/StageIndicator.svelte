<script lang="ts">
	import type { StageType } from '../types/stage';
	import type { IconNameType } from '$lib/atoms/Icon/Icon.svelte';

	import Panel from '$lib/atoms/Panel.svelte';
	import Icon from '$lib/atoms/Icon/Icon.svelte';
	import { StageLabel, StageList, StageOrder } from '$lib/constants/stage';

	interface Props {
		stage: StageType;
	}

	const { stage }: Props = $props();

	const bgClass = $derived.by<string | null>(() => {
		switch (stage) {
			case 'waiting-connection':
				return 'bg-linear-to-br from-gray-600 to-gray-700';
			case 'near-communication':
				return 'bg-red-500';
			case 'control-handover':
				return 'bg-green-500';
			case 'auto-driving':
				return 'bg-blue-500';
			case 'completed':
				return 'bg-pink-500';
			default:
				return null;
		}
	});

	const iconName = $derived.by<IconNameType | null>(() => {
		switch (stage) {
			case 'waiting-connection':
				return 'radio';
			case 'near-communication':
				return 'wifi';
			case 'control-handover':
				return 'shield';
			case 'auto-driving':
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
		<p class="text-sm opacity-80">단계 {StageOrder[stage]}/{StageList.length}</p>
		<strong class="text-base font-bold">{StageLabel[stage]}</strong>
	</div>
</Panel>
