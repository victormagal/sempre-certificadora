import { validateTime } from './';
import { getErrors } from './error';
import { isValid } from './valid';
import defaultMessages from './messages';

describe('Testing validateTime', () => {
	describe('Testing index file', () => {
		describe('Testing validateTime function', () => {
			it('Should be not valid', () => {
				const validTime = validateTime('1:2');
				expect(validTime.valid).toBe(false);
			});
			it('Should to be valid', () => {
				const validTime = validateTime('01:50');
				expect(validTime.valid).toBe(true);
			});

			it('Should return object with default error', () => {
				const validTime = validateTime('01:2');
				const errors = [
					{
						key: 'INVALID_COMMON',
						message:
							'Formato da hora está inválida está inválido. Formato (00:00)'
					}
				];
				expect(validTime.errors).toEqual(errors);
			});
			it('Should return object with personalized error', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Hora inválida'
					}
				];
				const validTime = validateTime('01:2', {
					INVALID_COMMON: 'Hora inválida'
				});

				expect(validTime.errors).toEqual(errors);
			});
		});
	});
	describe('Testing errors file', () => {
		describe('Testing getErrors function', () => {
			it('Should return no error list', () => {
				expect(getErrors('10:10')).toEqual([]);
			});
			it('Should return default error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message:
							'Formato da hora está inválida está inválido. Formato (00:00)'
					}
				];
				expect(getErrors('25:10')).toEqual(errors);
			});
			it('Should return personalized error list', () => {
				const errors = [
					{
						key: 'INVALID_COMMON',
						message: 'Hora errada'
					}
				];
				expect(
					getErrors('10:66', {
						INVALID_COMMON: 'Hora errada'
					})
				).toEqual(errors);
			});
		});
	});
	describe('Testing valid file', () => {
		describe('Testing isValid function', () => {
			it('Should return true', () => {
				expect(isValid('10:20')).toBe(true);
				expect(isValid('23:30')).toBe(true);
			});
			it('Should return false', () => {
				expect(isValid('1:1')).toBe(false);
				expect(isValid('9:30')).toBe(false);
				expect(isValid('25:30')).toBe(false);
				expect(isValid('23:61')).toBe(false);
			});
		});
	});
	describe('Testing messages file', () => {
		it('Sould return default messages', () => {
			const message = {
				INVALID_COMMON:
					'Formato da hora está inválida está inválido. Formato (00:00)'
			};
			expect(defaultMessages).toEqual(message);
		});
	});
});
