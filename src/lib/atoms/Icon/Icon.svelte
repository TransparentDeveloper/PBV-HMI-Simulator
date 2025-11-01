<script lang="ts">
	import type { IconNameType } from '$lib/types/icon';
	import type { SVGAttributes } from 'svelte/elements';

	import CheckCircle from './CheckCircle.svelte';
	import Radio from './Radio.svelte';
	import Shield from './Shield.svelte';
	import Signal from './Signal.svelte';
	import PBV from './PBV.svelte';
	import Wifi from './Wifi.svelte';
	import Close from './Close.svelte';
	import PBVFront from './PBVFront.svelte';
	import PBVBack from './PBVBack.svelte';
	import Station from './Station.svelte';

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
{:else if name === 'wifi'}
	<Wifi {...rest} />
{:else if name === 'pbv'}
	<PBV {...rest} />
{:else if name === 'pbv-front'}
	<PBVFront {...rest} />
{:else if name === 'pbv-back'}
	<PBVBack {...rest} />
{:else if name === 'station'}
	<Station {...rest} />
{/if}
