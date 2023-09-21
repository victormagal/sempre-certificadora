import { removeNonDigits, restrainSize } from '../Utils';

function toExpirationDate(value) {
  if (typeof value !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }

  return restrainSize(removeNonDigits(value), 6).replace(
    /^(\d{2})(\d{1,4})?/,
    (match, firstPartOfString, secondPartOfString) => {
      const dots = [firstPartOfString, secondPartOfString];
      return dots.reduce((first, rest) => first + (rest ? `/${rest}` : ''));
    }
  );
}

export default toExpirationDate;
