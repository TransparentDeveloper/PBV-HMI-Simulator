type StageType =
	| 'waiting-connection'
	| 'near-communication'
	| 'control-handover'
	| 'automatic-control'
	| 'completed';

type StepType = 'ready' | 'in-progress' | 'done';

export type { StageType, StepType };
