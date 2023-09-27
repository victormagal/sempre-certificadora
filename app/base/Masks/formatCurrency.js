function formatCurrency(value, currency, localeString) {
  const options = { style: 'currency', currency };
  return value?.toLocaleString(localeString, options);
}

export default formatCurrency;
