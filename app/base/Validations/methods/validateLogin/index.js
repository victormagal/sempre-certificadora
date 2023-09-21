import { getErrors } from './error';
import { factoryOutput } from '../../utils';
import { isValidLogin } from './valid';

/**
 * @function
 * @description Valida o login informado
 * @param { String } login Login
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateLogin } from 'ps-validations';
 *
 * const login = 'loginExample';
 * const isValidLogin = validateLogin(login);
 */
const validateLogin = (login, error) => {
	const errors = getErrors(login, error);
	return factoryOutput(errors);
};

export { validateLogin, isValidLogin };
