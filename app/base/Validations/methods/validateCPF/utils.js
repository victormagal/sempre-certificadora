const calcDigitWithMod = digitSum => {
	return digitSum % 11 < 2 ? 0 : 11 - (digitSum % 11);
};

const applyFormulaAndSumValues = (calcSequence, cpf) => {
	return calcSequence
		.map((formulaNum, index) => {
			return parseInt(formulaNum * cpf[index]);
		})
		.reduce((x, y) => {
			return x + y;
		}, 0);
};

const calcFirstDigit = cpf => {
	const CALC_SEQUENCE = [10, 9, 8, 7, 6, 5, 4, 3, 2];
	const sum = applyFormulaAndSumValues(CALC_SEQUENCE, cpf);
	return calcDigitWithMod(sum);
};

const calcSecondDigit = cpf => {
	const CALC_SEQUENCE = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
	const sum = applyFormulaAndSumValues(CALC_SEQUENCE, cpf);
	return calcDigitWithMod(sum);
};

export { calcFirstDigit, calcSecondDigit };
