import { createError, merge } from '../../utils';
import { isValidLength } from './valid';
import defaultMessages from './messages';

const getErrors = (phrase, customMessages) => {
	const errors = [];

	if (!isValidLength(phrase)) {
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
