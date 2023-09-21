import { factoryOutput } from '../../utils';
import { getErrors } from './errors';
import { isValid } from './valid';

/**
 * @function
 * @description Valida o formato da data
 * @param { String } date  data
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateCNPJ } from 'ps-validations';
 *
 * const date = '13/11/1983';
 * const isValidDate = validateDate(date);
 */
const validateDate = (date, error) => {
	const errors = getErrors(date, error);
	return factoryOutput(errors);
};

export { validateDate, isValid as isValidDate };
