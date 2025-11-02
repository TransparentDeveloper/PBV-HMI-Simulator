<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/atoms/Icon/Icon.svelte';
	import { sleep } from '$lib/utils/common';

	let fontModuleColor = $state('#ff6467');

	let oldBackModuleTransform = $state('translate(25px, 0)');
	let newBackModuleTransform = $state('translate(100px, 350px)');

	interface Props {
		onNextStage: VoidFunction;
	}

	const props: Props = $props();
	const { onNextStage } = props;

	// 애니메이션 정방향 진행
	async function runForwardSequence() {
		// 1. old module 분리
		await sleep(500);
		oldBackModuleTransform = 'translate(100px, 0)';

		// 2. old module 위로 제거 & new module 아래서 등장
		await sleep(2500);
		oldBackModuleTransform = 'translate(100px, -350px)';
		newBackModuleTransform = 'translate(100px, 0)';

		// 3. new module 도킹
		await sleep(2000);
		newBackModuleTransform = 'translate(25px, 0)';

		// 4. 도킹 완료
		await sleep(2000);
		fontModuleColor = '#05df72';
	}

	// 애니메이션 역방향 진행
	async function runBackwardSequence() {
		// 1. new module 분리
		await sleep(500);
		newBackModuleTransform = 'translate(100px, 0)';

		// 2. old module 위에서 등장 & new module 아래로 제거
		await sleep(2000);
		newBackModuleTransform = 'translate(100px, 350px)';
		oldBackModuleTransform = 'translate(100px, 0)';

		// 3. old module 도킹
		await sleep(2000);
		oldBackModuleTransform = 'translate(25px, 0)';

		// 4. 도킹 완료
		await sleep(2000);
		fontModuleColor = '#ff6467';
	}

	onMount(async () => {
		await runForwardSequence();
		await sleep(1000);
		await runBackwardSequence();
		await sleep(1000);
		await runForwardSequence();
		await sleep(1000);
		onNextStage();
	});
</script>

<div class="flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
	<div class="absolute transition-colors duration-100 ease-in" style="color: {fontModuleColor}">
		<Icon
			name="pbv-front"
			class={'absolute top-1/2 left-1/2 translate-x-[calc(-50%-20px)] -translate-y-1/2 rotate-y-180 text-inherit transition-colors duration-700 ease-in-out'}
			size="128px"
		/>
	</div>

	<div
		class="absolute transition-all duration-2000 ease-in-out"
		style="transform: {oldBackModuleTransform};"
	>
		<Icon class={`rotate-y-180 text-red-400`} name={'pbv-back'} size={'128px'} />
	</div>

	<div
		class="absolute transition-all duration-2000 ease-in-out"
		style="transform: {newBackModuleTransform};"
	>
		<Icon class={`rotate-y-180 text-green-400`} name={'pbv-back'} size={'128px'} />
	</div>
</div>
