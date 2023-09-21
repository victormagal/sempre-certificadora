import * as Yup from 'yup';

const SEARCH_POSTAL_CODE_VALIDATIONS = Yup.object().shape({
  street: Yup.string().required('Obrigatório'),
  cityId: Yup.string().required('Obrigatório'),
  state: Yup.string().required('Obrigatório')
});

const ADDRESS_CONTAINER_VALIDATIONS = Yup.object().shape({
  address: Yup.object().shape({
    postalCode: Yup.string().required('Obrigatório'),
    street: Yup.string().nullable().required('Obrigatório'),
    number: Yup.number()
      .typeError('Apenas números')
      .moreThan(-1, 'Apenas números')
      .required('Obrigatório'),
    district: Yup.string().nullable().required('Obrigatório'),
    city: Yup.string().required('Obrigatório'),
    state: Yup.string().required('Obrigatório')
  })
});

export { SEARCH_POSTAL_CODE_VALIDATIONS, ADDRESS_CONTAINER_VALIDATIONS };
