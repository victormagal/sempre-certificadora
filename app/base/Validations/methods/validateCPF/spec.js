import { calcFirstDigit, calcSecondDigit } from './utils';
import { getErrors } from './errors';
import { validateCPF } from './';
import defaultMessages from './messages';
import {
	isValidLength,
	isDigitsEqual,
	isCalculatedDigitMatches,
	isValidCPF
} from './valid';

describe('Testing validateCPF', () => {
	describe('Testing index file', () => {
		describe('Testing validateCPF function', () => {
			it('Should be not valid', () => {
				const validCPF = validateCPF('121.996.840-4');
				expect(validCPF.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validCPF = validateCPF('121.996.840-40');
				expect(validCPF.valid).toBe(true);
			});
			it('Should return object with default error', () => {
				const validCPF = validateCPF('121.996.840-4');
				expect(validCPF.errors).toEqual([
					{
						key: 'INVALID_LENGTH',
						message: 'A quantidade de digitos do CPF está invalido'
					},
					{
						key: 'INVALID_COMMON',
						message: 'Formato do CPF está inválido'
					}
				]);
			});
			it('Should return object with personalized error', () => {
				const validCPF = validateCPF('121.996.840-4', {
					INVALID_COMMON: 'Erro personalizado',
					INVALID_LENGTH:
						'O número de caracteres inseridos é invalido'
				});
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message: 'O número de caracteres inseridos é invalido'
					},
					{
						key: 'INVALID_COMMON',
						message: 'Erro personalizado'
					}
				];
				expect(validCPF.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('121.996.840-40')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_LENGTH',
						message: 'A quantidade de digitos do CPF está invalido'
					},
					{
						key: 'INVALID_COMMON',
						message: 'Formato do CPF está inválido'
					}
				];
				expect(getErrors('121.996.840-4')).toEqual(errors);
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
					getErrors('121.996.840-4', {
						INVALID_COMMON: 'Mensagem personalizada',
						INVALID_LENGTH: 'Quantidade de digitos inválida'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing utils file', () => {
		it('Testing calcFirstDigit function', () => {
			expect(calcFirstDigit('44956643012')).toBe(1);
			expect(calcFirstDigit('12199684040')).toBe(4);
		});
		it('Testing calcSecondDigit function', () => {
			expect(calcSecondDigit('44956643012')).toBe(2);
			expect(calcSecondDigit('12199684040')).toBe(0);
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValidLength function', () => {
			it('Should return true', () => {
				expect(isValidLength('44956643012')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValidLength('4495664301')).toBe(false);
			});
		});
		describe('Testing isDigitsEqual function', () => {
			it('Should return true', () => {
				expect(isDigitsEqual('11111111111')).toBe(true);
			});
			it('Should return false', () => {
				expect(isDigitsEqual('4495664301')).toBe(false);
			});
		});
		describe('Testing isCalculatedDigitMatches function', () => {
			it('Should return true', () => {
				expect(isCalculatedDigitMatches('44956643012')).toBe(true);
			});
			it('Should return false', () => {
				expect(isCalculatedDigitMatches('44956643015')).toBe(false);
			});
		});

		describe('Testing isValidCPF function', () => {
			const tests = [
				{
					cpf: '11144477735',
					expect: true
				},
				{
					cpf: '1219968404',
					expect: false
				},
				{
					cpf: '11111111111',
					expect: false
				},
				{
					cpf: '44956643015',
					expect: false
				}
			];

			tests.forEach(item => {
				it(`should return ${item.expect} when cpf is ${item.cpf}`, () => {
					expect(isValidCPF(item.cpf)).toBe(item.expect);
				});
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do CPF está inválido',
				INVALID_LENGTH: 'A quantidade de digitos do CPF está invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
