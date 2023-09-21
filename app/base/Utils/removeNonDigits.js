function removeNonDigits(string) {
  if (typeof string !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }

  return string.replace(/\D+/g, '');
}

export default removeNonDigits;
