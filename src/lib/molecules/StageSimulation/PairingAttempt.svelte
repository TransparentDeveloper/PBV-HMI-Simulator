<script lang="ts">
	import Icon from '$lib/atoms/Icon/Icon.svelte';
	import { sleep } from '$lib/utils/common';
	import { getRandomInt } from '$lib/utils/number';
	import { checkFalsy, checkTruthy } from '$lib/utils/type-checker';
	import { onDestroy, onMount } from 'svelte';

	interface Props {
		onNextStage: VoidFunction;
	}

	const props: Props = $props();
	const { onNextStage } = props;

	let pbvTransform = $state('translate(-5px, 0) scale(0.75) rotateY(180deg)');
	let stationTransform = $state('translate(0, 0) scale(0.75)');

	let isDone = $state(false);

	function translateIcons() {
		isDone = true;
		pbvTransform = 'translate(59px, 4.5px) scale(1) rotateY(180deg)';
		stationTransform = 'translate(250px, 0) scale(0.6)';
	}

	onMount(async () => {
		const untilDone = getRandomInt(6, 8);

		await sleep(untilDone * 1000);
		translateIcons();
		await sleep(2500);
		onNextStage();
	});
</script>

<div class="flex h-full w-full items-center justify-center bg-transparent">
	<div
		class="relative rounded-full transition-all duration-2000"
		style="transform: {pbvTransform};"
	>
		{#if checkFalsy(isDone)}
			<div
				class="animate-ping-small absolute top-1/2 left-1/2 h-20 w-20 -translate-1/2 rounded-full bg-cyan-500/50"
			></div>
		{/if}
		<Icon name={'pbv'} class="text-cyan-500" size="128px" />
	</div>
	<div
		class="relative rounded-full transition-all duration-2000"
		style="transform: {stationTransform};"
	>
		{#if checkFalsy(isDone)}
			<div
				class="animate-ping-big absolute top-1/2 left-1/2 -z-10 h-20 w-20 -translate-1/2 rounded-full bg-orange-500/70"
			></div>
		{/if}
		<Icon name={'station'} class="text-red-400" size="128px" />
	</div>
</div>

<style>
	@keyframes ping-small {
		0% {
			transform: scale(1);
			opacity: 0.8;
		}
		70% {
			transform: scale(1.8);
			opacity: 0;
		}
		100% {
			transform: scale(1.8);
			opacity: 0;
		}
	}

	@keyframes ping-big {
		0% {
			transform: scale(1);
			opacity: 0.6;
		}
		100% {
			transform: scale(3);
			opacity: 0;
		}
	}

	.animate-ping-small {
		animation: ping-small 2250ms cubic-bezier(0, 0, 0.2, 1) infinite 300ms;
	}

	.animate-ping-big {
		animation: ping-big 3300ms cubic-bezier(0, 0, 0.2, 1) infinite 100ms;
	}
</style>
