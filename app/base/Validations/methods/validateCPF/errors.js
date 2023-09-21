import { createError, removeCaractheresAndLetters, merge } from '../../utils';
import defaultMessages from './messages';
import {
	isValidLength,
	isDigitsEqual,
	isCalculatedDigitMatches
} from './valid';

const getErrors = (cpf, customMessages) => {
	const errors = [];

	const cpfJustNumber = removeCaractheresAndLetters(cpf);
	if (!isValidLength(cpfJustNumber)) {
		errors.push(
			createError(
				'INVALID_LENGTH',
				merge(defaultMessages, customMessages)
			)
		);
	}

	if (
		isDigitsEqual(cpfJustNumber) ||
		!isCalculatedDigitMatches(cpfJustNumber)
	) {
		errors.push(
			createError(
				'INVALID_COMMON',
				merge(defaultMessages, customMessages)
			)
		);
	}

	return errors;
};

export { getErrors };
