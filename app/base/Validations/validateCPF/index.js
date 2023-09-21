import { factoryOutput } from '../../Utils';
import { getErrors } from './errors';
import { isValidCPF } from './valid';

const validateCPF = (cpf, error) => {
  const errors = getErrors(cpf, error);
  return factoryOutput(errors);
};

export { validateCPF, isValidCPF };
