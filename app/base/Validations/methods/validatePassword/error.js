import { createError, merge } from '../../utils';
import { isValid } from './valid';
import defaultMessages from './messages';

const getErrors = (password, customMessages) => {
	const errors = [];

	if (!isValid(password)) {
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
