import type { StageType } from '$lib/types/stage';
import { writable } from 'svelte/store';

export const stageState = writable<StageType>('waiting-connection');
