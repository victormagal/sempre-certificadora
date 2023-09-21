import { validateFullName } from './';
import { getErrors } from './error';
import { isValid } from './valid';
import defaultMessages from './messages';

describe('Testing validateFullName', () => {
	describe('Testing index file', () => {
		describe('Testing validateFullName function', () => {
			it('Should be not valid', () => {
				const validFullName = validateFullName('João');
				expect(validFullName.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validFullName = validateFullName('João da Silva');
				expect(validFullName.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validFullName = validateFullName('João');
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do nome completo está inválido'
					}
				];
				expect(validFullName.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Erro personalizado'
					}
				];
				const validFullName = validateFullName(!'João da Silva', {
					INVALID_COMMON: 'Erro personalizado'
				});

				expect(validFullName.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('João da Silva')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do nome completo está inválido'
					}
				];
				expect(getErrors('João')).toEqual(errors);
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
				expect(isValid('João da Silva')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('João')).toBe(false);
				expect(isValid('')).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do nome completo está inválido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
