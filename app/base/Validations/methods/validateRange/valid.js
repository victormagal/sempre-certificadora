const isValid = (number, min, max) => {
	return number >= min && number <= max;
};

const isValidType = (number, min, max) => {
	return (
		typeof number === 'number' &&
		typeof min === 'number' &&
		typeof max === 'number'
	);
};

const isValidRange = (number, min, max) =>
	isValid(number, min, max) && isValidType(number, min, max);

export { isValidRange, isValid, isValidType };
