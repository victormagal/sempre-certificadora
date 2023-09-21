import { DOCUMENT_MIN_LENGTH } from '../../../constants/link-simulator';
import { removeNonDigits } from '../../masks/methods';
import { validateCNPJ } from '../../validations/methods';
import * as Yup from 'yup';

const LINK_SIMULATOR_VALIDATION = Yup.object().shape({
  mcc: Yup.object().shape({
    id: Yup.number().moreThan(0, 'Obrigatório').required('Obrigatório')
  }),
  tpv: Yup.object().shape({
    id: Yup.number().moreThan(0, 'Obrigatório').required('Obrigatório')
  }),
  escrow: Yup.object().shape({
    id: Yup.number().moreThan(0, 'Obrigatório').required('Obrigatório')
  }),
  document: Yup.string()
    .min(DOCUMENT_MIN_LENGTH, 'Número inválido')
    .test('validCnpj', 'CNPJ inválido', (value) => {
      if (value) {
        const formatValue = removeNonDigits(value);

        if (formatValue.length > 11 && formatValue.length <= 14) {
          return validateCNPJ(value).valid;
        }
      }

      return true;
    })
});

export default LINK_SIMULATOR_VALIDATION;
