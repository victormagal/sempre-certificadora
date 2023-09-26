'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { neutralDark, neutralLight, neutralMid, success } from '../base/Colors';
import { SolidIcon } from '../base/Icons';
import { Overline, Text, Title } from '../base/Typography';
import { removeNonDigits } from '../base/Utils';
import { Container } from '../components/Elements';
import { getProductsById } from '../graphql/queries';
import FormStepper from './FormStepper';
import {
  ContactData,
  PaymentData,
  ServiceData,
  SummaryData
} from './FormSteps';
import schema from './FormValidation/schema';
import { useQuery } from '@apollo/client';
import axios from 'axios';
import { Form, Formik } from 'formik';

export default function Checkout() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedProduct = searchParams.get('product');

  useQuery(getProductsById, {
    variables: { produto: selectedProduct },
    onCompleted: ({ produtos: { data } }) => {
      setProductDetails(data[0]);
    }
  });

  const steps = [
    'Dados de contato',
    'Forma de atendimento',
    'Formas de pagamento',
    'Resumo da compra'
  ];

  const [activeStep, setActiveStep] = useState(0);
  const currentSchema = schema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <ContactData />;
      case 1:
        return <ServiceData />;
      case 2:
        return (
          <PaymentData
            desconto={productDetails?.attributes?.percentual_desconto}
            valor={productDetails?.attributes?.valor}
            valor_desconto={productDetails?.attributes?.valor_desconto}
            valor_final={productDetails?.attributes?.valor_com_desconto}
          />
        );
      case 3:
        return (
          <SummaryData
            desconto={productDetails?.attributes?.percentual_desconto}
            description={productDetails?.attributes?.nome}
            valor={productDetails?.attributes?.valor}
            valor_desconto={productDetails?.attributes?.valor_desconto}
            valor_final={productDetails?.attributes?.valor_com_desconto}
          />
        );
      default:
        return <div>Vazio</div>;
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitForm = (actions, values) => {
    const config = {
      headers: {
        'mz-integration': 'sempre',
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      bairro_cobranca: values.bairro,
      cep_cobranca: removeNonDigits(values.cep),
      cidade_cobranca: values.address_story,
      complemento_cobranca: values.complemento,
      cpf_certificado: '',
      cpf_cnpj_cobranca: removeNonDigits(values.document),
      cupom_desconto: '1432',
      ddd_telefone_cobranca: removeNonDigits(values.phone).slice(0, 2),
      dn_certificado: '',
      email: values.mail,
      forma_pagamento: values.forma_pagamento,
      id_filial: 'c8c3042c-9050-4b4c-b831-937986c44bfd',
      id_produto: '305ea64e-d928-47a4-a1c8-b245d7fafff8',
      logradouro_cobranca: values.logradouro,
      nome_cobranca: values.name,
      numero_cobranca: values.address_number,
      telefone_cobranca: removeNonDigits(values.phone).slice(2),
      tipo_atendimento: values.tipo_atendimento,
      uf_cobranca: values.address_state
    });

    axios
      .post(
        'https://bot-hom.sempretecnologia.com.br/index.php/comercial/scd/pagamento-transparente',
        body,
        config
      )
      .then(({ data, status }) => {
        if (status === 200) {
          console.log(data.bank_slip);
        } else {
          console.log(status);
        }
      });

    actions.setSubmitting(false);
  };

  const handleSubmit = (actions, values) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <main className="pt-24">
      <FormStepper step={activeStep} />
      <Container>
        <ul className="border col-span-10 col-start-2 flex justify-between mb-6 py-8 px-12 rounded">
          <li>
            <Title appearance="h4" color={neutralDark[500]} extra>
              Certificado
              <br />
              selecionado
            </Title>
          </li>
          <li className="flex flex-col space-y-1">
            <div
              className="py-2 rounded text-center"
              style={{ background: '#E6F8F2' }}
            >
              <Overline appearance="o1" color="#076E4F">
                {productDetails?.attributes?.percentual_desconto}% off
              </Overline>
            </div>
            <div>
              <Title appearance="h4" color={neutralDark[400]} extra>
                {productDetails?.attributes?.nome}
              </Title>
            </div>
          </li>
          <li className="flex flex-col space-y-1">
            <Text
              appearance="p3"
              color={neutralMid[600]}
              className="line-through"
            >
              De R$ {productDetails?.attributes?.valor} por
            </Text>
            <Title appearance="h2" color={neutralDark[500]} extra>
              R$ {productDetails?.attributes?.valor_com_desconto}
            </Title>
            <Text appearance="p3" color={neutralMid[600]}>
              3x de R$ {productDetails?.attributes?.valor_com_desconto / 3} no
              crédito
            </Text>
            <Text appearance="p4" color={neutralDark[500]}>
              Validade de 12 meses
            </Text>
          </li>
          <li className="flex items-center">
            <button
              className="border flex items-center justify-center py-4 px-8 rounded-md space-x-3"
              style={{
                background: neutralLight[100],
                borderColor: neutralLight[500]
              }}
            >
              <Title appearance="h7" color={neutralDark[500]}>
                Trocar certificado
              </Title>
            </button>
          </li>
        </ul>
      </Container>
      <Formik
        initialValues={{
          address_number: '',
          address_state: '',
          address_city: '',
          bairro: '',
          card_code: '',
          card_expiration_date: '',
          card_name: '',
          card_number: '',
          cep: '',
          cidade: '',
          cities: [],
          complemento: '',
          detailed_story: {},
          document: '',
          estado: '',
          filtered_stories: [],
          filtered_stories_payment: [],
          forma_pagamento: '',
          has_atendimento: false,
          has_pagamento: false,
          logradouro: '',
          mail: '',
          name: '',
          parcelas: '',
          phone: '',
          tipo_atendimento: ''
        }}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={currentSchema}
      >
        <Form>
          {renderStepContent(activeStep)}
          <Container>
            <div className="col-span-10 col-start-2 flex justify-between py-6">
              {activeStep !== 0 ? (
                <button
                  className="border flex items-center py-3 px-4 rounded space-x-2"
                  onClick={() => handleBack()}
                  style={{
                    background: neutralLight[100],
                    borderColor: neutralLight[500]
                  }}
                  type="button"
                >
                  <SolidIcon
                    icon="faChevronLeft"
                    iconColor={neutralDark[500]}
                    newClasses="h-3"
                  />
                  <Text appearance="p4" color={neutralDark[500]}>
                    Voltar
                  </Text>
                </button>
              ) : (
                <button
                  className="border flex items-center py-3 px-4 rounded space-x-2"
                  onClick={() => router.back()}
                  style={{
                    background: neutralLight[100],
                    borderColor: neutralLight[500]
                  }}
                  type="button"
                >
                  <SolidIcon
                    icon="faChevronLeft"
                    iconColor={neutralDark[500]}
                    newClasses="h-3"
                  />
                  <Text appearance="p4" color={neutralDark[500]}>
                    Voltar
                  </Text>
                </button>
              )}
              <div>
                <button
                  className="flex items-center py-3 px-4 rounded space-x-2"
                  style={{ background: success[900] }}
                  type="submit"
                >
                  <Text appearance="p4" color={neutralLight[100]}>
                    {isLastStep ? 'Ir para a home' : 'Continuar'}
                  </Text>
                  <SolidIcon
                    icon="faChevronRight"
                    iconColor={neutralLight[100]}
                    newClasses="h-3"
                  />
                </button>
              </div>
            </div>
          </Container>
        </Form>
      </Formik>
    </main>
  );
}
