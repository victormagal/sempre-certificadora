import { factoryOutput } from '../../utils';
import { getErrors } from './errors';
import { isValidCellPhone } from './valid';

/**
 * @function
 * @description Valida o formato de telefone celular
 * @param { String } phone  Número do telefone celular
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateCellPhone } from 'ps-validations';
 *
 * const phone = '96789-3241';
 * const isValidPhone = validateCellPhone(phone);
 */
const validateCellPhone = (phone, error) => {
	const errors = getErrors(phone, error);
	return factoryOutput(errors);
};

export { validateCellPhone, isValidCellPhone };
