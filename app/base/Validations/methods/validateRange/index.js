import { getErrors } from './errors';
import { factoryOutput } from '../../utils';
import { isValidRange } from './valid';

/**
 * @function
 * @description Valida se o número informado encontra-se no intervalo definido
 * @param { Number } number Número ser analisado
 * @param { Number } min O valor mínimo a ser aceito no parametro number
 * @param { Number } max O valor maximo a ser aceito no parametro number
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateRange } from 'ps-validations';
 *
 * const number = 6;
 * const min = 3;
 * const max = 8;
 * const isRange = validateRange(number, min, max);
 */
const validateRange = (number, min, max, error) => {
	const errors = getErrors(number, min, max, error);
	return factoryOutput(errors);
};

export { validateRange, isValidRange };
