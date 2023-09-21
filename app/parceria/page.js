'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import { CardFeature, ContactForm } from '../components/Elements';
import { Container, HeroPage, ModalForm } from '../components/Foundation';

export default function Certificadora() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <HeroPage bgColor={neutralDark[500]} gradient={false} className="py-10">
        <div className="col-span-12 lg:col-span-5 flex flex-col space-y-10">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={33}
            src="/logos/parceria.svg"
            width={172}
          />
          <Title appearance="h1" color={neutralLight[100]} extra>
            Parceria em Certificado Digital
          </Title>
          <Text appearance="p3" color={neutralLight[100]}>
            Aproveite todas as vantagens e benefícios com o nosso programa de
            parceria na emissão de Certificado Digital.
          </Text>
          <Link href="/">
            <button
              className="w-full lg:w-auto py-4 px-8 rounded"
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Quero ser um parceiro
              </Text>
            </button>
          </Link>
        </div>
        <div className="flex lg:col-end-13 lg:col-span-6 lg:justify-end md:py-16">
          <Image
            className="h-screen-sm max-w-screen-lg  "
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={352}
            src="/hero-certificados.png"
            width={560}
          />
        </div>
      </HeroPage>
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex flex-col md:space-y-6 text-center px-8">
          <Overline appearance="o1" color={red[700]}>
            sempre certificado
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra>
            Seja um parceiro da nossa rede de Certificado Digital
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Temos uma proposta de parceria com as melhores vantagens do mercado
            para você e seus clientes.
          </Text>
        </div>
        <div className="col-span-12 flex flex-col lg:flex-row justify-between p-16 border-b-2">
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
      <Container bgColor={neutralLight[100]}>
        <div className="col-span-12 lg:col-span-5 lg:col-start-2 lg:mt-24 lg:mb-32 lg:order-first">
          <video
            className="rounded-xl"
            src="/sempre-exemplo.mp4"
            height={324}
            width={568}
          />
        </div>
        <div className="lg:col-span-5 col-span-12 lg:mt-24">
          <Overline appearance="o1" className="my-6" color={red[700]}>
            Quem somos
          </Overline>
          <Title
            appearance="h3"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            Você conhece a Sempre Tecnologia?
          </Title>
          <Text appearance="p3" className="mb-6" color={neutralMid[500]}>
            Com mais de 12 anos de sólida presença no mercado, temos uma
            estrutura ampla e um atendimento diferenciado. Atuamos no
            desenvolvimento de tecnologia própria para diversos segmentos e
            contamos com o credenciamento na emissão de Certificado Digital em
            todo o Brasil. Seja o nosso parceiro.
          </Text>
          <Link href="/">
            <button
              className="w-full lg:w-auto py-4 px-8 rounded"
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Quero ser um parceiro
              </Text>
            </button>
          </Link>
        </div>
      </Container>
      <Container bgColor={neutralLight[200]} newClasses="py-16">
        <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex flex-col md:space-y-6 text-center">
          {' '}
          <Overline appearance="o1" color={red[700]}>
            seja um parceiro sempre
          </Overline>
          <Title
            appearance="h3"
            className="my-6 text-center"
            color={neutralDark[500]}
            extra
          >
            Nossos parceiros emitem certificados digitais com segurança
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Para você que quer emitir certificados digitais com segurança e
            rapidez para os seus clientes.
          </Text>
        </div>
      </Container>
      <Container bgColor={neutralLight[200]} newClasses="pb-16 col-span-12">
        <CardFeature
          className="col-span-12"
          third={true}
          bgColor={neutralLight[100]}
          description="Precisa de ajuda? Atendimento de excelência ao seu cliente e para você quando precisar de ajuda."
          icon="faBuilding"
          iconColor={red[600]}
          iconSize="h-10"
          title="Atendimento Personalizado​"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Disponibilizamos todo o material de comunicação para os nossos parceiros serem referência na região."
          icon="faComments"
          iconColor={red[600]}
          iconSize="h-10"
          title="Marketing"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Plataforma intuitiva para administrar certificados digitais."
          icon="faGem"
          iconColor={red[600]}
          iconSize="h-10"
          title="Administre os certificados"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Nossa parceria privilegia sua competência comercial, pois sabemos que essa relação tem que ser boa para ambas as partes."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Parceria diferenciada"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Eleve seu negócio com certificados digitais, atraindo parcerias de prestígio com entidades de classe."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Expanda sua rede de contatos."
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Segurança, respeito e profissionalismo, liberando você para focar no seu negócio com tranquilidade."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Respeito e Profissionalismo​"
        />
        <div className="col-span-12 lg:col-span-2 lg:col-start-6">
          <Link href="/">
            <button
              className="py-4 rounded-md w-full"
              onClick={() => setOpenModal(true)}
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Quero ser um parceiro
              </Text>
            </button>
          </Link>
        </div>
      </Container>
      <Container>
        <div className="col-span-12  lg:col-span-5 lg:col-start-2 mt-24 lg:order-first order-last">
          <Image
            className=""
            alt="Portal Sempre Contador"
            height={674}
            width={466}
            src="/img-ficou-interessado-esq.png"
          />
        </div>
        <div className="lg:col-span-5 col-span-12 mt-24">
          <Title
            appearance="h2"
            className="mb-4"
            color={neutralDark[600]}
            extra
          >
            Ficou interessado?
          </Title>
          <Text appearance="p4" className="mb-8" color={neutralDark[100]}>
            Temos vários benefícios exclusivos especialmente para a sua
            necessidade. Venha ser um parceiro!
          </Text>
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
