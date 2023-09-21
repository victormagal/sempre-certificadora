import { getErrors } from './error';
import { factoryOutput } from '../../utils';
import { isValid } from './valid';

/**
 * @function
 * @description Valida a URL de um website
 * @param { String } website URL do website
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateWebsite } from 'ps-validations';
 *
 * const website = 'http://www.wesite.example.com.br';
 * const isValidWebsite = validateWebsite(website);
 */
const validateWebsite = (website, error) => {
	const errors = getErrors(website, error);
	return factoryOutput(errors);
};

export { validateWebsite, isValid as isValidWebsite };
