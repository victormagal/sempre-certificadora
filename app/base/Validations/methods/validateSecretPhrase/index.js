import { getErrors } from './error';
import { factoryOutput } from '../../utils';
import { isValidLength } from './valid';

/**
 * @function
 * @description Valida a frase secreta
 * @param { String } phrase Frase secreta
 * @param { object } [error] Lista personalizada de erros
 * @returns { object } Retorna um objeto com valor se passou no teste ou não
 * @example
 *
 * import { validateSecretPhrase } from 'ps-validations';
 *
 * const phrase = 'Frase secreta da senha';
 * const isValidSecretPhrase = validateSecretPhrase(phrase);
 */
const validateSecretPhrase = (phrase, error) => {
	const errors = getErrors(phrase, error);
	return factoryOutput(errors);
};

export { validateSecretPhrase, isValidLength as isValidSecretPhrase };
