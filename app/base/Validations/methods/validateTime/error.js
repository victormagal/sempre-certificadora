import { createError, merge } from '../../utils';
import { isValid } from './valid';
import defaultMessages from './messages';

const getErrors = (time, customMessages) => {
	const errors = [];

	if (!isValid(time)) {
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
