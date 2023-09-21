function stripSpecialCharacters(str) {
  return str.replace(/[^0-9A-Za-zÀ-ÿẽẼ\s]|[×Ø÷]/g, '');
}

export default stripSpecialCharacters;
