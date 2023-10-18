/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  neutralDark,
  neutralLight,
  neutralMid,
  red,
  support
} from '../base/Colors';
import { SolidIcon } from '../base/Icons';
import { Text, Title } from '../base/Typography';
import { Container, HeroPage } from '../components/Elements';
import { ModalVimeo } from '../components/Partials';

export default function CertificadoA1() {
  const [openModalVimeo, setOpenModalVimeo] = useState(false);

  return (
    <main className="pt-24">
      <ModalVimeo
        open={openModalVimeo}
        onClose={() => setOpenModalVimeo(false)}
        link="https://player.vimeo.com/video/677139573?h=cd70bfdebc"
      />
      <HeroPage
        endGradient="#1D3E89"
        gradient={true}
        initGradient="#3A1078"
        newClasses="items-center py-24"
      >
        <div className="col-span-4 lg:col-span-5 flex flex-col pt-8 lg:pt-0 space-y-4">
          <Text appearance="p3" color={neutralLight[100]}>
            Suporte
          </Text>
          <Title appearance="h1" color={neutralLight[100]} extra>
            Instalação Certificado A1
          </Title>
          <Text appearance="p1" color={neutralLight[100]}>
            Tutorial passo a passo para instalação do Certificado A1
          </Text>
        </div>
        <div
          className="lg:col-end-12 col-span-4 lg:col-span-3 flex flex-col items-start p-8 rounded-xl space-y-6"
          style={{ backgroundColor: neutralLight[100] }}
        >
          <SolidIcon icon="faLaptop" iconColor={red[600]} newClasses="h-10" />
          <Text appearance="p1" color={neutralDark[500]} extra>
            Assistente de Certificado Digital A1
          </Text>
          <ul className="flex flex-col space-y-2 w-full">
            <Link
              href="https://res.cloudinary.com/delhbbobv/raw/upload/v1697571612/Assistente_Certificado_Digital_8ab51c4daf.application"
              target="_blank"
            >
              <li
                className="flex items-center justify-center p-4 rounded-md space-x-3"
                style={{ background: red[1000] }}
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Download
                </Text>
                <SolidIcon
                  icon="faDownload"
                  iconColor={neutralLight[100]}
                  newClasses="h-4"
                />
              </li>
            </Link>
          </ul>
        </div>
      </HeroPage>
      <Container newClasses="my-16">
        <div className="col-span-4 lg:col-span-12 flex justify-center mt-8">
          <Image
            className="cursor-pointer"
            height={388}
            onClick={() => setOpenModalVimeo(true)}
            src="/bg-play-home-quem-somos.png"
            width={1151}
          />
        </div>
      </Container>
      <Container newClasses="py-12">
        <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col space-y-8">
          <Title appearance="h3" color={neutralDark[500]}>
            Instalação do Certificado Digital A1
          </Title>
          <ul className="flex flex-col list-disc ml-4 space-y-3">
            <li>
              <Text appearance="p3" color={neutralMid[500]}>
                Para instalar o Certificado Digital A1 da Safeweb,
                primeiramente, é necessário ter em mãos o número do protocolo,
                CPF do titular e senha de instalação.
              </Text>
            </li>
            <li>
              <Text appearance="p3" color={neutralMid[500]}>
                Utilizar um computador com Windows 10 ou superior.
              </Text>
            </li>
          </ul>
          <Title appearance="h3" color={neutralDark[500]}>
            Instalação do Certificado Digital A1 em equipamentos mac OS
          </Title>
          <div
            className="flex p-6 space-x-4"
            style={{ backgroundColor: support[200] }}
          >
            <div>
              <SolidIcon
                icon="faCircleInfo"
                iconColor={support[600]}
                newClasses="h-4"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Title appearance="h7" color={support[1100]}>
                Instalação de certificados em sistemas mac OS
              </Title>
              <Text appearance="p4" color={support[1100]}>
                Para instalar o Certificado Digital A1 em equipamentos mac OS,
                obrigatoriamente a primeira instalação deverá ser executada em
                um equipamento com Windows 10 ou superior, conforme consta no
                vídeo acima, após isso, realizar os procedimentos abaixo.
              </Text>
            </div>
          </div>
          <ul className="flex flex-col list-disc ml-4 space-y-3">
            <li>
              <Text appearance="p3" color={neutralMid[500]}>
                Com o arquivo de exportação criado e enviado ao equipamento mac
                Os, dê um duplo clique sobre ele.
              </Text>
            </li>
            <li>
              <Text appearance="p3" color={neutralMid[500]}>
                Serão solicitadas duas senhas. Primeiro, a senha do equipamento
                e, logo após, a senha do certificado para que ele seja importado
                para o sistema.
              </Text>
            </li>
          </ul>
        </div>
      </Container>
    </main>
  );
}
