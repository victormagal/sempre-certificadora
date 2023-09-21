import { getErrors } from './errors';
import { factoryOutput } from '../../utils';

/**
 * @function
 * @description Valida o formato do DDD
 * @param { String } ddd  Número do DDD
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateDDD } from 'ps-validations';
 *
 * const ddd = '11';
 * const isValidDDD = validateDDD(ddd);
 */
const validateDDD = (ddd, error) => {
	const errors = getErrors(ddd, error);
	return factoryOutput(errors);
};

export { validateDDD };
