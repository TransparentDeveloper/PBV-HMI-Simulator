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
	const { size = '1.5rem', ariaLabel = 'front-module', className = '', ...rest } = props;
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
	<path d="M9 18L2 18" />
	<path d="M6 18L7 8" />
	<path
		d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
	/>
	<path
		d="M14.3913 18H16.1304C16.3611 18 16.5822 17.8946 16.7453 17.7071C16.9084 17.5196 17 17.2652 17 17V13.35C16.9996 13.1231 16.9322 12.903 16.8087 12.726L13.7826 8.376C13.7013 8.25888 13.5981 8.16428 13.4807 8.0992C13.3633 8.03412 13.2347 8.00021 13.1043 8H7"
	/>
</svg>
