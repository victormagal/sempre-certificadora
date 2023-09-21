const isValidLength = cep => {
	return [8, 9].includes(cep.length);
};

const isValid = cep => {
	return /^[0-9]{5}-?[0-9]{3}$/.test(cep);
};

const isValidCep = cep => isValid(cep) && isValidLength(cep);

export { isValidCep, isValid, isValidLength };
