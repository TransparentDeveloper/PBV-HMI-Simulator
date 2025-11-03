<script lang="ts">
	import type { StageType, StepType } from '$lib/types/stage';

	import { STAGE_LABEL, STAGE_LIST, STAGE_ORDER } from '$lib/constants/stage';

	import Panel from '$lib/atoms/Panel.svelte';
	import StepMarker from '$lib/molecules/StepMarker.svelte';
	import { stageState } from '$lib/stores/stage.svelte';
	import type { ComponentProps } from 'svelte';
	import type { IconNameType } from '$lib/types/icon';
	import { checkNull } from '$lib/utils/type-checker';
</script>

<Panel class={'flex w-full flex-col gap-4 rounded-xl p-5 pt-3'}>
	<h3>프로세스</h3>
	<ol class={'flex w-full list-none flex-col gap-2'}>
		{#each STAGE_LIST as stage (stage)}
			<li>
				<StepMarker {stage} />
			</li>
		{/each}
	</ol>
</Panel>
