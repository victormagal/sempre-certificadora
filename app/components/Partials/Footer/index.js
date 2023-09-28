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
              <Link href="/">
                <SocialIcon
                  icon="faSquareFacebook"
                  iconColor={neutralLight[600]}
                  newClasses="h-6"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                <SocialIcon
                  icon="faTwitter"
                  iconColor={neutralLight[600]}
                  newClasses="h-6"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
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
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Quem somos
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Trabalhe conosco
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Blog
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
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
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Distribuidores
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Pequenos varejos
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Prestadores de serviço
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Recorrentes
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
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
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Programa de parceria com contadores
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Parceria em certificado digital
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
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Fale conosco
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Central de atendimento
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  WhatsApp
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralDark[500]}>
                  Agende uma ligação
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
            <Link href="/">
              <Text appearance="p3" color={neutralMid[500]}>
                Termos
              </Text>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Text appearance="p3" color={neutralMid[500]}>
                Privacidade
              </Text>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Text appearance="p3" color={neutralMid[500]}>
                Cookies
              </Text>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
}
