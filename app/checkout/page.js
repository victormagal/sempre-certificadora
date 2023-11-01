'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { neutralDark, neutralLight, success } from '../base/Colors';
import { SolidIcon } from '../base/Icons';
import { Text } from '../base/Typography';
import { removeNonDigits } from '../base/Utils';
import { Container } from '../components/Elements';
import {
  Header,
  HeaderMobile,
  Footer,
  Locations
} from '../components/Partials';
import FormStepper from './FormStepper';
import {
  ContactData,
  PaymentData,
  ServiceData,
  SummaryData
} from './FormSteps';
import schema from './FormValidation/schema';
import { Boleto, Cartao, Error, Pix, PixFinished } from './Payments';
import SelectedProduct from './SelectedProduct';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Form, Formik } from 'formik';

export default function Checkout() {
  const [changedProduct, setChangedProduct] = useState('');
  const [dataIugu, setDataIugu] = useState({});
  const [finishForm, setFinishForm] = useState(false);
  const [idPayment, setIdPayment] = useState('');
  const [initialPFProducts, setInitialPFProducts] = useState([]);
  const [initialPJProducts, setInitialPJProducts] = useState([]);
  const [loadingIugu, setLoadingIugu] = useState(false);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [responseIugu, setResponseIugu] = useState(false);
  const [service, setService] = useState('');
  const [statusPaymentPix, setStatusPaymentPix] = useState(false);
  const [typePayment, setTypePayment] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedProduct = searchParams.get('product');
  const cupom = searchParams.get('cupom');

  useEffect(() => {
    axios
      .get(`../api/products${cupom && `/${cupom}`}`)
      .then(({ data: { data: response } }) => {
        const { Produtos: products } = response;
        setProducts(products);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  useEffect(() => {
    products.map((product) => {
      if (product.tipo_atendimento === 'videoconferencia') {
        if (product.tipo_certificado === 'pessoa_fisica') {
          setInitialPFProducts((prevState) => [...prevState, product]);
        } else {
          setInitialPJProducts((prevState) => [...prevState, product]);
        }
      }
    });

    const focusedProduct =
      changedProduct.length > 0 ? changedProduct : selectedProduct;

    const result = products.find((product) => product.id === focusedProduct);
    setProduct(result);
  }, [changedProduct, products]);

  useEffect(() => {
    const result = products.find(
      (item) =>
        item.nome === product.nome &&
        item.validade === product.validade &&
        item.tipo_certificado === product.tipo_certificado &&
        item.tipo_atendimento === service
    );
    setProduct(result);
  }, [service]);

  useEffect(() => {
    if (typePayment === 'pix') {
      const interval = setInterval(() => {
        const config = {
          headers: {
            'mz-integration': 'sempre',
            'Content-Type': 'application/json'
          }
        };

        axios
          .get(
            `https://bot.sempretecnologia.com.br/index.php/comercial/scd/fatura/${idPayment}`,
            config
          )
          .then(({ data, status }) => {
            if (status === 200 && data.status === 'paid') {
              setStatusPaymentPix(true);
            }
          })
          .catch((error) => {
            return error;
          });
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [typePayment]);

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

  const submitForm = async (actions, values) => {
    setLoadingIugu(true);

    axios
      .post(`../api/checkout${cupom && `/${cupom}`}`, {
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
        midia_obrigatorio: values.midia_obrigatorio,
        nome_cobranca: values.name,
        numero_cobranca: values.address_number,
        qtd_parcelas: values.parcelas,
        telefone_cobranca: removeNonDigits(values.phone).slice(2),
        tipo_atendimento: values.tipo_atendimento,
        token: values.token,
        uf_cobranca: values.address_state
      })
      .then(({ data: { data: responseData }, status }) => {
        setLoadingIugu(false);
        setResponseIugu(true);
        document.getElementById('stepper').scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        if (status === 200) {
          setFinishForm(true);
          const { payable_with, success } = responseData;
          if (payable_with === 'bank_slip') {
            setTypePayment('boleto');
            setDataIugu({
              codeImage: responseData.bank_slip.barcode,
              codeLine: responseData.bank_slip.digitable_line,
              email: responseData.payer_email,
              url: responseData.secure_url,
              value: responseData.total,
              vencimento: responseData.due_date
            });
          } else if (payable_with === 'pix') {
            setTypePayment('pix');
            setIdPayment(responseData.id);
            setDataIugu({
              codeImage: responseData.pix.qrcode,
              codeLine: responseData.pix.qrcode_text
            });
          } else if (success) {
            setTypePayment('cartao');
          } else if (!success) {
            setLoadingIugu(false);
            setTypePayment('error');
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

        setFinishForm(false);
        setLoadingIugu(false);
        setResponseIugu(true);
        setTypePayment('error');

        return error.response;
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
    <>
      <Header />
      <HeaderMobile />
      <main className="pt-24" id="stepper">
        <Formik
          initialValues={{
            address_city: '',
            address_number: '',
            address_story: '',
            address_state: '',
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
            has_midia: false,
            has_pagamento: false,
            id_produto: selectedProduct,
            filial: '',
            logradouro: '',
            mail: '',
            midia_obrigatorio: false,
            name: '',
            parcelas: '',
            phone: '',
            tipo_atendimento: 'videoconferencia',
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
            {isLastStep &&
              responseIugu &&
              typePayment === 'pix' &&
              !statusPaymentPix && <Pix data={dataIugu} />}
            {isLastStep &&
              responseIugu &&
              typePayment === 'pix' &&
              statusPaymentPix && <PixFinished />}
            {isLastStep && responseIugu && typePayment === 'cartao' && (
              <Cartao />
            )}
            {isLastStep && responseIugu && typePayment === 'error' && <Error />}
            {renderStepContent(activeStep)}
            <Container>
              <div
                className={`col-span-4 lg:col-span-10 lg:col-start-2 flex flex-grow lg:flex-grow-0 ${
                  finishForm ? 'lg:justify-end' : 'lg:justify-between'
                } py-6 space-x-4`}
              >
                {!finishForm && activeStep !== 0 ? (
                  <button
                    className="border flex flex-1 lg:flex-none items-center justify-center py-3 px-4 rounded space-x-2"
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
                  !finishForm &&
                  activeStep === 0 && (
                    <button
                      className="border flex flex-1 lg:flex-none items-center justify-center py-3 px-4 rounded space-x-2"
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
                  )
                )}
                {finishForm ? (
                  <button
                    className="flex items-center justify-center py-3 px-4 rounded space-x-2 w-full lg:w-auto"
                    onClick={() => router.back()}
                    style={{ background: success[900] }}
                  >
                    <Text appearance="p4" color={neutralLight[100]}>
                      Ir para home
                    </Text>
                    <SolidIcon
                      icon="faChevronRight"
                      iconColor={neutralLight[100]}
                      newClasses="h-3"
                    />
                  </button>
                ) : (
                  <button
                    className="flex flex-1 lg:flex-none items-center justify-center py-3 px-4 rounded space-x-2"
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
                )}
              </div>
            </Container>
          </Form>
        </Formik>
      </main>
      <Locations />
      <Footer />
      <Link
        href="https://api.whatsapp.com/send?phone=556130839390"
        target="_blank"
        className="fixed bg-[#25D366] bottom-4 drop-shadow-xl h-16 right-4 rounded-full w-16"
      >
        <FontAwesomeIcon
          className="text-white h-10 w-10 mt-3 ml-3"
          icon={faWhatsapp}
        />
      </Link>
    </>
  );
}
