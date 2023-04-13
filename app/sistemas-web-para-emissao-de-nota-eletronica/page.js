import Image from 'next/image';
import {
  Card,
  ColoredCard,
  Doubts,
  PlayCard,
  Testimony
} from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  Footer,
  Header,
  HeroPage,
  Locations
} from '../components/Foundation';
import { doubts } from './data';

export default function EmissorNota() {
  return (
    <>
      <Header />
      <main>
        <HeroPage
          description="Do mais simples ao mais complexo fazemos todo o cálculo tributário para você."
          iconSource="/icon-emissor-nota.svg"
          title="Emita Notas Eletrônicas"
          uri="/bg-emissor-nota.jpg"
        />
        <Container newClasses="py-24">
          <div className="col-span-5">
            <PlayCard bgImage="/bg-play-notas.svg" />
          </div>
          <div className="col-span-5 flex flex-col justify-center">
            <Image
              alt="Sempre emissor de notas"
              height={20}
              quality={100}
              src="/title-sempre-emissor.svg"
              width={139}
            />
            <h1 className="font-serif font-bold mt-6 text-dark-blue text-4xl">
              Simplifique a emissão de Notas Eletrônicas da sua empresa
            </h1>
            <p className="mt-6 text-soft-gray">
              Muito mais que uma solução online de emissão de notas eletrônicas!
              Com o SempreEmissor você realiza cadastro de clientes
              automaticamente a partir do CNPJ, mantém o cadastro de produtos e
              serviços, além de emitir boletos bancários e ter relatórios
              básicos de contas a receber.
            </p>
            <Image
              alt="Sempre emissor de notas"
              className="mt-6"
              height={29}
              quality={100}
              src="/title-sempre-emissor-contador.svg"
              width={300}
            />
            <h2 className="font-serif font-bold mt-6 text-dark-blue text-2xl">
              Emita notas eletrônicas para os clientes da sua contabilidade de
              forma simples e rápida.
            </h2>
          </div>
        </Container>
        <Container newClasses="pb-24">
          <h1 className="col-span-12 font-sans my-6 text-dark-blue text-3xl text-center">
            O que você só encontra na{' '}
            <span className="font-bold">Sempre Tecnologia</span>
          </h1>
          <Card
            description="Emita notas eletrônicas de diferentes segmentos.  A NF-e é a garantia fiscal de que o produto foi comercializado por sua empresa."
            imageSource="/icon-emissor-1.svg"
            title="SempreNFE - Nota Fiscal Eletrônica"
          />
          <Card
            description="Solução web para empresas prestadoras de serviços que precisam emitir notas eletrônicas com Imposto Sobre Serviço (ISS)."
            imageSource="/icon-emissor-1.svg"
            title="SempreNFSE - Nota Fiscal de Serviço Eletrônica"
          />
          <Card
            description="Sistema web para emissão de cupons fiscais que traz agilidade e economia para seu comércio. Reduza agora custos com papel."
            imageSource="/icon-emissor-2.svg"
            title="SempreNFCE - Nota Fiscal de Consumidor Eletrônico"
          />
          <Card
            description="O SempreCTE é uma ferramenta para emissão de documentos fiscais para transporte de cargas. O sistema é prático e usual."
            imageSource="/icon-emissor-3.svg"
            title="SempreCTE - Conhecimento de Transporte Eletrônico"
          />
          <Card
            description="Simplifique as obrigações acessórias para o acompanhamento em tempo real das operações comerciais."
            imageSource="/icon-emissor-4.svg"
            title="SempreMDFE - Manifesto Eletrônico de Docs Fiscais"
          />
          <ColoredCard
            description="É muito prático fazer a emissão da sua nota fiscal eletrônica."
            firstColor="#E57B2D"
            secondColor="#1F408A"
            title="Praticidade que agiliza processos"
          />
        </Container>
        <BackgroundContainer uri="/bg-sempre-emissor.jpg">
          <div className="col-span-5 col-end-13">
            <header className="flex items-center mb-6">
              <Image
                alt="App sempre mensalidade"
                height={52}
                quality={100}
                src="/icon-app-emissor.svg"
                width={54}
              />
              <span className="font-serif font-bold ml-4 text-white text-lg">
                APP Sempre Emissor
              </span>
            </header>
            <h1 className="font-serif font-semibold text-white text-4xl mb-6">
              Operações facilitadas, de onde você estiver.
            </h1>
            <p className="text-white mb-6">
              Visualize cadastro de cliente, cadastro de produto e faça emissão
              de nota fiscal, que pode ser compartilhada direto do Smartphone.
            </p>
            <footer className="flex">
              <Image
                alt="Google play"
                height={59}
                quality={100}
                src="/google-play.svg"
                width={203}
              />
              <Image
                alt="Apple story"
                className="ml-4"
                height={59}
                quality={100}
                src="/apple-store.svg"
                width={203}
              />
            </footer>
          </div>
        </BackgroundContainer>
        <Testimony />
        <Doubts
          doubts={doubts}
          image="/cellphone-yellow.svg"
          theme="#F07E26"
          title="Tire suas dúvidas sobre a emissão de Notas Eletrônicas"
        />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
