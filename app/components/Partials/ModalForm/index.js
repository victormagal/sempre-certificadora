'use client';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  neutralDark,
  neutralLight,
  neutralMid,
  red,
  success
} from '@/app/base/Colors';
import { maskPhoneNumber } from '@/app/base/Masks';
import { Text, Title } from '@/app/base/Typography';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ModalForm({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [messageMail, setMessageMail] = useState('');

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="bg-overlay-black fixed h-screen w-screen z-60"
    >
      <div
        className="absolute flex left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-auto w-[360px] md:w-[500px]"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="bg-white p-8 rounded-lg">
          <header className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <Title appearance="h4" color={neutralDark[500]} extra>
                Ligamos para você
              </Title>
              <Text appearance="p4" color={neutralMid[600]}>
                Preencha os dados abaixo e entraremos em contato em breve.
              </Text>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer h-6 w-6"
              color={neutralMid[500]}
              icon={faXmark}
              onClick={onClose}
            />
          </header>
          <Formik
            initialValues={{ mail: '', name: '', phone: '', subject: '' }}
            onSubmit={(values) => {
              setLoading(true);
              const config = {
                headers: {
                  'mz-integration': 'sempre',
                  'Content-Type': 'application/json'
                }
              };

              const body = JSON.stringify({
                contato_nome: values.name,
                contato_email: values.mail,
                contato_telefone: values.phone,
                contato_origem: 'site_st'
              });

              axios
                .post(
                  'https://bot.sempretecnologia.com.br/index.php/fila/criaMensagem',
                  body,
                  config
                )
                .then(({ status }) => {
                  setLoading(false);
                  if (status === 200) {
                    setMessageMail(
                      'Enviado com sucesso! Em breve entraremos em contato.'
                    );
                  } else {
                    setMessageMail(
                      'Não foi possível no momento. Tente novamente mais tarde.'
                    );
                  }
                });
            }}
            validationSchema={Yup.object({
              mail: Yup.string()
                .email('E-mail inválido')
                .required('Obrigatório'),
              name: Yup.string().required('Obrigatório'),
              phone: Yup.string()
                .required('Obrigatório')
                .min(10, 'Telefone inválido'),
              subject: Yup.string().required('Obrigatório')
            })}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ errors, values }) => (
              <Form>
                <ul className="flex flex-col mt-8 space-y-6">
                  <li className="flex flex-col space-y-2">
                    <Text appearance="p4" color={neutralDark[500]}>
                      Assunto
                    </Text>
                    {loading ? (
                      <Skeleton />
                    ) : (
                      <>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          name="subject"
                          style={{
                            background: neutralLight[200],
                            borderColor: errors.subject
                              ? red[900]
                              : neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="text"
                          value={values.subject}
                        />
                        {errors.subject && (
                          <Text appearance="p4" color={red[900]}>
                            {errors.subject}
                          </Text>
                        )}
                      </>
                    )}
                  </li>
                  <li className="flex flex-col space-y-2">
                    <Text appearance="p4" color={neutralDark[500]}>
                      Nome
                    </Text>
                    {loading ? (
                      <Skeleton />
                    ) : (
                      <>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          name="name"
                          style={{
                            background: neutralLight[200],
                            borderColor: errors.name
                              ? red[900]
                              : neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="text"
                          value={values.name}
                        />
                        {errors.name && (
                          <Text appearance="p4" color={red[900]}>
                            {errors.name}
                          </Text>
                        )}
                      </>
                    )}
                  </li>
                  <li className="flex flex-col space-y-2">
                    <Text appearance="p4" color={neutralDark[500]}>
                      E-mail
                    </Text>
                    {loading ? (
                      <Skeleton />
                    ) : (
                      <>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          name="mail"
                          style={{
                            background: neutralLight[200],
                            borderColor: errors.mail
                              ? red[900]
                              : neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="email"
                          value={values.mail}
                        />
                        {errors.mail && (
                          <Text appearance="p4" color={red[900]}>
                            {errors.mail}
                          </Text>
                        )}
                      </>
                    )}
                  </li>
                  <li className="flex flex-col space-y-2">
                    <Text appearance="p4" color={neutralDark[500]}>
                      Celular ou Whatsapp
                    </Text>
                    {loading ? (
                      <Skeleton />
                    ) : (
                      <>
                        <Field
                          className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                          maxLength="15"
                          name="phone"
                          style={{
                            background: neutralLight[200],
                            borderColor: errors.phone
                              ? red[900]
                              : neutralLight[400],
                            color: neutralMid[500]
                          }}
                          type="text"
                          value={maskPhoneNumber(values.phone)}
                        />
                        {errors.phone && (
                          <Text appearance="p4" color={red[900]}>
                            {errors.phone}
                          </Text>
                        )}
                      </>
                    )}
                  </li>
                  {messageMail && (
                    <Title
                      appearance="h5"
                      className="text-center"
                      color={neutralDark[500]}
                    >
                      {messageMail}
                    </Title>
                  )}
                </ul>
                <ul className="flex flex-grow mt-8 space-x-6">
                  <li className="flex-1">
                    <button
                      className="border py-4 rounded-md w-full"
                      onClick={onClose}
                      style={{
                        backgroundColor: neutralLight[100],
                        borderColor: neutralLight[500]
                      }}
                      type="button"
                    >
                      <Title appearance="h7" color={neutralDark[500]}>
                        Cancelar
                      </Title>
                    </button>
                  </li>
                  <li className="flex-1">
                    <button
                      className="py-4 rounded-md w-full"
                      style={{
                        backgroundColor: success[800]
                      }}
                      type="submit"
                    >
                      <Title appearance="h7" color={neutralLight[100]}>
                        Me ligue agora
                      </Title>
                    </button>
                  </li>
                </ul>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
