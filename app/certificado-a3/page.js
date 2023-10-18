/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { neutralDark, neutralLight, red } from '../base/Colors';
import { RegularIcon, SolidIcon } from '../base/Icons';
import { Text, Title } from '../base/Typography';
import { Container, HeroPage } from '../components/Elements';
import { Cartoes, Epass, Mac, Safenet, Sempre } from './Tokens';

export default function CertificadoA3() {
  const [selectedToken, setSelectedToken] = useState(1);

  return (
    <main className="pt-24">
      <HeroPage
        endGradient="#1D3E89"
        gradient={true}
        initGradient="#3A1078"
        newClasses="items-center"
      >
        <div className="col-span-4 lg:col-span-5 flex flex-col pt-8 lg:pt-0 space-y-4">
          <Text appearance="p3" color={neutralLight[100]}>
            Suporte
          </Text>
          <Title appearance="h1" color={neutralLight[100]} extra>
            Instalação Certificado A3
          </Title>
          <Text appearance="p1" color={neutralLight[100]}>
            Tutorial passo a passo de instalação do Certificado A3 para Token e
            Cartão
          </Text>
        </div>
        <div className="lg:col-end-13 col-span-4 lg:col-span-6 flex justify-end">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={606}
            src="/modelo-certificado-a3.png"
            width={539}
          />
        </div>
      </HeroPage>
      <Container newClasses="my-16">
        <div className="col-span-4 lg:col-span-12">
          <ul className="flex flex-col lg:flex-row flex-grow justify-between space-y-6 lg:space-y-6 lg:space-x-6">
            <li
              className="border cursor-pointer flex flex-1 flex-col items-start justify-around space-y-4 p-6 rounded-lg"
              onClick={() => setSelectedToken(1)}
              style={{
                borderColor: selectedToken === 1 ? red[600] : neutralLight[400]
              }}
            >
              <RegularIcon
                icon="faHardDrive"
                iconColor={red[600]}
                newClasses="h-10"
              />
              <Title appearance="h6" color={neutralDark[500]}>
                Token Sempre Tecnologia
              </Title>
            </li>
            <li
              className="border cursor-pointer flex flex-1 flex-col items-start justify-around space-y-4 p-6 rounded-lg"
              onClick={() => setSelectedToken(2)}
              style={{
                borderColor: selectedToken === 2 ? red[600] : neutralLight[400]
              }}
            >
              <RegularIcon
                icon="faHardDrive"
                iconColor={red[600]}
                newClasses="h-10"
              />
              <Title appearance="h6" color={neutralDark[500]}>
                Token Safenet
              </Title>
            </li>
            <li
              className="border cursor-pointer flex flex-1 flex-col items-start justify-around space-y-4 p-6 rounded-lg"
              onClick={() => setSelectedToken(3)}
              style={{
                borderColor: selectedToken === 3 ? red[600] : neutralLight[400]
              }}
            >
              <RegularIcon
                icon="faHardDrive"
                iconColor={red[600]}
                newClasses="h-10"
              />
              <Title appearance="h6" color={neutralDark[500]}>
                Token EPASS 2003
              </Title>
            </li>
            <li
              className="border cursor-pointer flex flex-1 flex-col items-start justify-around space-y-4 p-6 rounded-lg"
              onClick={() => setSelectedToken(4)}
              style={{
                borderColor: selectedToken === 4 ? red[600] : neutralLight[400]
              }}
            >
              <RegularIcon
                icon="faCreditCard"
                iconColor={red[600]}
                newClasses="h-10"
              />
              <Title appearance="h6" color={neutralDark[500]}>
                Cartões e leitoras inteligentes Sempre Tecnologia
              </Title>
            </li>
            <li
              className="border cursor-pointer flex flex-1 flex-col items-start justify-around space-y-4 p-6 rounded-lg"
              onClick={() => setSelectedToken(5)}
              style={{
                borderColor: selectedToken === 5 ? red[600] : neutralLight[400]
              }}
            >
              <SolidIcon
                icon="faDesktop"
                iconColor={red[600]}
                newClasses="h-10"
              />
              <Title appearance="h6" color={neutralDark[500]}>
                Instalação em equipamentos macOS
              </Title>
            </li>
          </ul>
        </div>
      </Container>
      {selectedToken === 1 && <Sempre />}
      {selectedToken === 2 && <Safenet />}
      {selectedToken === 3 && <Epass />}
      {selectedToken === 4 && <Cartoes />}
      {selectedToken === 5 && <Mac />}
    </main>
  );
}
