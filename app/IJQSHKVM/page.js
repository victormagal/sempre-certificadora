/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  blue,
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import {
  CardFeature,
  Container,
  Doubts,
  HeroPage
} from '../components/Elements';
import Products from '../components/Products';
import { doubts } from '../data';

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products/IJQSHKVM`,
    {
      method: 'GET',
      next: { revalidate: 60 }
    }
  );

  if (!res.ok) {
    throw new Error('Falha ao carregar os produtos');
  }

  return res.json();
}

export default async function Certificadora() {
  const dataProducts = await getData();

  const scrollTo = (element) => {
    document.getElementById(element).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <>
      <main>
        <HeroPage
          endGradient="#0E0E0E"
          gradient={true}
          initGradient="#484848"
          newClasses="items-center py-16"
        >
          <div className="col-span-4 lg:col-span-5 flex flex-col space-y-10">
            <Title appearance="h2" color={neutralLight[100]} extra>
              Certificado Digital: 100% online e com a segurança!
            </Title>
            <Text appearance="p1" color={neutralLight[100]}>
              Suprema Contabilidade e Sempre Tecnologia: juntos para te oferecer
              um atendimento diferenciado sempre!
            </Text>
            <button
              className="py-4 px-8 rounded w-full lg:w-2/4"
              onClick={() => scrollTo('listProducts')}
              style={{ background: '#E60121' }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Emita agora mesmo
              </Text>
            </button>
          </div>
          <div className="lg:col-end-13 col-span-4 lg:col-span-6 flex justify-center lg:justify-end">
            <Image
              alt="Certificado Digital - Emita o seu de onde estiver"
              height={138}
              src="/suprema-contabilidade.svg"
              width={400}
            />
          </div>
        </HeroPage>
        <Container newClasses="mt-16">
          <div
            className="col-span-4 lg:col-span-10 lg:col-start-2 mb-8 p-4 rounded"
            style={{ background: blue[200] }}
          >
            <ul className="flex items-center justify-center space-x-4">
              <li>
                <Text appearance="p4" color={blue[900]}>
                  Estes certificados são vendidos em parceria com a
                </Text>
              </li>
              <li>
                <Image
                  alt="Sempre Tecnologia"
                  height={33}
                  src="/logo-positiva.svg"
                  width={124}
                />
              </li>
            </ul>
          </div>
          <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-0">
            <Image
              alt="Certificado Digital - Emita o seu de onde estiver"
              height={33}
              src="/logos/certificadora.svg"
              width={172}
            />
            <Title
              appearance="h1"
              className="text-center"
              color="#C3931D"
              extra
            >
              Certificado Digital:
            </Title>
            <div id="listProducts">
              <Title
                appearance="h1"
                className="text-center"
                color={neutralDark[500]}
                extra
              >
                adquira o ideal pra você
              </Title>
            </div>
          </div>
        </Container>
        <Products cupom="IJQSHKVM" products={dataProducts} />
        <Container newClasses="pb-16">
          <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-4">
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
            <Text
              className="text-center"
              appearance="p1"
              color={neutralMid[500]}
            >
              Soluções com tecnologia própria e atendimento diferenciado perto
              de você.
            </Text>
          </div>
        </Container>
        <Container newClasses="pb-16">
          <div className="col-span-4 lg:col-span-6">
            <Image
              alt="Nossas vantagens"
              height={526}
              src="/avatar-parceiro.png"
              width={527}
            />
          </div>
          <div className="col-span-4 lg:col-span-6 grid grid-cols-6 gap-6">
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
              description="Temos mais de 20 filiais para garantir que tenha uma mais próxima a você"
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
          </div>
        </Container>
        <Doubts
          doubts={doubts}
          theme="#C48E39"
          title="Tire suas dúvidas sobre Sempre Distribuidor"
        />
      </main>
      <Container newClasses="border-b">
        <div className="col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col lg:flex-row items-center justify-between py-12 space-y-4 lg:space-y-0">
          <Link href="/">
            <Image
              alt="Sempre Tecnologia"
              height={46}
              src="/logo-positiva.svg"
              width={172}
            />
          </Link>
          <Title appearance="h6" color={neutralDark[600]} extra>
            Precisando de ajuda? (61) 3246-2689 / (61) 99879-0483
          </Title>
        </div>
      </Container>
      <Container>
        <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col items-center py-12 space-y-6">
          <Text
            appearance="p3"
            className="text-center lg:text-left"
            color={neutralMid[500]}
          >
            Este site é protegido pela Sempre Certificadora e as Políticas de
            Privacidade e Termos de Serviço do mesmo se aplicam.
          </Text>
          <ul className="flex flex-col items-center space-y-1">
            <li>
              <Text
                appearance="p3"
                className="text-center lg:text-left"
                color={neutralMid[500]}
              >
                Sempre Certificadora - CNPJ 15.590.921/0001-29 - CEP 71200-045
              </Text>
            </li>
            <li>
              <Text
                appearance="p3"
                className="text-center lg:text-left"
                color={neutralMid[500]}
              >
                Sede administrativa: SIA Quadra 4C Lote 51 - Loja 5 Ed. SIA
                Center II - Zona Industrial Guará - Brasília
              </Text>
            </li>
            <li>
              <Text
                appearance="p3"
                className="text-center lg:text-left"
                color={neutralMid[500]}
              >
                contato@sempretecnologia.com.br
              </Text>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
