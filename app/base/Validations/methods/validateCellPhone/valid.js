import { removeCaractheresAndLetters } from '../../utils';

const isValid = phone => {
	return /^[9][\d]{8}$/.test(removeCaractheresAndLetters(phone));
};

const isValidLength = phone => {
	return removeCaractheresAndLetters(phone).length === 9;
};

const isValidCellPhone = phone => isValidLength(phone) && isValid(phone);

export { isValidCellPhone, isValid, isValidLength };
