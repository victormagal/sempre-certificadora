'use client';
import Image from 'next/image';
import Link from 'next/link';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import { ContactForm } from '../components/Elements';
import { Container } from '../components/Foundation';

export default function Contato() {
  return (
    <main>
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex flex-col md:space-y-6 text-center px-8 mt-32 mb-12">
          <Overline appearance="o1" color={red[700]}>
            FALE CONOSCO
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra>
            Nós adoraríamos ouvir de você
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            A nossa equipe está sempre à disposição para conversar com você!
          </Text>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col lg:flex-row lg:space-x-12 col-span-12 justify-center border-b-2 pb-24">
          <Link
            href="/sobre"
            className="col-span-3 flex flex-col items-center lg:space-y-4"
          >
            <Image
              alt="Background Image"
              className="cursor-pointer object-cover object-center"
              height={20}
              quality={100}
              src="/icon-email.svg"
              width={40}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-xl">
              Email
            </h1>
            <p className="font-sans text-soft-gray text-center text-sm">
              Estamos aqui para atender você <br /> e tirar suas dúvidas.
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              contato@sempretecnologia.com.br
            </p>
          </Link>
          <Link
            className="col-span-3 flex flex-col items-center my-6 lg:my-0 lg:space-y-4"
            href="https://api.whatsapp.com/send?phone=556130839390"
            target="_blank"
          >
            <Image
              alt="Background Image"
              className="object-cover object-center"
              height={20}
              quality={100}
              src="/icon-atendimento.svg"
              width={40}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-xl">
              Central de atendimetno
            </h1>
            <p className="font-sans text-soft-gray text-center text-sm">
              De segunda a sexta (8h às 18h)
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              0800 941 6260
            </p>
          </Link>
          <Link
            className="col-span-3 flex flex-col items-center my-6 lg:my-0 lg:space-y-4"
            href="https://api.whatsapp.com/send?phone=556130839390"
            target="_blank"
          >
            <Image
              alt="Background Image"
              className="object-cover object-center"
              height={20}
              quality={100}
              src="/icon-whatsapp.svg"
              width={40}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-xl">
              Whatsapp
            </h1>
            <p className="font-sans text-soft-gray text-center text-sm">
              De segunda a sexta (8h às 18h)
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              Mandar mensagem
            </p>
          </Link>
          <Link
            className="col-span-3 flex flex-col items-center my-6 lg:my-0 lg:space-y-4"
            href="https://api.whatsapp.com/send?phone=556130839390"
            target="_blank"
          >
            <Image
              alt="Background Image"
              className="object-cover object-center"
              height={20}
              quality={100}
              src="/icon-contato.svg"
              width={40}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-xl">
              Ligamos para você
            </h1>
            <p className="font-sans text-soft-gray text-center text-sm">
              De segunda a sexta (8h às 18h)
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              Agendar ligacão
            </p>
          </Link>
        </div>
      </Container>
      <Container>
        <div className="col-span-12 lg:col-span-4 lg:col-start-7 mt-24 lg:order-last">
          <Image
            className="justify-end"
            alt="Portal Sempre Contador"
            height={674}
            width={466}
            src="/img-contato.png"
          />
        </div>
        <div className="lg:col-start-2 lg:col-span-4 col-span-12 mt-24">
          <Overline appearance="o1" color={red[700]}>
            FALE CONOSCO
          </Overline>
          <Title
            appearance="h2"
            className="mb-4"
            color={neutralDark[600]}
            extra
          >
            Entrar em contato
          </Title>
          <Text appearance="p4" className="mb-8" color={neutralDark[100]}>
            Por favor, preencha o formulário e entraremos em contato.
          </Text>
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
