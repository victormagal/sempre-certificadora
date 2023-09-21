import { getErrors } from './errors';
import { factoryOutput } from '../../utils';
import { isValid } from './valid';

/**
 * @function
 * @description Valida o numero de telefone
 * @param { String } phoneNumber Número do telefone
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validatePhoneNumber } from 'ps-validations';
 *
 * const phoneNumber = '3210-4321';
 * const isValidPhoneNumber = validatePhoneNumber(phoneNumber);
 */
const validatePhoneNumber = (phoneNumber, error) => {
	const errors = getErrors(phoneNumber, error);
	return factoryOutput(errors);
};

export { validatePhoneNumber, isValid as isValidPhoneNumber };
