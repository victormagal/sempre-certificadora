'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import { CardFeature } from '../components/Elements';
import { Container } from '../components/Foundation';

export default function Sobre() {
  return (
    <main className="pt-36">
      <Container newClasses="mb-16">
        <div className="col-span-4">
          <Overline appearance="o1" color={red[700]}>
            Quem somos
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra={true}>
            Oi, somos a Sempre Tecnologia.
          </Title>
        </div>
        <div className="col-end-13 col-span-6">
          <Text appearance="p3" color={neutralMid[600]}>
            Nós somos especializados em desenvolver sistemas de gestão
            empresarial com tecnologia própria e atendimento super capacitado
            para você. Temos credenciamento autorizado pelo Governo Federal,
            emitimos certificado digital padrão ICP-Brasil com atendimento de
            excelência e suporte técnico especializado.
          </Text>
        </div>
      </Container>
      <section className={styles.azul}>
        <Container>
          <div
            className="col-span-4 lg:col-span-12 flex justify-center relative"
            style={{ height: '539px' }}
          >
            <Image
              alt="Sempre mensalidade"
              fill
              sizes="100vw"
              src="/about.png"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="col-span-8 col-start-3 flex justify-between mb-16 mt-12">
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h1" color="white">
                +25
              </Title>
              <Title appearance="h6" color="#B3BAC5">
                filiais no Brasil
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h1" color="white">
                +10
              </Title>
              <Title appearance="h6" color="#B3BAC5">
                anos no mercado
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h1" color="white">
                99%
              </Title>
              <Title appearance="h6" color="#B3BAC5">
                de satisfação no atendimento
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h1" color="white">
                99%
              </Title>
              <Title appearance="h6" color="#B3BAC5">
                de satisfação no pós-venda
              </Title>
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <div className="col-span-6 col-start-4 my-16 text-center">
          <Title
            appearance="h2"
            className="mb-4"
            color={neutralDark[500]}
            extra
          >
            Temos a solução perfeita para a sua empresa.
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Tecnologia própria e atendimento diferenciado perto de você.
          </Text>
        </div>
      </Container>
      <Container newClasses="border-b pb-16">
        <CardFeature
          bgColor={neutralLight[200]}
          description="Sempre juntos para apoiar as empresas e gerar prosperidade."
          icon="faBuilding"
          iconColor={red[600]}
          title="Propósito"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Facilitar a vida dos empresários e contadores com soluções em tecnologia e atendimento diferenciado."
          icon="faCircleDot"
          iconColor={red[600]}
          title="Missão"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Superação, simplicidade, espírito de equipe, melhoria contínua, profissionalismo, respeito e entusiasmo."
          icon="faGem"
          iconColor={red[600]}
          title="Valores"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Ser referência em sistemas de gestão e certificado digital no Brasil de forma sustentável."
          icon="faLightbulb"
          iconColor={red[600]}
          title="Visão"
        />
      </Container>
    </main>
  );
}
