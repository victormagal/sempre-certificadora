import { removeNonDigits, restrainSize } from '../Utils';

function toCNPJ(value) {
  if (typeof value !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }

  return removeNonDigits(restrainSize(value, 18)).replace(
    /^(\d{2})(\d{1,3})?(\d{1,3})?(\d{1,4})?/,
    (
      match,
      firstPartOfString,
      secondPartOfString,
      thirdPartOfString,
      fourthPartOfString
    ) => {
      let replace = `${firstPartOfString}.`;

      if (typeof secondPartOfString !== 'undefined') {
        replace += secondPartOfString;
        if (secondPartOfString.length === 3) {
          replace += '.';
        }
      }

      if (typeof thirdPartOfString !== 'undefined') {
        replace += thirdPartOfString;
        if (thirdPartOfString.length === 3) {
          replace += '/';
        }
      }

      if (typeof fourthPartOfString !== 'undefined') {
        replace += fourthPartOfString;
        if (fourthPartOfString.length === 4) {
          replace += '-';
        }
      }

      return replace;
    }
  );
}

export default toCNPJ;
