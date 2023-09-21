import { createError, merge } from '../../utils';
import { isValid, isValidLength } from './valid';
import defaultMessages from './messages';

const getErrors = (ddd, customMessages) => {
	const errors = [];

	if (!isValid(ddd)) {
		errors.push(
			createError(
				'INVALID_COMMON',
				merge(defaultMessages, customMessages)
			)
		);
	}
	if (!isValidLength(ddd)) {
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
