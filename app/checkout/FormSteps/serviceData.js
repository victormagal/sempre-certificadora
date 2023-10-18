import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  blue,
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from '@/app/base/Colors';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';
import { getAllBranches, getAllStates } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';
import { Field, useFormikContext } from 'formik';

export default function ServiceData({ product, products, setService }) {
  const { errors, setFieldValue, values } = useFormikContext();
  const [states, setStates] = useState([]);
  const [stories, setStories] = useState([]);

  useQuery(getAllStates, {
    onCompleted: ({ estados: { data } }) => {
      data.map(({ attributes: { label, uf } }) => {
        const node = {
          estado: label,
          uf: uf
        };
        setStates((prevState) => [...prevState, node]);
      });
    }
  });
  useQuery(getAllBranches, {
    onCompleted: ({ filiais: { data } }) => {
      data.map(
        ({
          attributes: {
            label,
            telefone,
            celular,
            endereco,
            mapa,
            estado: {
              data: {
                attributes: { label: labelState, uf }
              }
            },
            id_filial
          }
        }) => {
          const node = {
            endereco: endereco,
            estado: labelState,
            cidade: label,
            mapa: mapa,
            telefone: telefone,
            celular: celular,
            uf: uf,
            id: id_filial
          };
          setStories((prevState) => [...prevState, node]);
        }
      );
    }
  });

  const filterStories = (value) => {
    const selectedStories = [];
    stories.map((story) => {
      if (story.uf === value) {
        selectedStories.push(story);
      }
    });
    setFieldValue('filtered_stories', selectedStories);
  };

  const storyDetails = (value) => {
    values.filtered_stories.map((story) => {
      if (story.cidade === value) {
        setFieldValue('detailed_story', story);
        setFieldValue('filial', story.id);
      }
    });
  };

  useEffect(() => {
    const result = products.find(
      (item) =>
        item.nome === product.nome &&
        item.validade === product.validade &&
        item.certificado === product.certificado &&
        item.tipo_atendimento === values.tipo_atendimento
    );
    setFieldValue('id_produto', result?.id_produto);
  }, [values.tipo_atendimento]);

  return (
    <Container>
      <div className="border col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col my-6 py-8 px-6 lg:px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Modelo de atendimento
        </Title>
        <div
          className="flex justify-center p-4 rounded w-full"
          style={{ background: blue[200] }}
        >
          <Text appearance="p4" color={blue[900]}>
            O valor do certificado pode variar de acordo com o modelo de
            atendimento escolhido
          </Text>
        </div>
        {errors.tipo_atendimento && (
          <div
            className="flex justify-center p-4 rounded w-full"
            style={{ background: red[100] }}
          >
            <Field
              className="hidden"
              name="has_atendimento"
              type="hidden"
              value={values.tipo_atendimento}
            />
            <Text appearance="p4" color={red[1200]}>
              {errors.tipo_atendimento}
            </Text>
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:space-x-16 w-full">
          <ul className="flex flex-col space-y-4 w-full lg:w-2/5" role="group">
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => {
                setFieldValue('has_atendimento', false);
                setFieldValue('tipo_atendimento', 'videoconferencia');
                setService('videoconferencia');
              }}
              style={{
                borderColor:
                  values.tipo_atendimento === 'videoconferencia'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div
                className="h-8 flex items-center justify-center rounded-full w-10"
                style={{ background: red[100] }}
              >
                <RegularIcon
                  icon="faCirclePlay"
                  iconColor={red[900]}
                  newClasses="h-4"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Title appearance="h6" color={neutralDark[500]}>
                  Videoconferência
                </Title>
                <Text appearance="p4" color={neutralDark[500]}>
                  Fale com a nossa equipe por vídeo com toda a comodidade.
                </Text>
              </div>
              <RegularIcon
                icon={`${
                  values.tipo_atendimento === 'videoconferencia'
                    ? 'faCircleDot'
                    : 'faCircle'
                }`}
                iconColor={
                  values.tipo_atendimento === 'videoconferencia'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => {
                setFieldValue('has_atendimento', true);
                setFieldValue('tipo_atendimento', 'presencial');
                setService('presencial');
              }}
              style={{
                borderColor:
                  values.tipo_atendimento === 'presencial'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div
                className="h-8 flex items-center justify-center rounded-full w-10"
                style={{ background: red[100] }}
              >
                <RegularIcon
                  icon="faUser"
                  iconColor={red[900]}
                  newClasses="h-4"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Title appearance="h6" color={neutralDark[500]}>
                  Presencial
                </Title>
                <Text appearance="p4" color={neutralDark[500]}>
                  Seja atendido em uma de nossas filiais de atendimento.
                </Text>
              </div>
              <RegularIcon
                icon={`${
                  values.tipo_atendimento === 'presencial'
                    ? 'faCircleDot'
                    : 'faCircle'
                }`}
                iconColor={
                  values.tipo_atendimento === 'presencial'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => {
                setFieldValue('has_atendimento', true);
                setFieldValue('tipo_atendimento', 'express');
                setService('express');
              }}
              style={{
                borderColor:
                  values.tipo_atendimento === 'express'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div
                className="h-8 flex items-center justify-center rounded-full w-10"
                style={{ background: red[100] }}
              >
                <RegularIcon
                  icon="faUser"
                  iconColor={red[900]}
                  newClasses="h-4"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Title appearance="h6" color={neutralDark[500]}>
                  Delivery
                </Title>
                <Text appearance="p4" color={neutralDark[500]}>
                  Não se preocupe! Para sua comodidade, nós vamos até você.
                </Text>
              </div>
              <RegularIcon
                icon={`${
                  values.tipo_atendimento === 'express'
                    ? 'faCircleDot'
                    : 'faCircle'
                }`}
                iconColor={
                  values.tipo_atendimento === 'express'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
          </ul>
          <div className="mt-6 lg:mt-0 w-full lg:w-3/5">
            {values.tipo_atendimento === 'videoconferencia' && (
              <ul className="flex flex-col space-y-4">
                <li>
                  <Text appearance="p3" color={neutralMid[500]}>
                    <b>Observação:</b> Para atendimento via videoconferência é
                    necessário ter smartphone, tablet ou computador com câmera e
                    conexão com internet de boa qualidade.
                  </Text>
                </li>
                <li>
                  <Text appearance="p3" color={neutralMid[500]}>
                    <b>Atenção:</b> Um de nossos especialistas entrará em
                    contato após a confirmação de pagamento.
                  </Text>
                </li>
              </ul>
            )}
            {(values.tipo_atendimento === 'presencial' ||
              values.tipo_atendimento === 'express') && (
              <>
                <ul className="flex flex-col lg:flex-row mb-6 lg:space-x-6 space-y-6 lg:space-y-0">
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
                        name="estado"
                        onChange={(e) => {
                          setFieldValue('estado', e.target.value);
                          filterStories(e.target.value);
                        }}
                        style={{
                          background: neutralLight[200],
                          borderColor: errors.estado
                            ? red[900]
                            : neutralLight[400],
                          color: neutralMid[500]
                        }}
                        value={values.estado}
                      >
                        <option value="">Selecione</option>
                        {states?.map((state) => (
                          <option key={state?.uf} value={state?.uf}>
                            {state?.estado}
                          </option>
                        ))}
                      </Field>
                      <SolidIcon
                        icon="faChevronDown"
                        iconColor={neutralMid[500]}
                        newClasses="h-4 -ml-10"
                      />
                    </div>
                    {errors.estado && (
                      <Text appearance="p4" className="mt-2" color={red[900]}>
                        {errors.estado}
                      </Text>
                    )}
                  </li>
                  <li className="flex-1">
                    <Text
                      appearance="p4"
                      className="mb-2"
                      color={neutralDark[500]}
                    >
                      Unidade
                    </Text>
                    <div className="flex items-center">
                      <Field
                        as="select"
                        className="appearance-none border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                        name="cidade"
                        onChange={(e) => {
                          setFieldValue('cidade', e.target.value);
                          storyDetails(e.target.value);
                        }}
                        style={{
                          background: neutralLight[200],
                          borderColor: errors.cidade
                            ? red[900]
                            : neutralLight[400],
                          color: neutralMid[500]
                        }}
                        value={values.cidade}
                      >
                        <option value="">Selecione</option>
                        {values?.filtered_stories?.map((filteredStory) => (
                          <option
                            key={filteredStory?.cidade}
                            value={filteredStory?.cidade}
                          >
                            {filteredStory?.cidade}
                          </option>
                        ))}
                      </Field>
                      <SolidIcon
                        icon="faChevronDown"
                        iconColor={neutralMid[500]}
                        newClasses="h-4 -ml-10"
                      />
                    </div>
                    {errors.cidade && (
                      <Text appearance="p4" className="mt-2" color={red[900]}>
                        {errors.cidade}
                      </Text>
                    )}
                  </li>
                </ul>
                {values.tipo_atendimento === 'presencial' &&
                  Object.keys(values?.detailed_story).length !== 0 && (
                    <div
                      className="flex p-8 rounded space-x-6"
                      style={{ backgroundColor: neutralLight[200] }}
                    >
                      <div className="flex flex-col space-y-4">
                        <Title appearance="h5" color={neutralDark[500]}>
                          Loja Sempre Tecnologia{' '}
                          {values?.detailed_story?.cidade}
                        </Title>
                        <Text appearance="p4" color={neutralDark[500]}>
                          {values?.detailed_story?.telefone}
                          {' / '}
                          {values?.detailed_story?.celular}
                        </Text>
                        <Text appearance="p3" color={neutralMid[500]}>
                          {values?.detailed_story?.endereco}
                        </Text>
                        <Link
                          href={values?.detailed_story?.mapa || `/`}
                          target="_blank"
                        >
                          <button
                            className="flex items-center space-x-3"
                            type="button"
                          >
                            <Text appearance="p3" color={blue[800]}>
                              Ver no mapa
                            </Text>
                            <SolidIcon
                              icon="faChevronRight"
                              iconColor={blue[800]}
                              newClasses="h-3"
                            />
                          </button>
                        </Link>
                      </div>
                      <div>
                        <RegularIcon
                          icon="faCircleDot"
                          iconColor={red[600]}
                          newClasses="h-6"
                        />
                      </div>
                    </div>
                  )}
                {values.tipo_atendimento === 'express' && (
                  <Text appearance="p3" color={neutralMid[500]}>
                    <b>Atenção:</b> Um de nossos especialistas entrará em
                    contato após a confirmação de pagamento.
                  </Text>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
