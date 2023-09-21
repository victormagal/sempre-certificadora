const isValid = fullname => {
	return /^\s?\S+(\s\S+)+\s?$/.test(fullname);
};

export { isValid };
