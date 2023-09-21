import defaultMessages from './messages';
import { createError, merge } from '../../utils';
import { isValid } from './valid';

const getErrors = (email, customMessages) => {
	const errors = [];

	if (!isValid(email)) {
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
