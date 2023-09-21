const isValid = ddd => {
	return /^[1-9]{2}$/.test(ddd);
};

const isValidLength = ddd => {
	return ddd.length === 2;
};

const isValidDDD = ddd => isValidLength(ddd) && isValid(ddd);

export { isValidDDD, isValid, isValidLength };
