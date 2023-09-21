import { getErrors } from './error';
import { factoryOutput } from '../../utils';
import { isValid } from './valid';

/**
 * @function
 * @description Valida a senha
 * @param { String } password senha
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validatePassword } from 'ps-validations';
 *
 * const password = 'passwordExample';
 * const isValidPassword = validatePassword(password);
 */
const validatePassword = (password, error) => {
	const errors = getErrors(password, error);
	return factoryOutput(errors);
};

export { validatePassword, isValid as isValidPassword };
