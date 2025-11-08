<script lang="ts">
	import Icon from '$lib/atoms/Icon/Icon.svelte';
	import { sleep } from '$lib/utils/common';
	import { onMount } from 'svelte';

	interface Props {
		onNextStage: VoidFunction;
	}

	const props: Props = $props();
	const { onNextStage } = props;

	onMount(async () => {
		await sleep(8000);
		onNextStage();
	});
</script>

<div
	class="animation-color-shift relative flex h-full w-full items-center justify-center bg-transparent"
>
	<div class="color-mask absolute inset-0"></div>
	<Icon name="pbv" size="128px" class="-translate-x-1 translate-y-1 rotate-y-180" />
</div>

<style>
	@keyframes cyan-push-orange {
		0% {
			background-position: -200% 0;
			opacity: 1;
		}
		60% {
			background-position: 0% 0;
			opacity: 1;
		}
		100% {
			background-position: 100% 0;
			opacity: 0;
		}
	}

	@keyframes color-shift {
		0% {
			color: #00d3f2;
		}
		100% {
			color: #ff6467;
		}
	}

	.animation-color-shift {
		color: #00d3f2;
		animation: color-shift 2000ms linear forwards 3000ms;
	}

	.color-mask {
		background: linear-gradient(
			to right,
			rgba(0, 184, 219, 0.1) 0%,
			rgba(0, 184, 219, 0.25) 25%,
			rgba(255, 200, 160, 0.35) 50%,
			rgba(255, 180, 130, 0.45) 70%,
			rgba(255, 210, 160, 0.2) 85%,
			rgba(255, 210, 160, 0) 100%
		);
		background-size: 250% 100%;
		mask-image: linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 40%,
			black 60%,
			transparent 100%
		);
		mask-size: 200% 100%;
		-webkit-mask-size: 200% 100%;
		filter: blur(1px);
		animation: cyan-push-orange 6s cubic-bezier(0.42, 0, 0.58, 1) forwards;
	}
</style>
