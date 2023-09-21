import { isValidLength, isDigitsEqual, isValidCNPJ } from './valid';
import { calcFirstDigit, calcSecondDigit } from './utils';
import { getErrors } from './errors';
import { validateCNPJ } from './';
import defaultMessages from './messages';

describe('Testing validateCNPJ file', () => {
	describe('Testing index file', () => {
		describe('Testing validateCNPJ function', () => {
			it('Should be not valid', () => {
				const validCNPJ = validateCNPJ('08.606.541/0001-7');
				expect(validCNPJ.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validCNPJ = validateCNPJ('08.606.541/0001-70');
				expect(validCNPJ.valid).toBe(true);
			});
			it('Should return object with default error', () => {
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message: 'A quantidade de digitos do CNPJ está invalido'
					},
					{
						key: 'INVALID_COMMON',
						message: 'Formato do CNPJ está inválido'
					}
				];
				const validCNPJ = validateCNPJ('08.606.541/0001-7');
				expect(validCNPJ.errors).toEqual(errors);
			});

			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message: 'A quantidade de digitos do CNPJ está invalido'
					},
					{
						key: 'INVALID_COMMON',
						message: 'Erro personalizado'
					}
				];
				const validCNPJ = validateCNPJ('08.606.541/0001-7', {
					INVALID_COMMON: 'Erro personalizado'
				});
				expect(validCNPJ.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('08.606.541/0001-70')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message: 'A quantidade de digitos do CNPJ está invalido'
					},
					{
						key: 'INVALID_COMMON',
						message: 'Formato do CNPJ está inválido'
					}
				];
				expect(getErrors('08.60')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message: 'Quantidade de digitos inválida'
					},
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					}
				];
				expect(
					getErrors('057569-000', {
						INVALID_COMMON: 'Mensagem personalizada',
						INVALID_LENGTH: 'Quantidade de digitos inválida'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing utils file', () => {
		describe('Testing calcFirstDigit function', () => {
			it('Should return value 0', () => {
				expect(calcFirstDigit('58012859000109')).toBe(0);
			});
			it('Should return value 5', () => {
				expect(calcFirstDigit('64192324000151')).toBe(5);
			});
		});
		describe('Testing calcSecondDigit function', () => {
			it('Should return value 0', () => {
				expect(calcSecondDigit('58012859000109')).toBe(9);
			});
			it('Should return value 5', () => {
				expect(calcSecondDigit('64192324000151')).toBe(1);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValidLength function', () => {
			it('Should return true', () => {
				expect(isValidLength('94055321000137')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValidLength('4055321000137')).toBe(false);
			});
		});
		describe('Testing isDigitsEqual', () => {
			it('Should return true', () => {
				expect(isDigitsEqual('11111111111111')).toBe(true);
			});
			it('Should return false', () => {
				expect(isDigitsEqual('01111111111111')).toBe(false);
			});
		});
		describe('Testing isValidCNPJ function', () => {
			it('Should return true', () => {
				const cnpj = '00000000000000';
				expect(isValidCNPJ(cnpj)).toBe(true);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do CNPJ está inválido',
				INVALID_LENGTH: 'A quantidade de digitos do CNPJ está invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
