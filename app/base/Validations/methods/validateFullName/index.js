import { getErrors } from './error';
import { factoryOutput } from '../../utils';
import { isValid } from './valid';

/**
 * @function
 * @description Valida o formato do nome completo
 * @param { String } fullname Nome completo
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateFullName } from 'ps-validations';
 *
 * const fullname = 'João Teste da Silva';
 * const isValidFullName = validateFullName(fullname);
 */
const validateFullName = (fullname, error) => {
	const errors = getErrors(fullname, error);
	return factoryOutput(errors);
};

export { validateFullName, isValid as isValidFullName };
