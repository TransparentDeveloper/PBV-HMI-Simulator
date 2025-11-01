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
	const { size = '1.5rem', ariaLabel = 'pbv', ...rest } = props;
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
	<path d="M14 17L7 17" />
	<path
		d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z"
	/>
	<path
		d="M19.3913 17H21.1304C21.3611 17 21.5822 16.8946 21.7453 16.7071C21.9084 16.5196 22 16.2652 22 16V12.35C21.9996 12.1231 21.9322 11.903 21.8087 11.726L18.7826 7.376C18.7013 7.25888 18.5981 7.16428 18.4807 7.0992C18.3633 7.03412 18.2347 7.00021 18.1043 7H12"
	/>
	<path
		d="M5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19Z"
	/>
	<path d="M3 17L1 17" />
	<path d="M11 17L8 17" />
	<path d="M1 17V8.5C1 7.67157 1.67157 7 2.5 7L12 7" />
</svg>
