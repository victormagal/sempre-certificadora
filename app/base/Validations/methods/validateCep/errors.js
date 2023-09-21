import { createError, merge } from '../../utils';
import defaultMessages from './messages';
import { isValid, isValidLength } from './valid';

const getErrors = (cep, customMessages) => {
	const errors = [];

	if (!isValid(cep)) {
		errors.push(
			createError(
				'INVALID_COMMON',
				merge(defaultMessages, customMessages)
			)
		);
	}
	if (!isValidLength(cep)) {
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
