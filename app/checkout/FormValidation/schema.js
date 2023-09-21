import contactDataSchema from './contactDataSchema';
import * as Yup from 'yup';

export default [
  contactDataSchema,
  Yup.object({
    has_atendimento: Yup.boolean(),
    tipo_atendimento: Yup.string().required('Escolha um modelo de atendimento'),
    estado: Yup.string().when('forma_pagamento', {
      is: true,
      then: () => Yup.string().required('Obrigatório')
    }),
    cidade: Yup.string().when('has_atendimento', {
      is: true,
      then: () => Yup.string().required('Obrigatório')
    })
  }),
  Yup.object({
    has_pagamento: Yup.boolean(),
    forma_pagamento: Yup.string().required('Escolha uma forma de pagamento'),
    card_number: Yup.string().when('forma_pagamento', {
      is: 'cartao',
      then: () => Yup.string().required('Obrigatório')
    }),
    card_name: Yup.string().when('forma_pagamento', {
      is: 'cartao',
      then: () => Yup.string().required('Obrigatório')
    }),
    card_expiration_date: Yup.string().when('forma_pagamento', {
      is: 'cartao',
      then: () => Yup.string().required('Obrigatório')
    }),
    card_code: Yup.string().when('forma_pagamento', {
      is: 'cartao',
      then: () => Yup.string().required('Obrigatório')
    }),
    parcelas: Yup.string().when('forma_pagamento', {
      is: 'cartao',
      then: () => Yup.string().required('Obrigatório')
    }),
    cep: Yup.string().when('forma_pagamento', {
      is: 'boleto',
      then: () => Yup.string().required('Obrigatório')
    }),
    logradouro: Yup.string().when('forma_pagamento', {
      is: 'boleto',
      then: () => Yup.string().required('Obrigatório')
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
      then: () => Yup.string().required('Obrigatório')
    })
  })
];
