import { createError, removeCaractheresAndLetters, merge } from '../../utils';
import defaultMessages from './messages';
import { isValid, isValidLength } from './valid';

const getErrors = (phone, customMessages) => {
	const errors = [];

	phone = removeCaractheresAndLetters(phone);
	if (!isValidLength(phone)) {
		errors.push(
			createError(
				'INVALID_LENGTH',
				merge(defaultMessages, customMessages)
			)
		);
	}
	if (!isValid(phone)) {
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
