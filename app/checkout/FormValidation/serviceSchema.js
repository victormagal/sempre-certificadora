import * as Yup from 'yup';

export default Yup.object({
  has_atendimento: Yup.boolean(),
  tipo_atendimento: Yup.string().required('Escolha um modelo de atendimento'),
  estado: Yup.string().when('has_atendimento', {
    is: true,
    then: () => Yup.string().required('Obrigatório')
  }),
  cidade: Yup.string().when('has_atendimento', {
    is: true,
    then: () => Yup.string().required('Obrigatório')
  })
});
