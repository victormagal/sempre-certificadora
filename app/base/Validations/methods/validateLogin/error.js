import { createError, merge } from '../../utils';
import { isValid, isValidLength } from './valid';
import defaultMessages from './messages';

const getErrors = (login, customMessages) => {
	const errors = [];

	if (!isValid(login)) {
		errors.push(
			createError(
				'INVALID_COMMON',
				merge(defaultMessages, customMessages)
			)
		);
	}
	if (!isValidLength(login)) {
		errors.push(
			createError(
				'INVALID_LENGTH',
				merge(defaultMessages, customMessages)
			)
		);
	}

	return errors;
};

export { getErrors };
