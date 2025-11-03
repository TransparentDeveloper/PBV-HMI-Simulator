// $lib/stores/stage.svelte.ts
import type { StageType } from '$lib/types/stage';

class StageStore {
	value = $state<StageType>('waiting-connection');

	set(newValue: StageType) {
		this.value = newValue;
	}

	update(fn: (current: StageType) => StageType) {
		this.value = fn(this.value);
	}
}

export const stageState = new StageStore();
