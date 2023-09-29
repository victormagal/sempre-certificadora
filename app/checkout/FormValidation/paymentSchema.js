import {
  CARD_MIN_LENGTH,
  CARD_CODE_MIN_LENGTH,
  CEP_MIN_LENGTH,
  EXPIRATION_DATE_MIN_LENGTH,
  LOGRADOURO_MIN_LENGTH,
  NAME_REGEX
} from '@/app/base/Constants';
import * as Yup from 'yup';

export default Yup.object({
  has_pagamento: Yup.boolean(),
  forma_pagamento: Yup.string().required('Escolha uma forma de pagamento'),
  card_number: Yup.string().when('forma_pagamento', {
    is: 'cartao',
    then: () =>
      Yup.string()
        .required('Obrigatório')
        .min(CARD_MIN_LENGTH, 'Número de cartão inválido')
  }),
  card_name: Yup.string().when('forma_pagamento', {
    is: 'cartao',
    then: () =>
      Yup.string().required('Obrigatório').matches(NAME_REGEX, 'Nome inválido')
  }),
  card_expiration_date: Yup.string().when('forma_pagamento', {
    is: 'cartao',
    then: () =>
      Yup.string()
        .required('Obrigatório')
        .min(EXPIRATION_DATE_MIN_LENGTH, 'Data inválida')
  }),
  card_code: Yup.string().when('forma_pagamento', {
    is: 'cartao',
    then: () =>
      Yup.string()
        .required('Obrigatório')
        .min(CARD_CODE_MIN_LENGTH, 'Código inválido')
  }),
  parcelas: Yup.string().when('forma_pagamento', {
    is: 'cartao',
    then: () => Yup.string().required('Obrigatório')
  }),
  token: Yup.string().when('forma_pagamento', {
    is: 'cartao',
    then: () => Yup.string().required('Os dados do seu cartão estão inválidos')
  }),
  cep: Yup.string().when('forma_pagamento', {
    is: 'boleto',
    then: () =>
      Yup.string().required('Obrigatório').min(CEP_MIN_LENGTH, 'CEP inválido')
  }),
  logradouro: Yup.string().when('forma_pagamento', {
    is: 'boleto',
    then: () =>
      Yup.string()
        .required('Obrigatório')
        .min(LOGRADOURO_MIN_LENGTH, 'Endereço inválido')
  }),
  address_number: Yup.string().when('forma_pagamento', {
    is: 'boleto',
    then: () => Yup.string().required('Obrigatório')
  }),
  address_state: Yup.string().when('forma_pagamento', {
    is: 'boleto',
    then: () => Yup.string().required('Obrigatório')
  }),
  address_story: Yup.string().when('forma_pagamento', {
    is: 'boleto',
    then: () => Yup.string().required('Obrigatório')
  }),
  bairro: Yup.string().when('forma_pagamento', {
    is: 'boleto',
    then: () =>
      Yup.string().required('Obrigatório').min(CEP_MIN_LENGTH, 'CEP inválido')
  })
});
