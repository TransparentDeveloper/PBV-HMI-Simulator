const checkNull = (input: unknown): input is null => input === null;
const checkUndefined = (input: unknown): input is undefined => input === undefined;
const checkTruthy = (input: unknown): boolean => !!input;
const checkFalsy = (input: unknown): boolean => !input;

export { checkNull, checkUndefined, checkTruthy, checkFalsy };
