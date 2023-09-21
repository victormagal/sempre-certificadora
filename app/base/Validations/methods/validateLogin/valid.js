const isValid = login =>
	/* eslint-disable-next-line */
	/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$|^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*$/i.test(
		login
	);

const isValidLength = login => login.length > 0;
const isValidLogin = login => isValidLength(login) && isValid(login);

export { isValidLogin, isValid, isValidLength };
