'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import {
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from '../../../base/Colors';
import { Overline, Text, Title } from '../../../base/Typography';
import Container from '../Container';
import { cities, states } from './data';
import SolidIcon from '@/app/base/SolidIcon';

export default function Locations() {
  const [phones, setPhones] = useState([
    '(61)3045-5090',
    '(61)99314-8813',
    '(61)99312-0192'
  ]);
  const [stores, setStores] = useState([]);
  const [whatsapp, setWhatsapp] = useState('(61)99252-2820');

  const getCities = (e) => {
    const {
      target: { value }
    } = e;

    const { counties } = cities.find((city) => city.state === value);
    setStores(counties);
  };

  const getDetails = (e) => {
    const {
      target: { value, children }
    } = e;

    const target = [...children].find(
      (element) => element.textContent === value
    );
    const { phones, whatsapp: storeWhatsapp } = target.dataset;
    const phonesList = phones.replace(/\s/g, '').split(',');

    setPhones(phonesList);
    setWhatsapp(storeWhatsapp);
  };

  return (
    <div id="mapLocations" className={styles.container}>
      <Container newClasses="pb-12 pt-24">
        <div className="col-span-6 col-start-4 text-center">
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
            São + de 25 unidades para atendimento.
          </Text>
        </div>
      </Container>
      <Container newClasses="pb-24">
        <div className="col-span-4 lg:col-span-3 lg:col-start-4 flex flex-col mb-12">
          <Text appearance="p4" className="mb-2" color={neutralDark[500]}>
            Estado
          </Text>
          <div className="flex items-center">
            <select
              className="appearance-none p-3 rounded w-full"
              onClick={getCities}
              style={{
                background: neutralLight[200],
                border: `1px solid ${neutralLight[400]}`,
                color: neutralMid[500]
              }}
            >
              <option defaultValue="default">Filtrar por estado</option>
              {states.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
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
        <div className="col-span-4 lg:col-span-3 flex flex-col mb-12">
          <Text appearance="p4" className="mb-2" color={neutralDark[500]}>
            Unidade
          </Text>
          <div className="flex items-center">
            <select
              className="appearance-none p-3 rounded w-full"
              onChange={getDetails}
              style={{
                background: neutralLight[200],
                border: `1px solid ${neutralLight[400]}`,
                color: neutralMid[500]
              }}
            >
              <option defaultValue="default">Filtrar por loja</option>
              {stores.map(({ id, map, name, phones, whatsapp }) => (
                <option
                  data-location={map}
                  data-phones={phones}
                  data-whatsapp={whatsapp}
                  key={id}
                  value={name}
                >
                  {name}
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
        <div className="col-span-3 col-start-4 flex flex-col items-center">
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
          <Title appearance="h5">Endereço</Title>
          <Text appearance="p4" className="my-2">
            Venha nos fazer uma visita
          </Text>
          <Title appearance="h7" className="text-center" color={red[1000]}>
            Endereço aqui
          </Title>
        </div>
        <div className="col-span-3 flex flex-col items-center">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon icon="faPhone" iconColor={red[700]} newClasses="h-5" />
          </div>
          <Title appearance="h5">Telefone</Title>
          <Text appearance="p4" className="my-2">
            Nosso time está aqui para te ajudar
          </Text>
          <ul className="flex flex-col space-y-1 text-center">
            {phones.map((phone) => (
              <li key={phone}>
                <Title appearance="h7" color={red[1000]}>
                  {phone}
                </Title>
              </li>
            ))}
            <li>
              <Title appearance="h7" color={red[1000]}>
                {whatsapp}
              </Title>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
