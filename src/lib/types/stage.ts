type StageType =
	| 'waiting-connection'
	| 'pairing-attempt'
	| 'control-handover'
	| 'automatic-control'
	| 'completed';

type StepType = 'ready' | 'in-progress' | 'done';

export type { StageType, StepType };
