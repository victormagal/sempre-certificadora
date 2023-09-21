'use client';
import Image from 'next/image';
import Link from 'next/link';
import { neutralDark, neutralLight, neutralMid, red } from './base/Colors';
import { Overline, Text, Title } from './base/Typography';
import { LastPosts, Tabs } from './components/Elements';
import { Container, HeroPage, Testimonies } from './components/Foundation';

export default function Home() {
  return (
    <main className="pt-24">
      <HeroPage bgColor={neutralLight[1100]} gradient={false} className="py-10">
        <div className="col-span-12 lg:col-span-5 flex flex-col space-y-10 ">
          <Title appearance="h1" color={neutralDark[500]} extra>
            Seja bem-vindo a Sempre Tecnologia
          </Title>
          <Text appearance="p3" color={neutralMid[500]}>
            Atuamos no desenvolvimento de Sistemas Web de Gestão com tecnologia
            própria para diversos segmentos e contamos com o credenciamento na
            emissão de Certificado Digital em todo o Brasil.{' '}
            <strong>Conheça os segmentos em que atuamos.</strong>
          </Text>
          <Link href="/">
            <button
              className="w-full lg:w-auto py-4 px-8 rounded"
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Saiba mais
              </Text>
            </button>
          </Link>
        </div>
        <div className="flex lg:col-end-13 lg:col-span-6 lg:justify-end md:py-16">
          <Image
            className="h-screen-sm max-w-screen-lg  "
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={352}
            src="/hero-home.png"
            width={560}
          />
        </div>
      </HeroPage>

      <Container
        bgContainer={neutralDark[500]}
        newClasses="flex rounded-2xl lg:w-full lg:py-auto py-8 w-auto mx-4"
      >
        <div className="col-span-4 flex flex-col items-center">
          <h1 className="font-serif font-normal my-4 text-white text-5xl">
            97%
          </h1>
          <h2 className="font-sans font-semibold text-soft-gray text-sm text-center w-1/2">
            Atendimento Pós-Venda
          </h2>
        </div>
        <div className="col-span-4 flex flex-col items-center">
          <h1 className="font-serif font-normal my-4 text-white text-5xl">
            98%
          </h1>
          <h2 className="font-sans font-semibold text-soft-gray text-sm text-center w-1/2">
            Atendimento Suporte Técnico a Sistemas
          </h2>
        </div>
        <div className="col-span-4 flex flex-col items-center">
          <h1 className="font-serif font-normal my-4 text-white text-5xl">
            85%
          </h1>
          <h2 className="font-sans font-semibold text-soft-gray text-sm text-center w-1/2">
            Atendimento Certificado Digital
          </h2>
        </div>
      </Container>
      <Container bgColor={neutralLight[200]} newClasses="py-16">
        <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex flex-col md:space-y-6 text-center">
          <Overline appearance="o1" color={red[700]}>
            Segmentos
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra>
            Qual é a sua necessidade?
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Temos um sistema de gestão perfeito para você. Confira as nossas
            soluções:
          </Text>
        </div>
      </Container>
      <Container>
        <Tabs />
      </Container>
      <Container bgColor={neutralLight[100]}>
        <div className="col-span-12 lg:mt-24 lg:mb-32 lg:order-last">
          <video
            className="rounded-xl flex-shrink overflow-auto h-[388px]"
            src="/sempre-exemplo.mp4"
            height={388}
            width={1283}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center col-span-12 lg:mt-24">
          <div className="lg:basis-1/2">
            <Overline appearance="o1" className="mb-6" color={red[700]}>
              Quem somos
            </Overline>
            <Title
              appearance="h1"
              newclassName="mb-6"
              color={neutralDark[500]}
              extra
            >
              Você conhece a Sempre Tecnologia?
            </Title>
          </div>
          <div className="lg:basis-1/2 ">
            <Text appearance="p3" className="mt-8 " color={neutralMid[500]}>
              Somos uma empresa especializada em desenvolver sistemas com
              tecnologia própria em plataforma web para nossos clientes. Já
              estamos há mais de 12 anos no mercado. Possuímos uma estrutura
              ampla e atendimento diferenciado para atender e dar suporte para
              micro, pequenas e médias empresas.
            </Text>
          </div>
        </div>
      </Container>

      <Testimonies />
      <Container newClasses="py-8">
        <ul className="col-span-12 flex justify-between mb-14">
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

      <Container>
        <div className="col-span-4 lg:col-span-9 mb-6">
          <h1 className="font-serif font-semibold text-4xl text-dark-blue text-center lg:text-left">
            Veja os últimos conteúdos do nosso Blog
          </h1>
        </div>
        <div className="col-span-4 lg:col-span-3 flex justify-center lg:justify-end mb-6">
          <Link
            className="bg-custom-red font-sans font-bold py-4 rounded text-center text-xs text-white uppercase w-2/3"
            href="/noticias"
          >
            Ver mais
          </Link>
        </div>
        <LastPosts />
      </Container>
      <Container
        bgContainer={neutralDark[500]}
        newClasses="flex rounded-2xl lg:w-full lg:py-auto py-24 w-auto col-span-12 mx-4"
      >
        <div className="lg:col-start-4 col-span-6 text-center ">
          <Title
            appearance="h2"
            className="mb-6"
            color={neutralLight[100]}
            extra
          >
            Seja Sempre!
          </Title>
          <Text className="mb-6" appearance="p1" color={neutralMid[100]}>
            Venha conversar conosco. Temos a solução perfeita em sistemas web
            para alavancar a gestão do seu negócio.
          </Text>
          <Link href="/">
            <button
              className="flex p-4 rounded-md space-x-3 mx-auto w-full lg:w-auto justify-center mt-12"
              style={{ background: red[1000] }}
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Converse com um especialista
              </Text>
            </button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
