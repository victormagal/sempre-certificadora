import { createError, merge } from '../../utils';
import { isValid, isValidLength } from './valid';
import defaultMessages from './messages';

const getErrors = (phoneNumber, customMessages) => {
	const errors = [];

	if (!isValid(phoneNumber)) {
		errors.push(
			createError(
				'INVALID_COMMON',
				merge(defaultMessages, customMessages)
			)
		);
	}
	if (!isValidLength(phoneNumber)) {
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
