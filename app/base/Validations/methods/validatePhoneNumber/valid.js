import { removeCaractheresAndLetters } from '../../utils';

const isValid = phone => {
	return !['0', '1'].includes(removeCaractheresAndLetters(phone).charAt(0));
};

const isValidLength = phone => {
	return removeCaractheresAndLetters(phone).length === 8;
};

const isValidPhoneNumber = phone => isValidLength(phone) && isValid(phone);

export { isValidPhoneNumber, isValid, isValidLength };
