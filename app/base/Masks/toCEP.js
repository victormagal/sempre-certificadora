import removeNonDigits from './removeNonDigits';
import restrainSize from './retrainSize';

function toCEP(value) {
  if (typeof value !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }

  return removeNonDigits(restrainSize(value, 9)).replace(
    /^(\d{5})(\d{1,3})?/,
    (match, firstPartOfString, secondPartOfString) => {
      let formattedString = `${firstPartOfString}-`;

      if (typeof secondPartOfString !== 'undefined') {
        formattedString += secondPartOfString;
      }

      return formattedString;
    }
  );
}

export default toCEP;
