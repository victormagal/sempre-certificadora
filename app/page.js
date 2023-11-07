/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { neutralDark, neutralLight, neutralMid, red } from './base/Colors';
import { RegularIcon, SolidIcon } from './base/Icons';
import { Overline, Text, Title } from './base/Typography';
import {
  CardFeature,
  Container,
  Doubts,
  HeroPage
} from './components/Elements';
import {
  Footer,
  Header,
  HeaderMobile,
  Locations,
  PartnersMobile,
  Partners,
  Testimonies
} from './components/Partials';
import Products from './components/Products';
import { doubts } from './data';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, {
    method: 'GET'
  });

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
      <Header />
      <HeaderMobile />
      <main className="pt-24">
        <HeroPage
          endGradient="#1D3E89"
          gradient={true}
          initGradient="#3A1078"
          newClasses="items-center pt-8 lg:pt-0"
        >
          <div className="col-span-4 lg:col-span-5 flex flex-col space-y-10">
            <Title appearance="h2" color={neutralLight[100]} extra>
              Certificado Digital: adquira um perfeito para você.
            </Title>
            <Text appearance="p3" color={neutralLight[100]}>
              Com a comodidade e segurança que você merece sem sair de casa.
            </Text>
            <button
              className="py-4 px-8 rounded w-full lg:w-2/4"
              onClick={() => scrollTo('listProducts')}
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Adquirir o meu
              </Text>
            </button>
          </div>
          <div className="lg:col-end-13 col-span-4 lg:col-span-6 flex justify-end">
            <Image
              alt="Certificado Digital - Emita o seu de onde estiver"
              height={606}
              src="/avatar-certificadora.png"
              width={539}
            />
          </div>
        </HeroPage>
        <Container newClasses="my-16">
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
              color={red[1000]}
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
        <Products cupom="" products={dataProducts} />
        <Container newClasses="border-b border-t py-12">
          <div className="col-span-4 lg:col-span-12 flex flex-col lg:flex-row justify-between xl:px-16 space-y-8 lg:space-y-0">
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h3" color={neutralDark[500]} extra>
                +250 mil
              </Title>
              <Title appearance="h6" color={neutralMid[600]}>
                certificados emitidos
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h3" color={neutralDark[500]} extra>
                +20
              </Title>
              <Title appearance="h6" color={neutralMid[600]}>
                filiais abertas pelo país
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h3" color={neutralDark[500]} extra>
                +12
              </Title>
              <Title appearance="h6" color={neutralMid[600]}>
                anos de mercado
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h3" color={neutralDark[500]} extra>
                85%
              </Title>
              <Title appearance="h6" color={neutralMid[600]}>
                de satisfação no atendimento
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h3" color={neutralDark[500]} extra>
                95%
              </Title>
              <Title appearance="h6" color={neutralMid[600]}>
                de satisfação pós-venda
              </Title>
            </div>
          </div>
        </Container>
        <Container newClasses="py-16">
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
        </Container>
        <Container
          bgContainer={neutralDark[600]}
          newClasses="items-center py-16 rounded-xl"
        >
          <div className="col-span-4 lg:col-start-2">
            <Title appearance="h2" color={neutralLight[200]} extra>
              Precisa de ajuda? Conte com a gente.
            </Title>
            <Text
              appearance="p1"
              color={neutralLight[600]}
              className="mb-10 mt-6"
            >
              Confira o passo a passo para instalação do seu Certificado
              Digital.
            </Text>
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
              <Link
                href="https://res.cloudinary.com/delhbbobv/raw/upload/v1697571612/Assistente_Certificado_Digital_8ab51c4daf.application"
                target="_blank"
              >
                <li
                  className="flex items-center justify-center p-4 rounded-md space-x-3"
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
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/contato`}
              >
                <li
                  className="border flex items-center justify-center p-4 rounded-md space-x-3"
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
          <div className="lg:col-end-12 col-span-4 lg:col-span-5 flex justify-center lg:justify-end">
            <Image
              alt="Precisa de ajuda? Conte com a gente."
              height={360}
              src="/container-ajuda.png"
              width={436}
            />
          </div>
        </Container>
        <Testimonies />
        <PartnersMobile />
        <Partners />
        <Doubts
          doubts={doubts}
          theme="#C48E39"
          title="Tire suas dúvidas sobre Sempre Distribuidor"
        />
      </main>
      <Locations />
      <Footer />
      <Link
        href="https://api.whatsapp.com/send?phone=556130839390"
        target="_blank"
        className="fixed bg-[#25D366] bottom-4 drop-shadow-xl h-16 right-4 rounded-full w-16"
      >
        <FontAwesomeIcon
          className="text-white h-10 w-10 mt-3 ml-3"
          icon={faWhatsapp}
        />
      </Link>
    </>
  );
}
