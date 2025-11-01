<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { StepType } from '$lib/types/stage';
	import type { IconNameType } from '$lib/types/icon';

	import Icon from '$lib/atoms/Icon/Icon.svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		label: string;
		step: StepType;
		icon?: IconNameType;
		iconSize?: string;
	}

	const props: Props = $props();
	const { label, step, icon, iconSize = '24px', ...rest } = props;
</script>

<div class="flex items-center gap-2" {...rest}>
	{#if !!icon}
		<div
			class={`flex h-fit w-fit items-center justify-center rounded-full p-2 transition-all
    ${step === 'ready' ? 'bg-slate-700' : ''}
    ${step === 'in-progress' ? 'bg-cyan-600 ring-4 ring-cyan-600/30' : ''}
    ${step === 'done' ? 'bg-green-500' : ''}`}
		>
			<Icon name={icon} size={iconSize} />
		</div>
	{/if}

	<p
		class={`font-medium whitespace-nowrap
    ${step === 'ready' ? 'text-slate-500' : ''}
    ${step === 'in-progress' ? 'text-white' : ''}
    ${step === 'done' ? 'text-white' : ''}`}
	>
		{label}
	</p>
</div>
