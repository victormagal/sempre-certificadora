import { isValid } from './valid';
import { getErrors } from './errors';
import { validateDate } from './';
import defaultMessages from './messages';

describe('Testing validateDate', () => {
	describe('Testing index file', () => {
		describe('Testing validateDate function', () => {
			it('Should be not valid', () => {
				const validDate = validateDate('19/13/2018');
				expect(validDate.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validDate = validateDate('19/05/2018');
				expect(validDate.valid).toBe(true);
			});
			it('Should return object with default error', () => {
				const validDate = validateDate('19/13/2018');
				expect(validDate.errors).toEqual([
					{
						key: 'INVALID_COMMON',
						message: 'Formato de data inválido'
					}
				]);
			});
			it('Should return object with personalized error', () => {
				const validDate = validateDate('19/13/2018', {
					INVALID_COMMON: 'Erro personalizado'
				});
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Erro personalizado'
					}
				];
				expect(validDate.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('10/05/2019')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Formato de data inválido'
					}
				];
				expect(getErrors('10/13/2019')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem personalizada'
					}
				];
				expect(
					getErrors('10/13/2019', {
						INVALID_COMMON: 'Mensagem personalizada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('10/05/2020')).toBe(true);
			});
			it('Should return false if month greather than 12', () => {
				expect(isValid('20/13/2018')).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'Formato de data inválido'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
