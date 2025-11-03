<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { StageType, StepType } from '$lib/types/stage';
	import type { IconNameType } from '$lib/types/icon';

	import Icon from '$lib/atoms/Icon/Icon.svelte';
	import { stageState } from '$lib/stores/stage.svelte';
	import { STAGE_LABEL, STAGE_ORDER } from '$lib/constants/stage';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		stage: StageType;
	}

	const props: Props = $props();
	const { stage, ...rest } = props;

	const currentStage = $derived(stageState.value);

	const step = $derived.by<StepType>(() => {
		const stageOrder = STAGE_ORDER[stage];
		const currentStageOrder = STAGE_ORDER[currentStage];

		if (stageOrder > currentStageOrder) {
			return 'ready';
		} else if (stageOrder === currentStageOrder) {
			return 'in-progress';
		} else {
			return 'done';
		}
	});

	const iconName = $derived.by<IconNameType>(() => {
		if (step === 'done') {
			return 'check-circle';
		}

		switch (stage) {
			case 'waiting-connection':
				return 'radio';
			case 'pairing-attempt':
				return 'wifi';
			case 'control-handover':
				return 'shield';
			case 'automatic-control':
				return 'signal';
			case 'completed':
			default:
				return 'check-circle';
		}
	});
</script>

<div class="flex items-center gap-2" {...rest}>
	{#if !!iconName}
		<div
			class={`flex h-fit w-fit items-center justify-center rounded-full p-2 transition-all
    ${step === 'ready' ? 'bg-slate-700' : ''}
    ${step === 'in-progress' ? 'bg-cyan-600 ring-4 ring-cyan-600/30' : ''}
    ${step === 'done' ? 'bg-green-500' : ''}`}
		>
			<Icon name={iconName} size={'18px'} />
		</div>
	{/if}

	<p
		class={`font-medium whitespace-nowrap
    ${step === 'ready' ? 'text-slate-500' : ''}
    ${step === 'in-progress' ? 'text-white' : ''}
    ${step === 'done' ? 'text-white' : ''}`}
	>
		{STAGE_LABEL[stage]}
	</p>
</div>
