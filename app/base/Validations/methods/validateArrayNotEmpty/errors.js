import { createError, merge } from '../../utils';
import defaultMessages from './messages';
import { isEmpty } from './valid';

const getErrors = (array, customMessages) => {
	const errors = [];
	if (isEmpty(array)) {
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
