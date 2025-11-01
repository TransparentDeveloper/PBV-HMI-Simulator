import type { StageType } from '$lib/types/stage';

const STAGE_LIST: StageType[] = [
	'waiting-connection',
	'near-communication',
	'control-handover',
	'automatic-control',
	'completed'
] as const;

const STAGE_ORDER: Record<StageType, number> = {
	'waiting-connection': 1,
	'near-communication': 2,
	'control-handover': 3,
	'automatic-control': 4,
	completed: 5
} as const;

const STAGE_LABEL: Record<StageType, string> = {
	'waiting-connection': '연결 대기',
	'near-communication': '근거리 통신',
	'control-handover': '제어권 이양',
	'automatic-control': '자동 제어',
	completed: '모듈 교체 완료'
} as const;

export { STAGE_LIST, STAGE_ORDER, STAGE_LABEL };
