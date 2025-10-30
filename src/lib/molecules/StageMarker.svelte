<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import CheckCircle from '$lib/atoms/Icon/CheckCircle.svelte';
	import Radio from '$lib/atoms/Icon/Radio.svelte';
	import Shield from '$lib/atoms/Icon/Shield.svelte';
	import Signal from '$lib/atoms/Icon/Signal.svelte';
	import Wifi from '$lib/atoms/Icon/Wifi.svelte';

	type StepType = 'ready' | 'in-progress' | 'completed';
	type IconType = 'check-circle' | 'radio' | 'shield' | 'signal' | 'wifi';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		label: string;
		step: StepType;
		icon?: IconType;
		iconSize?: string;
	}

	const props: Props = $props();
	const { label, step, icon, iconSize = '24px', ...rest } = props;
</script>

<div class="flex items-center gap-2" {...rest}>
	<div
		class={`flex h-fit w-fit items-center justify-center rounded-full p-2 transition-all
    ${step === 'ready' ? 'bg-slate-700' : ''}
    ${step === 'in-progress' ? 'bg-cyan-600 ring-4 ring-cyan-600/30' : ''}
    ${step === 'completed' ? 'bg-green-500' : ''}`}
	>
		{#if icon === 'check-circle'}
			<CheckCircle size={iconSize} class="bg-inherit text-white" />
		{:else if icon === 'radio'}
			<Radio size={iconSize} class="bg-inherit text-white" />
		{:else if icon === 'shield'}
			<Shield size={iconSize} class="bg-inherit text-white" />
		{:else if icon === 'signal'}
			<Signal size={iconSize} class="bg-inherit text-white" />
		{:else if icon === 'wifi'}
			<Wifi size={iconSize} class="bg-inherit text-white" />
		{/if}
	</div>

	<p
		class={`font-medium whitespace-nowrap
    ${step === 'ready' ? 'text-slate-500' : ''}
    ${step === 'in-progress' ? 'text-white' : ''}
    ${step === 'completed' ? 'text-white' : ''}`}
	>
		{label}
	</p>
</div>
