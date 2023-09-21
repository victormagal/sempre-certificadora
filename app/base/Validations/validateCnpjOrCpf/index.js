import { validateCNPJ } from '../validateCNPJ';
import { validateCPF } from '../validateCPF';
// export * from './async';

export default function validateCpfOrCnpj(value) {
  if (!value?.length) {
    return false;
  }

  return validateCNPJ(value).valid || validateCPF(value).valid;
}
