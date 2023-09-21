import { factoryOutput } from '../../utils';
import { getErrors } from './errors';
import { isValidCNPJ } from './valid';

/**
 * @function
 * @description Valida o formato do CNPJ
 * @param { String } cnpj  Número do CNPJ
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateCNPJ } from 'ps-validations';
 *
 * const cnpj = '01.724.189/0001-28';
 * const isValidCNPJ = validateCNPJ(cnpj);
 */
const validateCNPJ = (cnpj, error) => {
	const errors = getErrors(cnpj, error);
	return factoryOutput(errors);
};

export { validateCNPJ, isValidCNPJ };
