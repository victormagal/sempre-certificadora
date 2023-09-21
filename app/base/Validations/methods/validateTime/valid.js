const isValid = time => {
	return /^(?:[01]\d|2[0123]):(?:[012345]\d)$/.test(time);
};

export { isValid };
