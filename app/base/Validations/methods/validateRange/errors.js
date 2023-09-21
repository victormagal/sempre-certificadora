import { createError, merge } from '../../utils';
import { isValid, isValidType } from './valid';
import defaultMessages from './messages';

const getErrors = (number, min, max, customMessages) => {
	const errors = [];

	if (!isValid(number, min, max)) {
		errors.push(
			createError(
				'INVALID_COMMON',
				merge(defaultMessages, customMessages)
			)
		);
	}
	if (!isValidType(number, min, max)) {
		errors.push(
			createError('INVALID_TYPE', merge(defaultMessages, customMessages))
		);
	}

	return errors;
};

export { getErrors };
