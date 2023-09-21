import { validateLogin, isValidLogin } from './';
import { getErrors } from './error';
import { isValid } from './valid';
import defaultMessages from './messages';

describe('Testing validateLogin', () => {
	describe('Testing index file', () => {
		describe('Testing validateLogin function', () => {
			it('Should be not valid', () => {
				const validLogin = validateLogin('@&&*');
				expect(validLogin.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validLogin = validateLogin('login_example');
				expect(validLogin.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validLogin = validateLogin('');
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do login está inválido'
					},
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado no Login está invalido'
					}
				];
				expect(validLogin.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Login inválido'
					},
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado no Login está invalido'
					}
				];
				const validLogin = validateLogin('', {
					INVALID_COMMON: 'Login inválido'
				});

				expect(validLogin.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('login_example')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do login está inválido'
					}
				];
				expect(getErrors('login_example(')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					}
				];
				expect(
					getErrors('João', {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('login_example')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('login_example)')).toBe(false);
				expect(isValid('')).toBe(false);
			});
			describe('Testing isValidLogin function', () => {
				it('Should return true', () => {
					const login = '#';
					expect(isValidLogin(login)).toBe(true);
				});
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do login está inválido',
				INVALID_LENGTH:
					'A quantidade de digitos informado no Login está invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
