import { getErrors } from './errors';
import { isValid, isValidLength, isValidCellPhone } from './valid';
import { validateCellPhone } from './';
import defaultMessages from './messages';

describe('Testing validateCellPhone file', () => {
	describe('Testing index file', () => {
		describe('Testing validateCellPhone function', () => {
			it('Should be not valid', () => {
				const validCellPhone = validateCellPhone('9999-9999');
				expect(validCellPhone.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validCellPhone = validateCellPhone('99999-9999');
				expect(validCellPhone.valid).toBe(true);
			});
			it('Should return object with default error', () => {
				const validCellPhone = validateCellPhone('999-9999');
				expect(validCellPhone.errors).toEqual([
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos inseridos está invalido'
					},
					{
						key: 'INVALID_COMMON',
						message: 'Formato de celular inválido'
					}
				]);
			});
			it('Should return object with personalized error', () => {
				const configError = {
					INVALID_COMMON: 'Erro personalizado'
				};
				const validCellPhone = validateCellPhone(
					'999-99999',
					configError
				);
				expect(validCellPhone).toEqual({
					valid: false,
					errors: [
						{
							key: 'INVALID_LENGTH',
							message:
								'A quantidade de digitos inseridos está invalido'
						},
						{
							key: 'INVALID_COMMON',
							message: 'Erro personalizado'
						}
					]
				});
			});
		});
	});
	describe('Testing getErrors function', () => {
		it('Should return no error list', () => {
			expect(getErrors('93333-3333', {})).toEqual([]);
		});
		it('Should return error list default', () => {
			const errors = [
				{
					key: 'INVALID_LENGTH',
					message: 'A quantidade de digitos inseridos está invalido'
				},
				{
					key: 'INVALID_COMMON',
					message: 'Formato de celular inválido'
				}
			];
			expect(getErrors('3333-3333', {})).toEqual(errors);
		});
		it('Should return error list personalized', () => {
			const errors = [
				{
					key: 'INVALID_LENGTH',
					message: 'A quantidade de digitos inseridos está invalido'
				},
				{
					key: 'INVALID_COMMON',
					message: 'Mensagem teste'
				}
			];
			expect(
				getErrors('3333-3333', {
					INVALID_COMMON: 'Mensagem teste'
				})
			).toEqual(errors);
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				const validCellPhone = isValid('9-9999-9999');
				expect(validCellPhone).toBe(true);
			});
			it('Should return false', () => {
				const validCellPhone = isValid('9999-9999');
				expect(validCellPhone).toBe(false);
			});
		});
		describe('Testing isValidLength function', () => {
			it('Should return true', () => {
				const validLength = isValidLength('9-9999-9999');
				expect(validLength).toBe(true);
			});
			it('Should return false', () => {
				const validLength = isValidLength('9999-9999');
				expect(validLength).toBe(false);
			});
		});
		describe('Testing isValidCellPhone function', () => {
			it('Should return false', () => {
				const phone = '000000000';
				expect(isValidCellPhone(phone)).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato de celular inválido',
				INVALID_LENGTH:
					'A quantidade de digitos inseridos está invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
