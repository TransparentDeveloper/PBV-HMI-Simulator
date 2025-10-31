<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import CheckCircle from './CheckCircle.svelte';
	import Radio from './Radio.svelte';
	import Shield from './Shield.svelte';
	import Signal from './Signal.svelte';
	import Truck from './Truck.svelte';
	import Wifi from './Wifi.svelte';
	import Close from './Close.svelte';

	export type IconNameType =
		| 'check-circle'
		| 'close'
		| 'radio'
		| 'shield'
		| 'signal'
		| 'truck'
		| 'wifi';

	interface Props
		extends Omit<
			SVGAttributes<SVGSVGElement>,
			| 'width'
			| 'height'
			| 'viewBox'
			| 'fill'
			| 'stroke'
			| 'stroke-width'
			| 'stroke-linecap'
			| 'stroke-linejoin'
			| 'aria-label'
		> {
		name: IconNameType;
		size?: string;
		ariaLabel?: string;
		className?: string;
	}

	const props: Props = $props();
	const { name, ...rest } = props;
</script>

{#if name === 'check-circle'}
	<CheckCircle {...rest} />
{:else if name === 'close'}
	<Close {...rest} />
{:else if name === 'radio'}
	<Radio {...rest} />
{:else if name === 'shield'}
	<Shield {...rest} />
{:else if name === 'signal'}
	<Signal {...rest} />
{:else if name === 'truck'}
	<Truck {...rest} />
{:else if name === 'wifi'}
	<Wifi {...rest} />
{/if}
