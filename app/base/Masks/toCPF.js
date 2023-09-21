import { removeNonDigits, restrainSize } from '../Utils';

function toCPF(value) {
  if (typeof value !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }

  return restrainSize(removeNonDigits(value), 11).replace(
    /^(\d{3})(\d{1,3})?(\d{1,3})?(\d{1,2})?/,
    (
      match,
      firstPartOfString,
      secondPartOfString,
      thirdPartOfString,
      fourthPartOfString
    ) => {
      const dots = [firstPartOfString, secondPartOfString, thirdPartOfString];
      fourthPartOfString = fourthPartOfString ? `-${fourthPartOfString}` : '';
      return (
        dots.reduce((first, rest) => first + (rest ? `.${rest}` : '')) +
        fourthPartOfString
      );
    }
  );
}

export default toCPF;
