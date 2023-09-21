const isValidLength = phrase => {
	return phrase.length >= 2 && phrase.length <= 80;
};

export { isValidLength };
