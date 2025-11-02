<script lang="ts">
	import { goto } from '$app/navigation';

	import Panel from '$lib/atoms/Panel.svelte';

	import AutomaticControl from '$lib/molecules/StageSimulation/AutomaticControl.svelte';
	import Completed from '$lib/molecules/StageSimulation/Completed.svelte';
	import ControlHandover from '$lib/molecules/StageSimulation/ControlHandover.svelte';
	import PairingAttempt from '$lib/molecules/StageSimulation/PairingAttempt.svelte';
	import WaitingConnection from '$lib/molecules/StageSimulation/WaitingConnection.svelte';
	import { stageState } from '$lib/stores/stage.svelte';
	import { getNextStage } from '$lib/utils/stage';
	import { checkNull } from '$lib/utils/type-checker';

	const handleExitPage = () => {
		$stageState = 'waiting-connection';
		goto('/');
	};
	// TODO: context
	const handleGoNextStage = () => {
		const nextStage = getNextStage($stageState);
		if (!checkNull(nextStage)) {
			$stageState = nextStage;
		}
	};
</script>

<Panel class={'flex h-full w-full flex-col gap-4 rounded-xl p-5 pt-3'}>
	<div class="">
		<h3>실시간 뷰</h3>
	</div>

	<div
		class="relative h-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50"
		style="
    background-image:
      linear-gradient(rgba(100, 200, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100, 200, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    background-attachment: fixed;
  "
	>
		{#if $stageState === 'waiting-connection'}
			<div class="animation-fade-in absolute top-2 z-50 flex h-fit w-full items-center">
				<h4 class="w-full text-center text-slate-400">KIA 스테이션에 도착했습니다.</h4>
			</div>
			<WaitingConnection onClickBack={handleExitPage} onClickNext={handleGoNextStage} />
		{:else if $stageState === 'pairing-attempt'}
			<div class="animation-fade-in absolute top-2 z-50 flex h-fit w-full items-center">
				<h4 class="animation-pulse w-full text-center text-slate-400">
					스테이션과 페어링 중 입니다.
				</h4>
			</div>
			<PairingAttempt onNextStage={handleGoNextStage} />
		{:else if $stageState === 'control-handover'}
			<div class="animation-fade-in absolute top-2 z-50 flex h-fit w-full items-center">
				<h4 class="animation-pulse w-full text-center text-slate-400">
					스테이션에서 차량을 제어합니다.
					<br />
					핸들과 페달을 조작하지 마세요.
				</h4>
			</div>
			<ControlHandover onNextStage={handleGoNextStage} />
		{:else if $stageState === 'automatic-control'}
			<div class="animation-fade-in absolute top-2 z-50 flex h-fit w-full items-center">
				<h4 class="animation-pulse w-full text-center text-slate-400">
					모듈 교체가 진행 중입니다.
					<br />
					핸들과 페달을 조작하지 마세요.
				</h4>
			</div>
			<AutomaticControl onNextStage={handleGoNextStage} />
		{:else if $stageState === 'completed'}
			<div class="animation-fade-in absolute top-2 z-50 flex h-fit w-full items-center">
				<h4 class="animation-pulse w-full text-center text-slate-400">
					모듈 교체가 완료되었습니다.
					<br />
					천천히 이동하여주시길 바랍니다.
				</h4>
			</div>
			<Completed onNextStage={handleExitPage} />
		{/if}
	</div>
</Panel>

<style>
	@keyframes pulse {
		0% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.6;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animation-pulse {
		animation: pulse 1800ms ease-in-out infinite;
	}

	.animation-fade-in {
		opacity: 0;
		animation: fadeIn 600ms ease forwards;
	}
</style>
