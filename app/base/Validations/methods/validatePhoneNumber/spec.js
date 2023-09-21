import { getErrors } from './errors';
import { isValid, isValidLength, isValidPhoneNumber } from './valid';
import { validatePhoneNumber } from './';
import defaultMessages from './messages';

describe('Testing validatePhoneNumber', () => {
	describe('Testing index file', () => {
		describe('Testing validatePhoneNumber function', () => {
			it('Should be not valid', () => {
				const validPhoneNumber = validatePhoneNumber('99999-9999');
				expect(validPhoneNumber.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validPhoneNumber = validatePhoneNumber('9999-9999');
				expect(validPhoneNumber.valid).toBe(true);
			});
			it('Should return object with default error', () => {
				const validPhoneNumber = validatePhoneNumber('099');
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do telefone está inválido'
					},
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado do telefone está invalido'
					}
				];
				expect(validPhoneNumber.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Erro personalizado'
					},
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado do telefone está invalido'
					}
				];
				const validPhoneNumber = validatePhoneNumber('19999-9999', {
					INVALID_COMMON: 'Erro personalizado'
				});
				expect(validPhoneNumber.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('9876-5432')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do telefone está inválido'
					},
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado do telefone está invalido'
					}
				];
				expect(getErrors('19876-5432')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					},
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado do telefone está invalido'
					}
				];

				expect(
					getErrors('19876-5432', {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('9999-9999')).toBe(true);
				expect(isValid('99999999')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('0999-9999')).toBe(false);
				expect(isValid('1999-9999')).toBe(false);
			});
		});
		describe('Testing isValidLength', () => {
			it('Should return true', () => {
				expect(isValidLength('9999-9999')).toBe(true);
				expect(isValidLength('99999999')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValidLength('99999-9999')).toBe(false);
				expect(isValidLength('999-9999')).toBe(false);
				expect(isValidLength('9999999')).toBe(false);
			});
		});
		describe('Testing isValidPhoneNumber function', () => {
			it('Should return false', () => {
				const phone = '00000000';
				expect(isValidPhoneNumber(phone)).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do telefone está inválido',
				INVALID_LENGTH:
					'A quantidade de digitos informado do telefone está invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
