import { factoryOutput } from '../../utils';
import { getErrors } from './errors';
import { isEmpty } from './valid';

/**
 * @function
 * @description Valida se o objeto do tipo array não está vazio.
 * @category Array
 * @param {array} array  Array para ser analisado
 * @param {object} [error] Lista personalizada de erros
 * @returns {object} Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateArrayNotEmpty } from 'ps-validations';
 *
 * const items = [1, 2, 3];
 * const isValidArray = validateArrayNotEmpty(items);
 */
const validateArrayNotEmpty = (array, error) => {
	const errors = getErrors(array, error);
	return factoryOutput(errors);
};

export { validateArrayNotEmpty, isEmpty as isArrayNotEmpty };
