import { validatePassword } from './';
import { getErrors } from './error';
import { isValid } from './valid';
import defaultMessages from './messages';

describe('Testing validatePassword', () => {
	describe('Testing index file', () => {
		describe('Testing validatePassword function', () => {
			it('Should be not valid', () => {
				const validPassword = validatePassword('-');
				expect(validPassword.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validPassword = validatePassword('Something4');
				expect(validPassword.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validPassword = validatePassword('ABC');
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato da senha está inválido'
					}
				];
				expect(validPassword.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Senha inválida'
					}
				];
				const validPassword = validatePassword('ABC', {
					INVALID_COMMON: 'Senha inválida'
				});

				expect(validPassword.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('SenhaCorreta123456')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato da senha está inválido'
					}
				];
				expect(getErrors('JOAO')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					}
				];
				expect(
					getErrors('JOAO', {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('SomethingItsOk123')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('')).toBe(false);
				expect(isValid('minusculo')).toBe(false);
				expect(isValid('maiusculo')).toBe(false);
				expect(isValid('123')).toBe(false);
				expect(isValid('**&)')).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato da senha está inválido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
