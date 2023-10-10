import { removeNonDigits } from '../Utils';

const maskPhoneNumber = (value) => {
  if (typeof value !== 'string') {
    throw new TypeError('The parameter must be a string');
  }

  const phoneMask = (value) => {
    const separator = value.length < 9 ? 4 : 5;

    if (value.length > 4)
      return `${value.slice(0, separator)}-${value.slice(separator)}`;

    return value;
  };

  return removeNonDigits(value)
    .substr(0, 11)
    .replace(
      /^(\d{2})(\d{1,9})?/,
      (_, ddd, phone = '') => `(${ddd}) ${phoneMask(phone)}`
    );
};

export default maskPhoneNumber;
