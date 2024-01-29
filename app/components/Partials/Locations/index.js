'use client';
import { useState } from 'react';
import {
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from '../../../base/Colors';
import { Overline, Text, Title } from '../../../base/Typography';
import { Container } from '../../Elements';
import { SolidIcon } from '@/app/base/Icons';
import { getAllBranches, getAllStates } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function Locations() {
  const [states, setStates] = useState([]);
  const [stories, setStories] = useState([]);
  const [storiesFiltered, setStoriesFiltered] = useState([]);
  const [storySelected, setStorySelected] = useState({});

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
            }
          }
        }) => {
          const node = {
            endereco: endereco,
            estado: labelState,
            cidade: label,
            mapa: mapa,
            telefone: telefone,
            celular: celular,
            uf: uf
          };
          setStories((prevState) => [...prevState, node]);
        }
      );
    }
  });

  const filterStories = (e) => {
    const {
      target: { value }
    } = e;

    const selectedStories = [];
    stories.map((story) => {
      if (story.uf === value) {
        selectedStories.push(story);
      }
    });
    setStoriesFiltered(selectedStories);
  };

  const storyDetails = (e) => {
    const {
      target: { value }
    } = e;

    storiesFiltered.map((story) => {
      if (story.cidade === value) {
        setStorySelected(story);
      }
    });
  };

  return (
    <div className="py-16">
      <Container>
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 text-center">
          <Overline appearance="o1" color={red[700]}>
            Unidades
          </Overline>
          <Title
            appearance="h2"
            className="my-4"
            color={neutralDark[500]}
            extra={true}
          >
            Temos uma unidade perto de você.
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            São mais de 15 unidades para atendimento.
          </Text>
        </div>
      </Container>
      <Container newClasses="pt-16">
        <div className="col-span-4 md:col-span-2 lg:col-span-3 lg:col-start-4 flex flex-col lg:mb-12">
          <Text appearance="p4" className="mb-2" color={neutralDark[500]}>
            Estado
          </Text>
          <div className="flex items-center">
            <select
              className="appearance-none p-3 rounded w-full"
              onChange={filterStories}
              style={{
                background: neutralLight[200],
                border: `1px solid ${neutralLight[400]}`,
                color: neutralMid[500]
              }}
            >
              <option value="">Filtrar por estado</option>
              {states.map(({ estado, uf }) => (
                <option key={uf} value={uf}>
                  {estado}
                </option>
              ))}
            </select>
            <SolidIcon
              icon="faChevronDown"
              iconColor={neutralMid[500]}
              newClasses="h-4 -ml-10"
            />
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-3 flex flex-col mb-12">
          <Text appearance="p4" className="mb-2" color={neutralDark[500]}>
            Unidade
          </Text>
          <div className="flex items-center">
            <select
              className="appearance-none p-3 rounded w-full"
              onChange={storyDetails}
              style={{
                background: neutralLight[200],
                border: `1px solid ${neutralLight[400]}`,
                color: neutralMid[500]
              }}
            >
              <option value="">Filtrar por loja</option>
              {storiesFiltered.map(({ cidade }) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
            <SolidIcon
              icon="faChevronDown"
              iconColor={neutralMid[500]}
              newClasses="h-4 -ml-10"
            />
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-3 lg:col-start-4 flex flex-col items-center mb-4 lg:mb-0">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon
              icon="faLocationDot"
              iconColor={red[700]}
              newClasses="h-5"
            />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Endereço
          </Title>
          <Text
            appearance="p4"
            className="my-4 text-center"
            color={neutralMid[500]}
          >
            Venha nos fazer uma visita
          </Text>
          <Title appearance="h7" className="text-center" color={red[1000]}>
            {storySelected?.endereco}
          </Title>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-3 flex flex-col items-center">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon icon="faPhone" iconColor={red[700]} newClasses="h-5" />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Telefone
          </Title>
          <Text
            appearance="p4"
            className="my-4 text-center"
            color={neutralMid[500]}
          >
            Nosso time está aqui para te ajudar
          </Text>
          <ul className="flex flex-col space-y-1 text-center">
            <li>
              <Title appearance="h7" color={red[1000]}>
                {storySelected?.telefone}
              </Title>
            </li>
            <li>
              <Title appearance="h7" color={red[1000]}>
                {storySelected?.celular}
              </Title>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
