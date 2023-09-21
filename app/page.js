'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { neutralDark, neutralLight, neutralMid, red } from './base/Colors';
import { RegularIcon, SolidIcon } from './base/Icons';
import { Overline, Text, Title } from './base/Typography';
import {
  CardFeature,
  Container,
  Doubts,
  HeroPage
} from './components/Elements';
import { Testimonies } from './components/Partials';
import { CertificadoPF, CertificadoPJ } from './components/Products';
import { doubts } from './data';

export default function Certificadora() {
  const [showPF, setShowPF] = useState(true);

  return (
    <main className="pt-24">
      <HeroPage
        endGradient="#1D3E89"
        gradient={true}
        initGradient="#3A1078"
        newClasses="items-center"
      >
        <div className="col-span-5 flex flex-col space-y-10">
          <Title appearance="h1" color={neutralLight[100]} extra>
            Certificado Digital: adquira um perfeito para você.
          </Title>
          <Text appearance="p3" color={neutralLight[100]}>
            Com a comodidade e segurança que você merece sem sair de casa.
          </Text>
          <Link href="/">
            <button
              className="py-4 px-8 rounded"
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Adquirir o meu
              </Text>
            </button>
          </Link>
        </div>
        <div className="col-end-13 col-span-6 flex justify-end">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={606}
            src="/avatar-certificadora.png"
            width={539}
          />
        </div>
      </HeroPage>
      <Container newClasses="my-16">
        <div className="col-span-6 col-start-4 flex flex-col items-center space-y-4">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={33}
            src="/logos/certificadora.svg"
            width={172}
          />
          <Title appearance="h1" color={red[1000]} extra>
            Certificado Digital:
          </Title>
          <Title appearance="h1" color={neutralDark[500]} extra>
            adquira o ideal pra você
          </Title>
        </div>
      </Container>
      <Container newClasses="pb-16">
        <nav className="col-span-4 col-start-5 flex justify-center">
          <ul
            className="border flex p-2 rounded space-x-4"
            style={{
              background: neutralLight[200],
              borderColor: neutralLight[400]
            }}
          >
            <li
              className={`cursor-pointer ${
                showPF && 'drop-shadow'
              } py-4 px-8 rounded`}
              onClick={() => setShowPF(true)}
              style={{ background: showPF ? neutralLight[100] : 'transparent' }}
            >
              <Title
                appearance="h7"
                color={showPF ? neutralDark[500] : neutralMid[400]}
              >
                Para você
              </Title>
            </li>
            <li
              className={`cursor-pointer ${
                !showPF && 'drop-shadow'
              } py-4 px-8 rounded`}
              onClick={() => setShowPF(false)}
              style={{
                background: !showPF ? neutralLight[100] : 'transparent'
              }}
            >
              <Title
                appearance="h7"
                color={!showPF ? neutralDark[500] : neutralMid[400]}
              >
                Para sua empresa
              </Title>
            </li>
          </ul>
        </nav>
      </Container>
      {showPF ? <CertificadoPF /> : <CertificadoPJ />}
      <Container newClasses="border-b border-t py-12">
        <div className="col-span-12 flex justify-between px-16">
          <div className="flex flex-col justify-center items-center">
            <Title appearance="h3" color={neutralDark[500]}>
              +200 mil
            </Title>
            <Title appearance="h6" color={neutralMid[600]}>
              certificados emitidos
            </Title>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Title appearance="h3" color={neutralDark[500]}>
              +25
            </Title>
            <Title appearance="h6" color={neutralMid[600]}>
              filiais abertas pelo país
            </Title>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Title appearance="h3" color={neutralDark[500]}>
              +10
            </Title>
            <Title appearance="h6" color={neutralMid[600]}>
              anos de mercado
            </Title>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Title appearance="h3" color={neutralDark[500]}>
              85%
            </Title>
            <Title appearance="h6" color={neutralMid[600]}>
              de satisfação no atendimento
            </Title>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Title appearance="h3" color={neutralDark[500]}>
              95%
            </Title>
            <Title appearance="h6" color={neutralMid[600]}>
              de satisfação pós-venda
            </Title>
          </div>
        </div>
      </Container>
      <Container newClasses="py-16">
        <div className="col-span-6 col-start-4 flex flex-col items-center space-y-4">
          <Overline appearance="o1" color={red[700]}>
            Nossas Vantagens
          </Overline>
          <Title
            appearance="h2"
            className="text-center"
            color={neutralDark[500]}
            extra
          >
            O que eu só encontro na Sempre Tecnologia?
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Soluções com tecnologia própria e entendimento diferenciado perto de
            você.
          </Text>
        </div>
      </Container>
      <Container newClasses="border-b pb-16">
        <CardFeature
          bgColor={neutralLight[200]}
          description="Um ambiente pensado para tornar o atendimento ágil e confortável"
          icon="faFaceSmileWink"
          iconColor={red[600]}
          iconSize="h-10"
          title="Ambiente moderno"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Temos mais de 25 filiais para garantir que tenha uma mais próxima a você"
          icon="faBuilding"
          iconColor={red[600]}
          iconSize="h-10"
          title="Filiais de atendimento"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Nossa equipe trabalha para garantir um processo rápido e seguro do Certificado Digital"
          icon="faFile"
          iconColor={red[600]}
          iconSize="h-10"
          title="Agilidade de emissão"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Equipe disponível e preparada para te auxiliar no que você precisar"
          icon="faUser"
          iconColor={red[600]}
          iconSize="h-10"
          title="Suporte ao cliente"
        />
      </Container>
      <Container
        bgContainer={neutralDark[600]}
        newClasses="items-center py-16 rounded-xl"
      >
        <div className="col-span-4 col-start-2">
          <Title appearance="h1" color={neutralLight[200]} extra>
            Precisa de ajuda? Conte com a gente.
          </Title>
          <Text
            appearance="p1"
            color={neutralLight[600]}
            className="mb-10 mt-6"
          >
            Confira o passo a passo para instalação do seu Certificado Digital.
          </Text>
          <ul className="flex space-x-6">
            <Link href="/">
              <li
                className="flex p-4 rounded-md space-x-3"
                style={{ background: red[1000] }}
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Manual de instruções
                </Text>
                <SolidIcon
                  icon="faDownload"
                  iconColor={neutralLight[100]}
                  newClasses="h-4"
                />
              </li>
            </Link>
            <Link href="/">
              <li
                className="border flex p-4 rounded-md space-x-3"
                style={{ borderColor: neutralLight[600] }}
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Fale conosco
                </Text>
                <RegularIcon
                  icon="faComments"
                  iconColor={neutralLight[100]}
                  newClasses="h-4"
                />
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-end-12 col-span-5 flex justify-end">
          <Image
            alt="Precisa de ajuda? Conte com a gente."
            height={360}
            src="/container-ajuda.png"
            width={436}
          />
        </div>
      </Container>
      <Testimonies />
      <Container newClasses="py-8">
        <ul className="col-span-12 flex justify-between">
          <li>
            <Image
              alt="Litoral"
              height={35}
              src="/parceiros/litoral.png"
              width={88}
            />
          </li>
          <li>
            <Image
              alt="SmartFit"
              height={35}
              src="/parceiros/smart-fit.png"
              width={98}
            />
          </li>
          <li>
            <Image
              alt="Coco Bambu"
              height={28}
              src="/parceiros/coco-bambu.png"
              width={134}
            />
          </li>
          <li>
            <Image
              alt="Sebrae"
              height={30}
              src="/parceiros/sebrae.png"
              width={56}
            />
          </li>
          <li>
            <Image
              alt="Magic Color"
              height={35}
              src="/parceiros/magic-color.png"
              width={56}
            />
          </li>
          <li>
            <Image
              alt="Valor Ambiental"
              height={38}
              src="/parceiros/valor-ambiental.png"
              width={37}
            />
          </li>
        </ul>
      </Container>
      <Doubts
        doubts={doubts}
        theme="#C48E39"
        title="Tire suas dúvidas sobre Sempre Distribuidor"
      />
    </main>
  );
}
