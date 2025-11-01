<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		size?: number | string;
	}

	const props: Props = $props();
	const { size = '2rem', class: className, ...rest } = props;
</script>

<div
	style:width={size}
	class={`animation-spin aspect-square rounded-full border-6 border-gray-600/45 border-t-cyan-500 ${className}`}
	{...rest}
></div>

<style>
	/* 로딩 스피너 애니메이션 정의 */
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.animation-spin {
		animation: spin 1s linear infinite;
	}
</style>
