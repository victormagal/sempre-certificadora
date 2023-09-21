import { validateWebsite } from './';
import { getErrors } from './error';
import { isValid } from './valid';
import defaultMessages from './messages';

describe('Testing validateWebsite', () => {
	describe('Testing index file', () => {
		describe('Testing validateWebsite function', () => {
			it('Should be not valid', () => {
				const validTime = validateWebsite('www.teste');
				expect(validTime.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validTime = validateWebsite(
					'http://www.pagseguro.com.br'
				);
				expect(validTime.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validTime = validateWebsite('http://www.o');
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do website está inválido'
					}
				];
				expect(validTime.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Website inválido'
					}
				];
				const validTime = validateWebsite('http://www.', {
					INVALID_COMMON: 'Website inválido'
				});

				expect(validTime.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('http://www.pagseguro.com.br')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato do website está inválido'
					}
				];
				expect(getErrors('http://w')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Website inválido'
					}
				];
				expect(
					getErrors('http://www.', {
						INVALID_COMMON: 'Website inválido'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('http://www.pagseguro.com.br')).toBe(true);
				expect(isValid('http://www.pagseguro.com')).toBe(true);
				expect(isValid('https://www.pagseguro.com')).toBe(true);
				expect(isValid('pagseguro.com.br')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('http://www')).toBe(false);
				expect(isValid('.com.br')).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato do website está inválido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
