'use client';
import Image from 'next/image';
import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
        className="absolute flex left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-auto w-10/12 lg:w-8/12"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="hidden lg:flex flex-col space-y-8 p-10 w-1/2"
          style={{
            background: 'linear-gradient(265deg, #CF2932 0%, #77335F 100%)'
          }}
        >
          <div className="bg-white drop-shadow flex justify-center items-center h-20 w-20 rounded-full">
            <Image
              alt="Sempre mensalidade"
              height={22}
              quality={100}
              src="/icon-call-5.svg"
              width={22}
            />
          </div>
          <h1 className="font-serif font-bold text-white text-4xl">
            Ligamos para você
          </h1>
          <p className="font-sans text-white">
            Preencha os seus dados e em seguida clique em ME LIGUE AGORA.
          </p>
          <p className="font-sans text-white">
            Entraremos em contato em até 30 segundos se estivermos em horário
            comercial.
          </p>
        </div>
        <div className="bg-white p-6 w-full lg:w-1/2">
          <div className="flex justify-end">
            <FontAwesomeIcon
              className="cursor-pointer h-8 w-8 text-custom-orange"
              icon={faXmark}
              onClick={onClose}
            />
          </div>
          <div className="p-10">
            <Formik
              initialValues={{ mail: '', name: '', phone: '' }}
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
                phone: Yup.string().required('Obrigatório')
              })}
            >
              {({ errors, values }) => (
                <Form>
                  <ul className="flex flex-col space-y-6">
                    <li className="flex flex-col space-y-2">
                      <label
                        htmlFor="name"
                        className="font-sans font-semibold text-custom-purple"
                      >
                        Nome
                      </label>
                      <Field
                        className="bg-transparent border border-custom-purple font-sans px-4 py-2 placeholder:text-soft-gray text-soft-gray rounded w-full"
                        name="name"
                        placeholder="Insira seu nome"
                        type="text"
                        value={values.name}
                      />
                      {errors.name && (
                        <span className="text-red-600 text-sm">
                          {errors.name}
                        </span>
                      )}
                    </li>
                    <li className="flex flex-col space-y-2">
                      <label
                        htmlFor="mail"
                        className="font-sans font-semibold text-custom-purple"
                      >
                        E-mail
                      </label>
                      <Field
                        className="bg-transparent border border-custom-purple font-sans px-4 py-2 placeholder:text-soft-gray text-soft-gray rounded w-full"
                        name="mail"
                        placeholder="Insira seu e-mail"
                        type="email"
                        value={values.mail}
                      />
                      {errors.name && (
                        <span className="text-red-600 text-sm">
                          {errors.mail}
                        </span>
                      )}
                    </li>
                    <li className="flex flex-col space-y-2">
                      <label
                        htmlFor="phone"
                        className="font-sans font-semibold text-custom-purple"
                      >
                        Celular ou Whatsapp
                      </label>
                      <Field
                        className="bg-transparent border border-custom-purple font-sans px-4 py-2 placeholder:text-soft-gray text-soft-gray rounded w-full"
                        name="phone"
                        placeholder="Insira seu número"
                        type="text"
                        value={values.phone}
                      />
                      {errors.name && (
                        <span className="text-red-600 text-sm">
                          {errors.phone}
                        </span>
                      )}
                    </li>
                    {loading && (
                      <Image
                        alt="Sempre Tecnologia"
                        height={50}
                        quality={100}
                        src="/loading.svg"
                        width={50}
                      />
                    )}
                    {messageMail && (
                      <p className="font-serif font-bold text-2xl text-gray-600">
                        {messageMail}
                      </p>
                    )}
                    <li>
                      <button
                        className="bg-white font-sans font-bold py-4 text-white rounded w-2/3"
                        style={{
                          background:
                            'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
                        }}
                        type="submit"
                      >
                        Me ligue agora
                      </button>
                    </li>
                  </ul>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
