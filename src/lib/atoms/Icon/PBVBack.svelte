<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

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
		size?: string;
		ariaLabel?: string;
	}

	const props: Props = $props();
	const { size = '1.5rem', ariaLabel = 'pbv-back-module', className = '', ...rest } = props;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={size}
	viewBox="0 0 20 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-label={ariaLabel}
	{...rest}
>
	<path
		d="M8 20C9.10457 20 10 19.1046 10 18C10 16.8954 9.10457 16 8 16C6.89543 16 6 16.8954 6 18C6 19.1046 6.89543 20 8 20Z"
	/>
	<path d="M6 18L4 18" />
	<path d="M14 18L11 18" />
	<path d="M14 18L15 8" />
	<path d="M4 18V9.5C4 8.67157 4.67157 8 5.5 8H15" />
</svg>
