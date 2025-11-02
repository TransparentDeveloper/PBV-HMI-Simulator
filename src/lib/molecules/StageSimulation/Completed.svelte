<script lang="ts">
	import Icon from '$lib/atoms/Icon/Icon.svelte';
	import { sleep } from '$lib/utils/common';
	import { checkTruthy } from '$lib/utils/type-checker';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		onNextStage: VoidFunction;
	}

	const props: Props = $props();
	const { onNextStage } = props;

	let isShowDim = $state(false);

	onMount(async () => {
		await sleep(4000);
		isShowDim = true;
	});
</script>

<div class="flex h-full w-full items-center justify-center bg-transparent">
	<div
		class="animation-pulse-ring absolute z-0 h-40 w-40 rounded-full border-4 border-green-400 bg-green-400/50"
	></div>
	<Icon name="pbv" size="128px" class="relative z-10 rotate-y-180 text-green-400" />

	{#if checkTruthy(isShowDim)}
		<div
			class="absolute z-20 flex h-full w-full cursor-pointer items-center justify-center bg-gray-900/80"
			transition:fade={{ duration: 500 }}
			onclick={onNextStage}
		>
			<em class="cursor-pointer text-white">{`>> 터치하기 <<`} </em>
		</div>
	{/if}
</div>

<style>
	@keyframes ring-expand-fade {
		0% {
			transform: scale(0.4);
			opacity: 0.6;
		}
		100% {
			transform: scale(2.4);
			opacity: 0;
		}
	}

	.animation-pulse-ring {
		animation: ring-expand-fade 4s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>
