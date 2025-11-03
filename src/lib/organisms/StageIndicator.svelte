<script lang="ts">
	import type { IconNameType } from '$lib/types/icon';

	import { STAGE_LABEL, STAGE_LIST, STAGE_ORDER } from '$lib/constants/stage';

	import Panel from '$lib/atoms/Panel.svelte';
	import Icon from '$lib/atoms/Icon/Icon.svelte';
	import { stageState } from '$lib/stores/stage.svelte';

	const currentStage = $derived(stageState.value);

	const bgClass = $derived.by<string | null>(() => {
		switch (currentStage) {
			case 'waiting-connection':
				return 'bg-linear-to-br from-gray-600 to-gray-700';
			case 'pairing-attempt':
				return 'bg-linear-to-br from-cyan-600 to-cyan-700';
			case 'control-handover':
				return 'bg-linear-to-br from-orange-600 to-orange-700';
			case 'automatic-control':
				return 'bg-linear-to-br from-orange-600 to-orange-700';
			case 'completed':
				return 'bg-linear-to-br from-green-500 to-gray-600';
			default:
				return null;
		}
	});
</script>

<section
	class={`flex h-fit min-h-4 w-full gap-3 rounded-2xl border border-slate-700 bg-slate-800/50 p-2 backdrop-blur ${bgClass}`}
>
	<div
		class={`flex h-fit w-fit items-center justify-center rounded-xl bg-white/20 p-3 backdrop-blur`}
	>
		{#if currentStage === 'waiting-connection'}
			<Icon name={'radio'} size={'1.25rem'} class={'text-white'} />
		{:else if currentStage === 'pairing-attempt'}
			<Icon name={'wifi'} size={'1.25rem'} class={'text-white'} />
		{:else if currentStage === 'control-handover'}
			<Icon name={'shield'} size={'1.25rem'} class={'text-white'} />
		{:else if currentStage === 'automatic-control'}
			<Icon name={'signal'} size={'1.25rem'} class={'text-white'} />
		{:else if currentStage === 'completed'}
			<Icon name={'check-circle'} size={'1.25rem'} class={'text-white'} />
		{/if}
	</div>
	<div class="flex flex-col">
		<p class="text-sm opacity-80">단계 {STAGE_ORDER[stageState.value]}/{STAGE_LIST.length}</p>
		<strong class="text-base font-bold">{STAGE_LABEL[stageState.value]}</strong>
	</div>
</section>
