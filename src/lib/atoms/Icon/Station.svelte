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
	<rect x="2" y="2" width="20" height="20" rx="3" stroke="black" stroke-width="2" />
	<path
		d="M8.08516 16.184C7.84516 15.896 7.89316 15.496 8.19716 15.24L8.59716 14.904C8.88516 14.664 9.23716 14.68 9.52516 14.952C10.2132 15.592 11.0292 15.976 11.8452 15.976C13.2692 15.976 13.9412 15.272 13.9412 14.44C13.9412 13.416 12.8532 12.808 11.9092 12.408C9.65316 11.448 8.19716 10.6 8.19716 8.728C8.19716 6.968 9.68516 5.592 11.9412 5.592C13.4132 5.592 14.4852 6.136 15.1892 6.92C15.4292 7.192 15.4132 7.592 15.1252 7.88L14.8852 8.136C14.6292 8.392 14.2772 8.392 13.9732 8.136C13.3492 7.624 12.6452 7.384 12.0372 7.384C10.9012 7.384 10.2612 7.944 10.2612 8.728C10.2612 9.48 10.8052 10.072 12.7892 10.888C14.3412 11.528 16.0052 12.44 16.0052 14.44C16.0052 16.312 14.5172 17.768 11.8612 17.768C10.1492 17.768 8.85316 17.112 8.08516 16.184Z"
	/>
</svg>
