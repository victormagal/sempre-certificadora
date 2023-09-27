function _replaceCommaForPoint(num) {
  return num.replace(',', '.');
}

function floatToMoney(num) {
  if (typeof num === 'string') {
    num = parseFloat(_replaceCommaForPoint(num));
  }

  /* eslint-disable no-useless-escape */
  return num
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
  /* eslint-enable */
}

export default floatToMoney;
