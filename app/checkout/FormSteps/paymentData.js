import Link from 'next/link';
import { useEffect } from 'react';
import {
  blue,
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from '@/app/base/Colors';
import {
  ADDRESS_NUMBER_MAX_LENGTH,
  CARD_MIN_LENGTH,
  CARD_CODE_MIN_LENGTH,
  CEP_MIN_LENGTH,
  EXPIRATION_DATE_MIN_LENGTH,
  LOGRADOURO_MAX_LENGTH,
  NAME_MAX_LENGTH
} from '@/app/base/Constants';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
import { toCardNumber, toCEP, toExpirationDate } from '@/app/base/Masks';
import { Overline, Text, Title } from '@/app/base/Typography';
import { estados, cidades, removeLetters } from '@/app/base/Utils';
import { Container } from '@/app/components/Elements';
import axios from 'axios';
import { Field, useFormikContext } from 'formik';

export default function PaymentData({
  desconto,
  valor,
  valor_desconto,
  valor_final
}) {
  const { errors, setFieldValue, values } = useFormikContext();

  const filterCities = (value) => {
    const selectedCities = [];
    cidades.map((cidade) => {
      if (cidade.estado === value) {
        selectedCities.push(cidade);
      }
    });
    setFieldValue('cities', selectedCities);
  };

  const findCep = () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios
      .get(`http://viacep.com.br/ws/${removeLetters(values.cep)}/json/`, config)
      .then(({ data, status }) => {
        if (status === 200) {
          setFieldValue('address_number', '');
          setFieldValue('address_state', data.uf);
          setFieldValue('address_story', data.localidade);
          setFieldValue('bairro', data.bairro);
          setFieldValue('complemento', data.complemento);
          setFieldValue('logradouro', data.logradouro);
        }
      });
  };

  useEffect(() => {
    filterCities(values.address_state);
  }, [values.address_state]);

  return (
    <Container>
      <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Formas de pagamento
        </Title>
        {errors.forma_pagamento && (
          <div
            className="flex justify-center p-4 rounded w-full"
            style={{ background: red[100] }}
          >
            <Field
              className="hidden"
              name="forma_pagamento"
              type="hidden"
              value={values.forma_pagamento}
            />
            <Text appearance="p4" color={red[1200]}>
              {errors.forma_pagamento}
            </Text>
          </div>
        )}
        <div className="flex space-x-16 w-full">
          <ul className="flex flex-col space-y-4 w-2/5" role="group">
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => setFieldValue('forma_pagamento', 'cartao')}
              style={{
                borderColor:
                  values.forma_pagamento === 'cartao'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div className="flex items-center space-x-6">
                <div
                  className="h-10 flex items-center justify-center rounded-full w-10"
                  style={{ background: red[100] }}
                >
                  <RegularIcon
                    icon="faCirclePlay"
                    iconColor={red[900]}
                    newClasses="h-4"
                  />
                </div>
                <Title appearance="h6" color={neutralDark[500]}>
                  Cartão de crédito
                </Title>
              </div>
              <RegularIcon
                icon={`${
                  values.forma_pagamento === 'cartao'
                    ? 'faCircleDot'
                    : 'faCircle'
                }`}
                iconColor={
                  values.forma_pagamento === 'cartao'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => {
                setFieldValue('forma_pagamento', 'boleto');
              }}
              style={{
                borderColor:
                  values.forma_pagamento === 'boleto'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div className="flex items-center space-x-6">
                <div
                  className="h-10 flex items-center justify-center rounded-full w-10"
                  style={{ background: red[100] }}
                >
                  <RegularIcon
                    icon="faUser"
                    iconColor={red[900]}
                    newClasses="h-4"
                  />
                </div>
                <Title appearance="h6" color={neutralDark[500]}>
                  Boleto
                </Title>
              </div>
              <RegularIcon
                icon={`${
                  values.forma_pagamento === 'boleto'
                    ? 'faCircleDot'
                    : 'faCircle'
                }`}
                iconColor={
                  values.forma_pagamento === 'boleto'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => setFieldValue('forma_pagamento', 'pix')}
              style={{
                borderColor:
                  values.forma_pagamento === 'pix'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div className="flex items-center space-x-6">
                <div
                  className="h-10 flex items-center justify-center rounded-full w-10"
                  style={{ background: red[100] }}
                >
                  <RegularIcon
                    icon="faUser"
                    iconColor={red[900]}
                    newClasses="h-4"
                  />
                </div>
                <Title appearance="h6" color={neutralDark[500]}>
                  Pix
                </Title>
              </div>
              <RegularIcon
                icon={`${
                  values.forma_pagamento === 'pix' ? 'faCircleDot' : 'faCircle'
                }`}
                iconColor={
                  values.forma_pagamento === 'pix'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
          </ul>
          <div className="w-3/5">
            {values.forma_pagamento === 'cartao' && (
              <>
                <ul className="flex mb-6">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Número do cartão
                    </Text>
                    <Field
                      className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                      maxLength={CARD_MIN_LENGTH}
                      name="card_number"
                      style={{
                        background: neutralLight[200],
                        borderColor: errors.card_number
                          ? red[900]
                          : neutralLight[400],
                        color: neutralMid[500]
                      }}
                      type="text"
                      value={toCardNumber(values.card_number)}
                    />
                    {errors.card_number && (
                      <Text appearance="p4" className="mt-2" color={red[900]}>
                        {errors.card_number}
                      </Text>
                    )}
                  </li>
                </ul>
                <ul className="flex mb-6">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Nome no cartão
                    </Text>
                    <Field
                      className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                      maxLength={NAME_MAX_LENGTH}
                      name="card_name"
                      style={{
                        background: neutralLight[200],
                        borderColor: errors.card_name
                          ? red[900]
                          : neutralLight[400],
                        color: neutralMid[500]
                      }}
                      type="text"
                      value={values.card_name}
                    />
                    {errors.card_name && (
                      <Text appearance="p4" className="mt-2" color={red[900]}>
                        {errors.card_name}
                      </Text>
                    )}
                  </li>
                </ul>
                <ul className="flex flex-wrap mb-6 space-x-8">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Data de validade
                    </Text>
                    <Field
                      className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                      maxLength={EXPIRATION_DATE_MIN_LENGTH}
                      name="card_expiration_date"
                      style={{
                        background: neutralLight[200],
                        borderColor: errors.card_expiration_date
                          ? red[900]
                          : neutralLight[400],
                        color: neutralMid[500]
                      }}
                      type="text"
                      value={toExpirationDate(values.card_expiration_date)}
                    />
                    {errors.card_expiration_date && (
                      <Text appearance="p4" className="mt-2" color={red[900]}>
                        {errors.card_expiration_date}
                      </Text>
                    )}
                  </li>
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      CVC
                    </Text>
                    <Field
                      className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                      maxLength={CARD_CODE_MIN_LENGTH}
                      name="card_code"
                      style={{
                        background: neutralLight[200],
                        borderColor: errors.card_code
                          ? red[900]
                          : neutralLight[400],
                        color: neutralMid[500]
                      }}
                      type="text"
                      value={removeLetters(values.card_code)}
                    />
                    {errors.card_code && (
                      <Text appearance="p4" className="mt-2" color={red[900]}>
                        {errors.card_code}
                      </Text>
                    )}
                  </li>
                </ul>
                <ul className="flex mb-6">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Em quantas parcelas deseja pagar?
                    </Text>
                    <div className="flex items-center">
                      <Field
                        as="select"
                        className="appearance-none border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                        name="parcelas"
                        onChange={(e) =>
                          setFieldValue('parcelas', e.target.value)
                        }
                        style={{
                          background: neutralLight[200],
                          borderColor: errors.parcelas
                            ? red[900]
                            : neutralLight[400],
                          color: neutralMid[500]
                        }}
                        value={values.parcelas}
                      >
                        <option value="">Selecione</option>
                        <option value="1">1x de R$ {valor / 1}</option>
                        <option value="2">2x de R$ {valor / 2}</option>
                        <option value="3">3x de R$ {valor / 3}</option>
                      </Field>
                      <SolidIcon
                        icon="faChevronDown"
                        iconColor={neutralMid[500]}
                        newClasses="h-4 -ml-10"
                      />
                    </div>
                    {errors.parcelas && (
                      <Text appearance="p4" className="mt-2" color={red[900]}>
                        {errors.parcelas}
                      </Text>
                    )}
                  </li>
                </ul>
              </>
            )}
            {(values.forma_pagamento === 'boleto' ||
              values.forma_pagamento === 'pix') && (
              <>
                <ul className="border-b flex flex-col mb-6 pb-6 space-y-2">
                  <li>
                    <Title appearance="h4" color={neutralDark[500]}>
                      Dados da compra
                    </Title>
                  </li>
                  <li className="flex justify-between">
                    <Title appearance="h6" color={neutralMid[500]}>
                      Subtotal
                    </Title>
                    <Title appearance="h6" color={neutralDark[500]}>
                      R$ {valor}
                    </Title>
                  </li>
                  <li className="flex justify-between">
                    <Title appearance="h6" color={neutralMid[500]}>
                      Desconto
                    </Title>
                    <div className="flex items-center space-x-4">
                      <div
                        className="py-2 rounded text-center"
                        style={{ background: '#E6F8F2' }}
                      >
                        <Overline
                          appearance="o1"
                          className="px-4"
                          color="#076E4F"
                        >
                          {desconto}% off
                        </Overline>
                      </div>
                      <Title appearance="h6" color={neutralDark[500]}>
                        R$ {valor_desconto}
                      </Title>
                    </div>
                  </li>
                  <li className="flex justify-between">
                    <Title appearance="h5" color={neutralDark[500]}>
                      Total
                    </Title>
                    <Title appearance="h5" color={neutralDark[500]}>
                      R$ {valor_final}
                    </Title>
                  </li>
                </ul>
                {values.forma_pagamento === 'boleto' && (
                  <>
                    <ul className="flex flex-wrap mb-6 space-x-8">
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          CEP
                        </Text>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          maxLength={CEP_MIN_LENGTH}
                          name="cep"
                          onBlur={findCep}
                          style={{
                            background: neutralLight[200],
                            borderColor: errors.cep
                              ? red[900]
                              : neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="text"
                          value={toCEP(values.cep)}
                        />
                        {errors.cep && (
                          <Text
                            appearance="p4"
                            className="mt-2"
                            color={red[900]}
                          >
                            {errors.cep}
                          </Text>
                        )}
                      </li>
                      <li className="flex flex-col flex-1">
                        <Text
                          className="invisible mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Não sei o meu CEP
                        </Text>
                        <div className="flex flex-1 items-center">
                          <Link
                            href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
                            target="_blank"
                          >
                            <Text appearance="p1" color={blue[800]}>
                              Não sei o meu CEP
                            </Text>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <ul className="flex flex-wrap mb-6 space-x-8">
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Endereço
                        </Text>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          maxLength={LOGRADOURO_MAX_LENGTH}
                          name="logradouro"
                          style={{
                            background: neutralLight[200],
                            borderColor: errors.logradouro
                              ? red[900]
                              : neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="text"
                          value={values.logradouro}
                        />
                        {errors.logradouro && (
                          <Text
                            appearance="p4"
                            className="mt-2"
                            color={red[900]}
                          >
                            {errors.logradouro}
                          </Text>
                        )}
                      </li>
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Número
                        </Text>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          maxLength={ADDRESS_NUMBER_MAX_LENGTH}
                          name="address_number"
                          style={{
                            background: neutralLight[200],
                            borderColor: errors.address_number
                              ? red[900]
                              : neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="text"
                          value={removeLetters(values.address_number)}
                        />
                        {errors.address_number && (
                          <Text
                            appearance="p4"
                            className="mt-2"
                            color={red[900]}
                          >
                            {errors.address_number}
                          </Text>
                        )}
                      </li>
                    </ul>
                    <ul className="flex flex-wrap mb-6 space-x-8">
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Complemento
                        </Text>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          name="complemento"
                          style={{
                            background: neutralLight[200],
                            borderColor: neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="text"
                          value={values.complemento}
                        />
                      </li>
                    </ul>
                    <ul className="flex mb-6 space-x-6">
                      <li className="flex-1">
                        <Text
                          appearance="p4"
                          className="mb-2"
                          color={neutralDark[500]}
                        >
                          Estado
                        </Text>
                        <div className="flex items-center">
                          <Field
                            as="select"
                            className="appearance-none border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                            name="address_state"
                            onChange={(e) => {
                              setFieldValue('address_state', e.target.value);
                              filterCities(e.target.value);
                            }}
                            style={{
                              background: neutralLight[200],
                              borderColor: errors.address_state
                                ? red[900]
                                : neutralLight[400],
                              color: neutralMid[500]
                            }}
                            value={values.address_state}
                          >
                            <option value="">Selecione</option>
                            {estados?.map((estado) => (
                              <option key={estado?.sigla} value={estado?.sigla}>
                                {estado?.nome}
                              </option>
                            ))}
                          </Field>
                          <SolidIcon
                            icon="faChevronDown"
                            iconColor={neutralMid[500]}
                            newClasses="h-4 -ml-10"
                          />
                        </div>
                        {errors.address_state && (
                          <Text
                            appearance="p4"
                            className="mt-2"
                            color={red[900]}
                          >
                            {errors.address_state}
                          </Text>
                        )}
                      </li>
                      <li className="flex-1">
                        <Text
                          appearance="p4"
                          className="mb-2"
                          color={neutralDark[500]}
                        >
                          Cidade
                        </Text>
                        <div className="flex items-center">
                          <Field
                            as="select"
                            className="appearance-none border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                            name="address_story"
                            onChange={(e) => {
                              setFieldValue('address_story', e.target.value);
                            }}
                            style={{
                              background: neutralLight[200],
                              borderColor: errors.address_story
                                ? red[900]
                                : neutralLight[400],
                              color: neutralMid[500]
                            }}
                            value={values.address_story}
                          >
                            <option value="">Selecione</option>
                            {values?.cities?.map((city) => (
                              <option key={city?.name} value={city?.name}>
                                {city?.name}
                              </option>
                            ))}
                          </Field>
                          <SolidIcon
                            icon="faChevronDown"
                            iconColor={neutralMid[500]}
                            newClasses="h-4 -ml-10"
                          />
                        </div>
                        {errors.address_story && (
                          <Text
                            appearance="p4"
                            className="mt-2"
                            color={red[900]}
                          >
                            {errors.address_story}
                          </Text>
                        )}
                      </li>
                    </ul>
                    <ul className="flex flex-wrap mb-6 space-x-8">
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Bairro
                        </Text>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          maxLength={LOGRADOURO_MAX_LENGTH}
                          name="bairro"
                          style={{
                            background: neutralLight[200],
                            borderColor: errors.bairro
                              ? red[900]
                              : neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="text"
                          value={values.bairro}
                        />
                        {errors.bairro && (
                          <Text
                            appearance="p4"
                            className="mt-2"
                            color={red[900]}
                          >
                            {errors.bairro}
                          </Text>
                        )}
                      </li>
                    </ul>
                  </>
                )}
                {values.forma_pagamento === 'pix' && (
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Text appearance="p3" color={neutralMid[500]}>
                        Pix é a nova modalidade de transferência do Banco
                        Central que funciona 24 horas por dia e possue
                        confirmação em tempo real
                      </Text>
                    </li>
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
