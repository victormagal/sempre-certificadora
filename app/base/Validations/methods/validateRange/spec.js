import { getErrors } from './errors';
import { isValid, isValidType, isValidRange } from './valid';
import { validateRange } from './';
import defaultMessages from './messages';

describe('Testing validateRange', () => {
	describe('Testing index file', () => {
		describe('Testing validateRange function', () => {
			it('Should be not valid', () => {
				const validRange = validateRange(5, 1, 3);
				expect(validRange.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validRange = validateRange(5, 1, 6);
				expect(validRange.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validRange = validateRange(6, 1, 3);
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'O intervalo informado está inválido'
					}
				];
				expect(validRange.errors).toEqual(errors);
			});
			it('Should return object with default error with INVALID_TYPE parameter', () => {
				const validRange = validateRange('6', '1', 3);
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'O intervalo informado está inválido'
					},
					{
						key: 'INVALID_TYPE',
						message: 'O tipo de dado informado está invalido'
					}
				];
				expect(validRange.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Erro personalizado'
					}
				];
				const validRange = validateRange(6, 1, 5, {
					INVALID_COMMON: 'Erro personalizado'
				});

				expect(validRange.errors).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValidLength function', () => {
			it('Should return true', () => {
				expect(isValidType(1, 1, 1)).toBe(true);
			});
			it('Should return false', () => {
				expect(isValidType('1', '5', '10')).toBe(false);
				expect(isValidType(1, '5', '10')).toBe(false);
				expect(isValidType(1, 5, '10')).toBe(false);
			});
		});
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid(2, 1, 2)).toBe(true);
				expect(isValid(6, 2, 6)).toBe(true);
				expect(isValid(5, 5, 5)).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid(2, 1, 1)).toBe(false);
				expect(isValid(3, 1, 2)).toBe(false);
				expect(isValid(10, 5, 8)).toBe(false);
			});
		});
		describe('Testing isValidRange function', () => {
			it('Should return true', () => {
				const range = 4;
				const min = 3;
				const max = 10;
				expect(isValidRange(range, min, max)).toBe(true);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors(2, 1, 3)).toEqual([]);
			});
			it('Should return default error list with INVALID_TYPE key', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'O intervalo informado está inválido'
					},
					{
						key: 'INVALID_TYPE',
						message: 'O tipo de dado informado está invalido'
					}
				];
				expect(getErrors('2', 3, 4)).toEqual(errors);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'O intervalo informado está inválido'
					}
				];
				expect(getErrors(2, 3, 4)).toEqual(errors);
			});
			it('Should return personalized error list with INVALID_TYPE parameter', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					},
					{
						key: 'INVALID_TYPE',
						message: 'O tipo de dado informado está invalido'
					}
				];
				expect(
					getErrors('1', 2, 3, {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					}
				];
				expect(
					getErrors(1, 2, 3, {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'O intervalo informado está inválido',
				INVALID_TYPE: 'O tipo de dado informado está invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
