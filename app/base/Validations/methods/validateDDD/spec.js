import { getErrors } from './errors';
import { isValidLength, isValid, isValidDDD } from './valid';
import defaultMessages from './messages';
import { validateDDD } from './';

describe('Testing validateDDD', () => {
	describe('Testing index file', () => {
		describe('Testing validateDDD function', () => {
			it('Should be not valid', () => {
				const validDDD = validateDDD('1');
				expect(validDDD.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validDDD = validateDDD('11');
				expect(validDDD.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validDDD = validateDDD('1');
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do DDD está inválido'
					},
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado no DDD está invalido'
					}
				];
				expect(validDDD.errors).toEqual(errors);
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
							'A quantidade de digitos informado no DDD está invalido'
					}
				];
				const validDDD = validateDDD('19/13/2018', {
					INVALID_COMMON: 'Erro personalizado'
				});

				expect(validDDD.errors).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValidLength function', () => {
			it('Should return true', () => {
				expect(isValidLength('11')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValidLength('1')).toBe(false);
			});
		});
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('11')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('1')).toBe(false);
			});
		});
		describe('Testing isValidDDD function', () => {
			it('Should return false', () => {
				const ddd = '00';
				expect(isValidDDD(ddd)).toBe(false);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('11')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do DDD está inválido'
					},
					{
						key: 'INVALID_LENGTH',
						message:
							'A quantidade de digitos informado no DDD está invalido'
					}
				];
				expect(getErrors('1')).toEqual(errors);
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
							'A quantidade de digitos informado no DDD está invalido'
					}
				];
				expect(
					getErrors('1', {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do DDD está inválido',
				INVALID_LENGTH:
					'A quantidade de digitos informado no DDD está invalido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
