const getRandomInt = (min: number = 0, max: number = 1): number => {
	const minNumber = Math.min(min, max);
	const maxNumber = Math.max(min, max);

	const ceil = Math.ceil(minNumber);
	const floor = Math.floor(maxNumber);
	return Math.floor(Math.random() * (floor - ceil + 1)) + ceil;
};

export { getRandomInt };
