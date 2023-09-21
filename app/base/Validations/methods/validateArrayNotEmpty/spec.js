import { getErrors } from './errors';
import { isEmpty } from './valid';
import defaultMessages from './messages';
import { validateArrayNotEmpty } from './';

describe('Testing validateArrayNotEmpty file', () => {
	describe('Testing index file', () => {
		describe('Testing validateArrayNotEmpty function', () => {
			it('Should be not valid', () => {
				const validArray = validateArrayNotEmpty([]);
				expect(validArray.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validArray = validateArrayNotEmpty([10, 20]);
				expect(validArray.valid).toBe(true);
			});
			it('Should return object with default error', () => {
				const array = [];
				const validArray = validateArrayNotEmpty(array);
				expect(validArray).toEqual({
					errors: [
						{
							key: 'INVALID_COMMON',
							message: 'A lista necessita de ter items'
						}
					],
					valid: false
				});
			});
			it('Should return object with personalized error', () => {
				const array = [];
				const configError = {
					INVALID_COMMON: 'Lista personalizada'
				};
				const validArray = validateArrayNotEmpty(array, configError);
				expect(validArray).toEqual({
					errors: [
						{
							key: 'INVALID_COMMON',
							message: 'Lista personalizada'
						}
					],
					valid: false
				});
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isEmpty function', () => {
			it('Should return true', () => {
				const value = [];
				expect(isEmpty(value)).toBe(true);
			});
			it('Should return false', () => {
				const value = [10, 20, 30];
				expect(isEmpty(value)).toBe(false);
			});
		});
	});
	describe('Testing error file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors([1, 2, 3], {})).toEqual([]);
			});
			it('Should return error list default', () => {
				expect(getErrors([], {})).toEqual([
					{
						key: 'INVALID_COMMON',
						message: 'A lista necessita de ter items'
					}
				]);
			});
			it('Should return error list personalized', () => {
				const errors = getErrors([], {
					INVALID_COMMON: 'Mensagem teste'
				});
				expect(errors).toEqual([
					{
						key: 'INVALID_COMMON',
						message: 'Mensagem teste'
					}
				]);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON: 'A lista necessita de ter items'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
