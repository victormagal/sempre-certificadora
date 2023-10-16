'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { neutralDark, neutralLight, success } from '../base/Colors';
import { SolidIcon } from '../base/Icons';
import { Text } from '../base/Typography';
import { removeNonDigits } from '../base/Utils';
import { Container } from '../components/Elements';
import { getProducts } from '../graphql/queries';
import FormStepper from './FormStepper';
import {
  ContactData,
  PaymentData,
  ServiceData,
  SummaryData
} from './FormSteps';
import schema from './FormValidation/schema';
import { Boleto, Cartao, Error, Pix } from './Payments';
import SelectedProduct from './SelectedProduct';
import { useQuery } from '@apollo/client';
import axios from 'axios';
import { Form, Formik } from 'formik';

export default function Checkout() {
  const [dataIugu, setDataIugu] = useState({});
  const [loadingIugu, setLoadingIugu] = useState(false);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [initialPFProducts, setInitialPFProducts] = useState([]);
  const [initialPJProducts, setInitialPJProducts] = useState([]);
  const [responseIugu, setResponseIugu] = useState(false);
  const [changedProduct, setChangedProduct] = useState('');
  const [service, setService] = useState('');
  const [typePayment, setTypePayment] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedProduct = searchParams.get('product');

  useQuery(getProducts, {
    onCompleted: (data) => {
      const {
        produto: {
          data: {
            attributes: { produto }
          }
        }
      } = data;
      setProducts(produto);
    }
  });

  useEffect(() => {
    products.map((product) => {
      if (product.tipo_atendimento === 'videoconferencia') {
        if (product.certificado === 'pessoa_fisica') {
          setInitialPFProducts((prevState) => [...prevState, product]);
        } else {
          setInitialPJProducts((prevState) => [...prevState, product]);
        }
      }
    });

    const focusedProduct =
      changedProduct.length > 0 ? changedProduct : selectedProduct;

    const result = products.find(
      (product) => product.id_produto === focusedProduct
    );
    setProduct(result);
  }, [changedProduct, products]);

  useEffect(() => {
    const result = products.find(
      (item) =>
        item.nome === product.nome &&
        item.validade === product.validade &&
        item.certificado === product.certificado &&
        item.tipo_atendimento === service
    );
    setProduct(result);
  }, [service]);

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
        return (
          <ServiceData
            product={product}
            products={products}
            setService={setService}
          />
        );
      case 2:
        return <PaymentData product={product} />;
      case 3:
        return <SummaryData loading={loadingIugu} product={product} />;
      default:
        return <div>Vazio</div>;
    }
  };

  const handleBack = () => {
    document.getElementById('stepper').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
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
      cupom_desconto: '',
      ddd_telefone_cobranca: removeNonDigits(values.phone).slice(0, 2),
      dn_certificado: '',
      email: values.mail,
      forma_pagamento: values.forma_pagamento,
      id_filial: values.filial,
      id_produto: values.id_produto,
      logradouro_cobranca: values.logradouro,
      nome_cobranca: values.name,
      numero_cobranca: values.address_number,
      qtd_parcelas: values.parcelas,
      telefone_cobranca: removeNonDigits(values.phone).slice(2),
      tipo_atendimento: values.tipo_atendimento,
      token: values.token,
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
        setResponseIugu(true);
        document.getElementById('stepper').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        if (status === 200) {
          const { payable_with } = data;
          if (payable_with === 'bank_slip') {
            setTypePayment('boleto');
            setDataIugu({
              codeImage: data.bank_slip.barcode,
              codeLine: data.bank_slip.digitable_line,
              email: data.payer_email,
              url: data.secure_url,
              value: data.total,
              vencimento: data.due_date
            });
          } else if (payable_with === 'pix') {
            setTypePayment('pix');
            setDataIugu({
              codeImage: data.pix.qrcode,
              codeLine: data.pix.qrcode_text
            });
          } else if (success) {
            setTypePayment('cartao');
          }
        } else {
          setLoadingIugu(false);
          setTypePayment('error');
        }
      })
      .catch((error) => {
        document.getElementById('stepper').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        console.log(error.response);
        setLoadingIugu(false);
        setResponseIugu(true);
        setTypePayment('error');
      });

    actions.setSubmitting(false);
  };

  const handleSubmit = (actions, values) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      document.getElementById('stepper').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <main className="pt-24" id="stepper">
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
          id_produto: selectedProduct,
          filial: '',
          logradouro: '',
          mail: '',
          name: '',
          parcelas: '',
          phone: '',
          tipo_atendimento: '',
          token: ''
        }}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={currentSchema}
      >
        <Form>
          <FormStepper step={activeStep} />
          {!isLastStep && (
            <SelectedProduct
              initialPF={initialPFProducts}
              initialPJ={initialPJProducts}
              product={product}
              changeProduct={setChangedProduct}
            />
          )}
          {isLastStep && responseIugu && typePayment === 'boleto' && (
            <Boleto data={dataIugu} />
          )}
          {isLastStep && responseIugu && typePayment === 'pix' && (
            <Pix data={dataIugu} />
          )}
          {isLastStep && responseIugu && typePayment === 'cartao' && <Cartao />}
          {isLastStep && responseIugu && typePayment === 'error' && <Error />}
          {renderStepContent(activeStep)}
          <Container>
            <div className="col-span-4 lg:col-span-10 lg:col-start-2 flex justify-between py-6">
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
                    {isLastStep ? 'Finalizar' : 'Continuar'}
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
