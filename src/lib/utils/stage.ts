import type { StageType } from '$lib/types/stage';

const getNextStage = (stage: StageType): StageType | null => {
	switch (stage) {
		case 'waiting-connection':
			return 'pairing-attempt';
		case 'pairing-attempt':
			return 'control-handover';
		case 'control-handover':
			return 'automatic-control';
		case 'automatic-control':
			return 'completed';
		default:
			return null;
	}
};

export { getNextStage };
