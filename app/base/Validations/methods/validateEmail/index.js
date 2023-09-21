import { getErrors } from './error';
import { factoryOutput } from '../../utils';
import { isValid } from './valid';

/**
 * @function
 * @description Valida o formato do email
 * @param { String } email email
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateEmail } from 'ps-validations';
 *
 * const email = 'name.email@domain.com.br';
 * const isValidEmail = validateEmail(email);
 */
const validateEmail = (email, error) => {
	const errors = getErrors(email, error);
	return factoryOutput(errors);
};

export { validateEmail, isValid as isValidEmail };
