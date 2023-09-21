import { factoryOutput } from '../../utils';
import { getErrors } from './errors';
import { isValidCep } from './valid';

/**
 * @function
 * @description Valida o formato do cep
 * @param { String } cep  Número do CEP
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateCEP } from 'ps-validations';
 *
 * const cep = '01234-000';
 * const isValidCep = validateCEP(cep);
 */
const validateCep = (cep, error) => {
	const errors = getErrors(cep, error);
	return factoryOutput(errors);
};

export { validateCep, isValidCep };
