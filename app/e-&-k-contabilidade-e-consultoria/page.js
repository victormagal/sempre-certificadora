/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
import { CertificadoPF, CertificadoPJ } from '../components/Products';
import { doubts } from '../data';
import axios from 'axios';

export default function Certificadora() {
  const [showPF, setShowPF] = useState(true);
  const [products, setProducts] = useState([]);
  const [initialPFProducts, setInitialPFProducts] = useState([]);
  const [initialPJProducts, setInitialPJProducts] = useState([]);

  useEffect(() => {
    axios
      .get('../api/products/WGOVKQRO')
      .then(({ data: { data: response } }) => {
        const { Produtos: products } = response;
        setProducts(products);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  useEffect(() => {
    products.map((product) => {
      if (product.tipo_atendimento === 'videoconferencia') {
        if (product.tipo_certificado === 'pessoa_fisica') {
          setInitialPFProducts((prevState) => [...prevState, product]);
        } else {
          setInitialPJProducts((prevState) => [...prevState, product]);
        }
      }
    });
  }, [products]);

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
          endGradient="#3A3A39"
          gradient={true}
          initGradient="#656464"
          newClasses="items-center py-16"
        >
          <div className="col-span-4 lg:col-span-5 flex flex-col space-y-10">
            <Title appearance="h2" color={neutralLight[100]} extra>
              Certificado Digital: 100% online e com a segurança!
            </Title>
            <Text appearance="p3" color={neutralLight[100]}>
              Sempre Tecnologia e E & K Contabilidade e Consultoria Empresarial:
              juntos para te oferecer um atendimento diferenciado sempre!
            </Text>
            <button
              className="py-4 px-8 rounded w-full lg:w-2/4"
              onClick={() => scrollTo('listProducts')}
              style={{ background: '#C3931D' }}
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
              height={320}
              src="/ek-logo.png"
              width={309}
            />
          </div>
        </HeroPage>
        <Container newClasses="my-16">
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
        <div>
          <Container newClasses="pb-16">
            <nav className="col-span-4 lg:col-span-6 lg:col-start-4 flex justify-center">
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
                  style={{
                    background: showPF ? neutralLight[100] : 'transparent'
                  }}
                >
                  <Title
                    appearance="h7"
                    color={showPF ? neutralDark[500] : neutralMid[400]}
                  >
                    Para sua empresa
                  </Title>
                </li>
                <li
                  className={`cursor-pointer ${
                    !showPF && 'drop-shadow'
                  } py-4 px-4 lg:px-8 rounded`}
                  onClick={() => setShowPF(false)}
                  style={{
                    background: !showPF ? neutralLight[100] : 'transparent'
                  }}
                >
                  <Title
                    appearance="h7"
                    color={!showPF ? neutralDark[500] : neutralMid[400]}
                  >
                    Para você
                  </Title>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
        {!showPF ? (
          <CertificadoPF
            cupom="WGOVKQRO"
            partnerBackground="#FFF072"
            partnerIcon="C3931D"
            products={initialPFProducts}
          />
        ) : (
          <CertificadoPJ
            cupom="WGOVKQRO"
            partnerBackground="#FFF072"
            partnerIcon="C3931D"
            products={initialPJProducts}
          />
        )}
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
            Precisando de ajuda? 0800 941 6260
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
            Este site é protegido pelo XXXXXX e as Políticas de Privacidade e
            Termos de Serviço do mesmo se aplicam.
          </Text>
          <ul className="flex flex-col items-center space-y-1">
            <li>
              <Text
                appearance="p3"
                className="text-center lg:text-left"
                color={neutralMid[500]}
              >
                Sempre Tecnologia – CNPJ 00.00.000/00000-00 - CEP 0000-000
              </Text>
            </li>
            <li>
              <Text
                appearance="p3"
                className="text-center lg:text-left"
                color={neutralMid[500]}
              >
                Sede administrativa: Endereço XXXXXXX – Brasília
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
