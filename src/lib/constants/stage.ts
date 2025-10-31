import type { StageType } from '$lib/types/stage';

const StageList: StageType[] = [
	'waiting-connection',
	'near-communication',
	'control-handover',
	'automatic-control',
	'completed'
] as const;

const StageOrder: Record<StageType, number> = {
	'waiting-connection': 1,
	'near-communication': 2,
	'control-handover': 3,
	'automatic-control': 4,
	completed: 5
} as const;

const StageLabel: Record<StageType, string> = {
	'waiting-connection': '연결 대기',
	'near-communication': '근거리 통신',
	'control-handover': '제어권 이양',
	'automatic-control': '자동 제어',
	completed: '모듈 교체 완료'
} as const;

export { StageList, StageOrder, StageLabel };
