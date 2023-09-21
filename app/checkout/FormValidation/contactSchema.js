import { NAME_REGEX, PHONE_MIN_LENGTH } from '@/app/base/Constants';
import { validateCpfOrCnpj } from '@/app/base/Validations';
import * as Yup from 'yup';

export default Yup.object({
  document: Yup.string()
    .required('Obrigatório')
    .test('validateDocument', 'CPF/CNPJ inválido', (value) => {
      return validateCpfOrCnpj(value);
    }),
  mail: Yup.string().email('E-mail inválido').required('Obrigatório'),
  name: Yup.string()
    .required('Obrigatório')
    .matches(NAME_REGEX, 'Nome inválido'),
  phone: Yup.string()
    .required('Obrigatório')
    .min(PHONE_MIN_LENGTH, 'Telefone inválido')
});
