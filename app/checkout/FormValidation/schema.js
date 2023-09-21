import contactDataSchema from './contactDataSchema';
import paymentDataSchema from './paymentDataSchema';
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
  paymentDataSchema
];
