import { createError, merge } from '../../utils';
import { isValid } from './valid';
import defaultMessage from './messages';

const getErrors = (fullname, customMessages) => {
	const errors = [];

	if (!isValid(fullname)) {
		errors.push(
			createError('INVALID_COMMON', merge(defaultMessage, customMessages))
		);
	}

	return errors;
};

export { getErrors };
