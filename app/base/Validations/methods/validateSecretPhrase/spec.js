import { validateSecretPhrase } from './';
import { getErrors } from './error';
import { isValidLength } from './valid';
import defaultMessages from './messages';

describe('Testing validateSecretPhrase', () => {
	describe('Testing index file', () => {
		describe('Testing validateSecretPhrase function', () => {
			it('Should be not valid', () => {
				const validSecretPhrase = validateSecretPhrase('a');
				expect(validSecretPhrase.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validSecretPhrase = validateSecretPhrase('Something');
				expect(validSecretPhrase.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validSecretPhrase = validateSecretPhrase('a');
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado de sua frase secreta está invalido'
					}
				];
				expect(validSecretPhrase.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message: 'Frase secreta inválida'
					}
				];
				const validSecretPhrase = validateSecretPhrase('a', {
					INVALID_LENGTH: 'Frase secreta inválida'
				});

				expect(validSecretPhrase.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('Frase secreta ok')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado de sua frase secreta está invalido'
					}
				];
				expect(getErrors('a')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message: 'Frase secreta alterada'
					}
				];
				expect(
					getErrors('a', {
						INVALID_LENGTH: 'Frase secreta alterada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValidSecretPhrase function', () => {
			it('Should return true', () => {
				expect(isValidLength('SomethingItsOk123')).toBe(true);
			});
			it('Should return false if number is less than 2', () => {
				expect(isValidLength('1')).toBe(false);
			});
			it('Should return false if number is greather then 80', () => {
				expect(isValidLength('a'.repeat(81))).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_LENGTH:
					'A quantidade de digitos informado de sua frase secreta está invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
