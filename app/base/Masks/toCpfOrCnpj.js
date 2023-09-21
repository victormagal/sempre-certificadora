import removeNonDigits from './removeNonDigits';
import toCNPJ from './toCNPJ';
import toCPF from './toCPF';

function toCpfOrCnpj(value) {
  if (typeof value !== 'string') {
    throw new TypeError('The input parameter must be a String type');
  }
  const clearedValue = removeNonDigits(value);
  return clearedValue.length <= 11 ? toCPF(clearedValue) : toCNPJ(clearedValue);
}

export default toCpfOrCnpj;
