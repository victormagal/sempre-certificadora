import { removeNonDigits, restrainSize } from '../Utils';

function toCardNumber(value) {
  if (typeof value !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }

  return restrainSize(removeNonDigits(value), 16).replace(
    /^(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?/,
    (
      match,
      firstPartOfString,
      secondPartOfString,
      thirdPartOfString,
      fourthPartOfString
    ) => {
      const space = [
        firstPartOfString,
        secondPartOfString,
        thirdPartOfString,
        fourthPartOfString
      ];
      return space.reduce((first, rest) => first + (rest ? ` ${rest}` : ''));
    }
  );
}

export default toCardNumber;
