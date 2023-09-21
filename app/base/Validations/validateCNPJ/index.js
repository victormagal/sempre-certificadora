import { factoryOutput } from '../../Utils';
import { getErrors } from './errors';
import { isValidCNPJ } from './valid';

const validateCNPJ = (cnpj, error) => {
  const errors = getErrors(cnpj, error);
  return factoryOutput(errors);
};

export { validateCNPJ, isValidCNPJ };
