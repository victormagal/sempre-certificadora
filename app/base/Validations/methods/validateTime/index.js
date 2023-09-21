import { getErrors } from './error';
import { factoryOutput } from '../../utils';
import { isValid } from './valid';

/**
 * @function
 * @description Valida a hora
 * @param { String } time Hora
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateTime } from 'ps-validations';
 *
 * const time = '10:50';
 * const isValidTime = validateTime(time);
 */
const validateTime = (time, error) => {
	const errors = getErrors(time, error);
	return factoryOutput(errors);
};

export { validateTime, isValid as isValidTime };
