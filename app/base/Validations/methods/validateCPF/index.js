import { factoryOutput } from '../../utils';
import { getErrors } from './errors';
import { isValidCPF } from './valid';

/**
 * @function
 * @description Valida o formato do CPF
 * @param { String } cpf  Número do CPF
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateCNPJ } from 'ps-validations';
 *
 * const cpf = '123.456.789-00';
 * const isValidCPF = validateCPF(cpf);
 */
const validateCPF = (cpf, error) => {
	const errors = getErrors(cpf, error);
	return factoryOutput(errors);
};

export { validateCPF, isValidCPF };
