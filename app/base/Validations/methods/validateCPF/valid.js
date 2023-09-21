import { calcFirstDigit, calcSecondDigit } from './utils';

const isValidLength = cpf => {
	return cpf.length === 11;
};

const isDigitsEqual = cpf => {
	let same = true;
	cpf.split('').reduce((x, y) => {
		if (x !== y && same) {
			same = false;
		}
		return y;
	});

	return same;
};

const isCalculatedDigitMatches = cpf => {
	return (
		calcFirstDigit(cpf).toString() === cpf[9] &&
		calcSecondDigit(cpf).toString() === cpf[10]
	);
};

const isValidCPF = cpf =>
	isValidLength(cpf) && !isDigitsEqual(cpf) && isCalculatedDigitMatches(cpf);

export { isValidCPF, isValidLength, isDigitsEqual, isCalculatedDigitMatches };
