'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { neutralDark, neutralLight, success } from '../base/Colors';
import { SolidIcon } from '../base/Icons';
import { Text } from '../base/Typography';
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
import { Boleto, Pix } from './Payments';
import SelectedProduct from './SelectedProduct';
import { useQuery } from '@apollo/client';
import axios from 'axios';
import { Form, Formik } from 'formik';

export default function Checkout() {
  const [productDetails, setProductDetails] = useState({});
  const [dataIugu, setDataIugu] = useState({});
  const [responseIugu, setResponseIugu] = useState(false);
  const [typePayment, setYypePayment] = useState('');
  const [loadingIugu, setLoadingIugu] = useState(false);
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
            loading={loadingIugu}
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
    setLoadingIugu(true);
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
        setLoadingIugu(false);
        if (status === 200) {
          setResponseIugu(true);
          const { payable_with } = data;
          if (payable_with === 'bank_slip') {
            setYypePayment('boleto');
            setDataIugu({
              codeImage: data.bank_slip.barcode,
              codeLine: data.bank_slip.digitable_line,
              email: data.payer_email,
              url: data.secure_url,
              value: data.total,
              vencimento: data.due_date
            });
          } else if (payable_with === 'pix') {
            setYypePayment('pix');
            setDataIugu({
              codeImage: data.pix.qrcode,
              codeLine: data.pix.qrcode_text
            });
          }
        } else {
          setLoadingIugu(false);
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
      {!isLastStep && <SelectedProduct values={productDetails?.attributes} />}
      {isLastStep && responseIugu && typePayment === 'boleto' && (
        <Boleto data={dataIugu} />
      )}
      {isLastStep && responseIugu && typePayment === 'pix' && (
        <Pix data={dataIugu} />
      )}
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
          tipo_atendimento: '',
          valor_final: productDetails?.attributes?.valor_com_desconto
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
