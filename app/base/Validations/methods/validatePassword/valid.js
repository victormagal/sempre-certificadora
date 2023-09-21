import { MINIMUM_NUMBER_OF_CRITERIALS, CRITERIALS_REGEX } from './enum';

const sumOfMatchedCriterials = password => {
	return CRITERIALS_REGEX.filter(criterial => password.match(criterial))
		.length;
};

const isValid = password => {
	return sumOfMatchedCriterials(password) > MINIMUM_NUMBER_OF_CRITERIALS;
};

export { isValid };
