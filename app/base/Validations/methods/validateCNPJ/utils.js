const calcDigitUsingMod = digitSum => {
	return digitSum % 11 < 2 ? 0 : 11 - (digitSum % 11);
};

const applyFormulaAndSumValues = (calcSequence, cnpjNum) => {
	return calcSequence
		.map((formulaNum, index) => {
			return parseInt(formulaNum * cnpjNum[index]);
		})
		.reduce((x, y) => {
			return x + y;
		}, 0);
};

const calcFirstDigit = cnpjNum => {
	const CALC_SEQUENCE = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	let sum = 0;

	sum = applyFormulaAndSumValues(CALC_SEQUENCE, cnpjNum);
	return calcDigitUsingMod(sum);
};

const calcSecondDigit = cnpjNum => {
	const CALC_SEQUENCE = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	let sum = 0;

	sum = applyFormulaAndSumValues(CALC_SEQUENCE, cnpjNum);
	return calcDigitUsingMod(sum);
};

export { calcFirstDigit, calcSecondDigit };
