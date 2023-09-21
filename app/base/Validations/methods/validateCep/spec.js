import { getErrors } from './errors';
import { isValid, isValidLength, isValidCep } from './valid';
import { validateCep } from './';
import defaultMessages from './messages';

describe('Testing validateCep', () => {
	describe('Testing index file', () => {
		describe('Testing validateCep function', () => {
			it('Should be not valid', () => {
				const validCep = validateCep('999-9999');
				expect(validCep.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validCep = validateCep('99999-999');
				expect(validCep.valid).toBe(true);
			});
			it('Should return object with default error', () => {
				const validCep = validateCep('99-9999');
				expect(validCep.errors).toEqual([
					{
						key: 'INVALID_COMMON',
						message: 'Formato do cep inválido'
					},
					{
						key: 'INVALID_LENGTH',
						message: 'O número de caracteres inseridos é invalido'
					}
				]);
			});
			it('Should return object with personalized error', () => {
				const configError = {
					INVALID_COMMON: 'Erro personalizado'
				};
				const validCep = validateCep('99-999', configError);
				expect(validCep).toEqual({
					valid: false,
					errors: [
						{
							key: 'INVALID_COMMON',
							message: 'Erro personalizado'
						},
						{
							key: 'INVALID_LENGTH',
							message:
								'O número de caracteres inseridos é invalido'
						}
					]
				});
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('05756-000')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do cep inválido'
					},
					{
						key: 'INVALID_LENGTH',
						message: 'O número de caracteres inseridos é invalido'
					}
				];
				expect(getErrors('057569-000', {})).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					},
					{
						key: 'INVALID_LENGTH',
						message: 'O número de caracteres inseridos é invalido'
					}
				];
				expect(
					getErrors('057569-000', {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('09999-999')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('09999-99')).toBe(false);
			});
		});
		describe('Testing isValidLength', () => {
			it('Should return true', () => {
				expect(isValidLength('09999-999')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValidLength('99-999')).toBe(false);
			});
		});
		describe('Testing isValidCep function', () => {
			it('Should return true', () => {
				const cep = '00000000';
				expect(isValidCep(cep)).toBe(true);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do cep inválido',
				INVALID_LENGTH: 'O número de caracteres inseridos é invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
