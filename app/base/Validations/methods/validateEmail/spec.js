import { validateEmail } from './';
import { getErrors } from './error';
import { isValid } from './valid';
import defaultMessages from './messages';

describe('Testing validateEmail', () => {
	describe('Testing index file', () => {
		describe('Testing validateEmail function', () => {
			it('Should be not valid', () => {
				const validEmail = validateEmail('teste@pagseguro');
				expect(validEmail.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validEmail = validateEmail('teste@pagseguro.com.br');
				expect(validEmail.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validEmail = validateEmail('teste@pagseguro');
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do email está inválido'
					}
				];
				expect(validEmail.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Erro personalizado'
					}
				];
				const validEmail = validateEmail('19/13/2018', {
					INVALID_COMMON: 'Erro personalizado'
				});

				expect(validEmail.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('teste@pagseguro.com.br')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do email está inválido'
					}
				];
				expect(getErrors('teste@pagseguro')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					}
				];
				expect(
					getErrors('teste@pagseguro', {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('teste@pagseguro.com.br')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('teste@pagseguro')).toBe(false);
				expect(isValid('testepagseguro.com')).toBe(false);
				expect(isValid('teste@i')).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do email está inválido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
