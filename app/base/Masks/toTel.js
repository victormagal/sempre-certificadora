import removeNonDigits from './removeNonDigits';
import restrainSize from './retrainSize';

function toTel(value, withoutDDD) {
  if (typeof value !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }

  const phoneMask = (phoneValue) =>
    restrainSize(removeNonDigits(phoneValue), 9).replace(/\d+/, (phone) => {
      const separator = phone.length < 9 ? 4 : 5;
      let maskedTel = phone.slice(0, separator);
      if (phone.length > 4) {
        maskedTel += `-${phone.slice(separator)}`;
      }
      return maskedTel;
    });

  const regexp = /^(\d{2})(\d{1,9})?/;
  const replaceCallback = (match, ddd, phone) =>
    !phone ? ddd : `${ddd} ${phoneMask(phone)}`;

  return withoutDDD
    ? phoneMask(value)
    : restrainSize(removeNonDigits(value), 11).replace(regexp, replaceCallback);
}

export default toTel;
