import { createError, merge, removeCaractheresAndLetters } from '../../Utils';
import defaultMessages from './messages';
import {
  isValidLength,
  isDigitsEqual,
  isCalculatedDigitMatches
} from './valid';

const getErrors = (cnpj, customMessages) => {
  const errors = [];

  const cnpjJustNumber = removeCaractheresAndLetters(cnpj);
  if (!isValidLength(cnpjJustNumber)) {
    errors.push(
      createError('INVALID_LENGTH', merge(defaultMessages, customMessages))
    );
  }

  if (
    isDigitsEqual(cnpjJustNumber) ||
    !isCalculatedDigitMatches(cnpjJustNumber)
  ) {
    errors.push(
      createError('INVALID_COMMON', merge(defaultMessages, customMessages))
    );
  }

  return errors;
};

export { getErrors };
