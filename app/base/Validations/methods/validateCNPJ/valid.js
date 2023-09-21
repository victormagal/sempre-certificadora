import { calcFirstDigit, calcSecondDigit } from './utils';

const isValidLength = cnpj => {
	return cnpj.length === 14;
};

const isDigitsEqual = cnpj => {
	let same = true;
	cnpj.split('').reduce((x, y) => {
		if (x !== y && same) {
			same = false;
		}
		return y;
	});

	return same;
};

const isCalculatedDigitMatches = cnpj => {
	return (
		calcFirstDigit(cnpj).toString() === cnpj[12] &&
		calcSecondDigit(cnpj).toString() === cnpj[13]
	);
};

const isValidCNPJ = cnpj =>
	isValidLength(cnpj) &&
	isDigitsEqual(cnpj) &&
	isCalculatedDigitMatches(cnpj);

export { isValidCNPJ, isValidLength, isDigitsEqual, isCalculatedDigitMatches };
