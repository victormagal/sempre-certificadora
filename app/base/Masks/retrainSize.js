function restrainSize(value, size) {
  if (typeof value !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }

  return value.slice(0, size);
}

export default restrainSize;
