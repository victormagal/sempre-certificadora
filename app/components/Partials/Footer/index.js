/* eslint-disable no-undef */
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../Elements/Container';
import { neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { SocialIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';

export default function Footer() {
  return (
    <>
      <Container bgColor={neutralLight[200]} newClasses="border-b py-12">
        <div className="col-span-4">
          <Link href="/">
            <Image
              alt="Sempre Tecnologia"
              className="mb-16"
              height={46}
              src="/logo-positiva.svg"
              width={172}
            />
          </Link>
          <Title appearance="h7" color={neutralDark[500]}>
            Siga nossas redes sociais
          </Title>
          <ul className="flex mt-4 space-x-3">
            <li>
              <Link
                href="https://www.facebook.com/sempretecnologia/"
                target="_blank"
              >
                <SocialIcon
                  icon="faSquareFacebook"
                  iconColor={neutralLight[600]}
                  newClasses="h-6"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/sempre-tecnologia/"
                target="_blank"
              >
                <SocialIcon
                  icon="faLinkedinIn"
                  iconColor={neutralLight[600]}
                  newClasses="h-6"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/sempretecnologia/"
                target="_blank"
              >
                <SocialIcon
                  icon="faInstagram"
                  iconColor={neutralLight[600]}
                  newClasses="h-6"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Title appearance="h8" color={neutralMid[500]}>
                Empresa
              </Title>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/sobre`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Quem somos
                </Text>
              </Link>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/noticias`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Blog
                </Text>
              </Link>
            </li>
            <li>
              <Link href="https://api.whatsapp.com/send?phone=556130839390">
                <Text appearance="p4" color={neutralDark[500]}>
                  Suporte
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Title appearance="h8" color={neutralMid[500]}>
                Segmentos
              </Title>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/distribuidores`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Distribuidores
                </Text>
              </Link>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/pequenos-varejos`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Pequenos varejos
                </Text>
              </Link>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/prestadores-de-servico`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Prestadores de serviço
                </Text>
              </Link>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/recorrentes`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Recorrentes
                </Text>
              </Link>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/documentos-fiscais`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Documentos fiscais
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Certificado digital
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Title appearance="h8" color={neutralMid[500]}>
                Seja um parceiro
              </Title>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/contador`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Programa para Contadores
                </Text>
              </Link>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/parceria`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Parceria em Certificado Digital
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Title appearance="h8" color={neutralMid[500]}>
                Contato
              </Title>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/contato`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralDark[500]}>
                  Fale conosco
                </Text>
              </Link>
            </li>
            <li>
              <Link href="tel:08008416260">
                <Text appearance="p4" color={neutralDark[500]}>
                  Central de atendimento
                </Text>
              </Link>
            </li>
            <li>
              <Link href="https://api.whatsapp.com/send?phone=556130839390">
                <Text appearance="p4" color={neutralDark[500]}>
                  WhatsApp
                </Text>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container bgColor={neutralLight[200]} newClasses="py-8">
        <div className="col-span-12 lg:col-span-5 order-last lg:order-none text-left">
          <Text appearance="p3" color={neutralMid[500]}>
            © 2023 Sempre Tecnologia. Todos os direitos reservados.
          </Text>
        </div>
        <ul className="col-span-12 lg:col-end-13 lg:col-span-3 flex justify-start lg:justify-end space-x-4">
          <li>
            <Link
              href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/termo`}
              target="_blank"
            >
              <Text appearance="p3" color={neutralMid[500]}>
                Termos
              </Text>
            </Link>
          </li>
          <li>
            <Link
              href={`${process.env.NEXT_PUBLIC_SEMPRE_INSTITUCIONAL_URL}/privacidade`}
              target="_blank"
            >
              <Text appearance="p3" color={neutralMid[500]}>
                Privacidade
              </Text>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}
