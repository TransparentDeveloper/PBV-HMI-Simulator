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
	const { size = '1.5rem', ariaLabel = 'radio', ...rest } = props;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	{...rest}
>
	<circle cx="12" cy="12" r="2" />
	<path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
	<path d="M4.93 19.07a10 10 0 0 0 14.14 0" />
	<path d="M8.46 8.46a5 5 0 0 1 7.08 0" />
	<path d="M8.46 15.54a5 5 0 0 0 7.08 0" />
</svg>
