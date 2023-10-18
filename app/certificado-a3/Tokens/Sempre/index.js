/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { blue, neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function Sempre() {
  return (
    <Container newClasses="pb-12">
      <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col space-y-8">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Token Sempre Tecnologia
        </Title>
        <Text appearance="p3" color={neutralMid[500]}>
          Para o funcionamento do certificado digital armazenado no token Sempre
          Tecnologia, é necessário:
        </Text>
        <ul className="flex flex-col list-disc ml-4 space-y-1">
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Instalar os softwares que serão responsáveis pela leitura do
              conteúdo em seu Token;
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              O sotware de instalação pode ser obtido aqui.
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              É necessário que o token esteja desconectado ao computador para
              instalação dos drivers;
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Identifique o modelo do seu token, caso ele não esteja presente,
              procure a empresa fornecedora do token para que seja
              disponibilizado o driver gerenciador.
            </Text>
          </li>
        </ul>
        <Text appearance="p3" color={neutralMid[500]}>
          O Token Sempre Tecnologia é gerenciado pelo software SafeSign e driver
          G&D.
        </Text>
        <Title appearance="h3" color={neutralDark[500]} extra>
          Passo 1
        </Title>
        <Text appearance="p3" color={neutralMid[500]}>
          Faça o download do drive G&D e realize a instalação avançando e
          confirmando todas as telas.
        </Text>
        <Title appearance="h6" color={neutralDark[500]}>
          Driver G&D
        </Title>
        <table className="table-fixed">
          <thead className="border" style={{ borderColor: neutralLight[400] }}>
            <tr
              className="text-left"
              style={{
                backgroundColor: neutralLight[200],
                borderColor: neutralLight[400]
              }}
            >
              <th
                className="border-r p-3 lg:p-6"
                style={{ borderColor: neutralLight[400] }}
              >
                <Title appearance="h6" color={neutralDark[500]}>
                  Versões do Driver G&D
                </Title>
              </th>
              <th className="p-3 lg:p-6">
                <Title appearance="h6" color={neutralDark[500]}>
                  Windows 7, 8, 8.1, e 10
                </Title>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b" style={{ borderColor: neutralLight[400] }}>
              <td
                className="border-l border-r p-3 lg:p-6"
                style={{ borderColor: neutralLight[400] }}
              >
                <Text appearance="p3" color={neutralDark[500]}>
                  Token G&D
                </Text>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/1qKYEkTGfQcjyiPojuPb3fMwWsOUmu28e/view?usp=share_link"
                  target="_blank"
                >
                  <Text appearance="p3" color={blue[800]}>
                    Download
                  </Text>
                  <SolidIcon
                    icon="faDownload"
                    iconColor={blue[800]}
                    newClasses="h-4"
                  />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <Title appearance="h3" color={neutralDark[500]} extra>
          Passo 2
        </Title>
        <Text appearance="p3" color={neutralMid[500]}>
          Faça o download do software SafeSign, conforme a configuração do seu
          computador, e realize a instalação avançando e confirmando todas as
          telas
        </Text>
        <Title appearance="h6" color={neutralDark[500]}>
          SafeSign
        </Title>
        <table className="table-auto">
          <thead className="border" style={{ borderColor: neutralLight[400] }}>
            <tr
              className="text-left"
              style={{
                backgroundColor: neutralLight[200],
                borderColor: neutralLight[400]
              }}
            >
              <th
                className="border-r p-3 lg:p-6"
                style={{ borderColor: neutralLight[400] }}
              >
                <Title appearance="h6" color={neutralDark[500]}>
                  Versões do Driver SafeSign
                </Title>
              </th>
              <th
                className="border-r p-3 lg:p-6"
                style={{ borderColor: neutralLight[400] }}
              >
                <Title appearance="h6" color={neutralDark[500]}>
                  32 bits
                </Title>
              </th>
              <th className="p-3 lg:p-6">
                <Title appearance="h6" color={neutralDark[500]}>
                  64 bits
                </Title>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b" style={{ borderColor: neutralLight[400] }}>
              <td
                className="border-l border-r p-3 lg:p-6"
                style={{ borderColor: neutralLight[400] }}
              >
                <Text appearance="p3" color={neutralDark[500]}>
                  3.5.0.0
                </Text>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/1ozOjO9KRhL953gB4wEcrp9lOVX0IoFPC/view?usp=share_link"
                  target="_blank"
                >
                  <Text appearance="p3" color={blue[800]}>
                    Download
                  </Text>
                  <SolidIcon
                    icon="faDownload"
                    iconColor={blue[800]}
                    newClasses="h-4"
                  />
                </Link>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/1fP1taXM6L8I94mAheYQgAZ6J1519C4OP/view?usp=share_link"
                  target="_blank"
                >
                  <Text appearance="p3" color={blue[800]}>
                    Download
                  </Text>
                  <SolidIcon
                    icon="faDownload"
                    iconColor={blue[800]}
                    newClasses="h-4"
                  />
                </Link>
              </td>
            </tr>
            <tr className="border-b" style={{ borderColor: neutralLight[400] }}>
              <td
                className="border-l border-r p-3 lg:p-6"
                style={{ borderColor: neutralLight[400] }}
              >
                <Text appearance="p3" color={neutralDark[500]}>
                  3.0.124
                </Text>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/1FLZapeyN1NyHZFGiluy9zJlNNuZHkQFd/view?usp=share_link"
                  target="_blank"
                >
                  <Text appearance="p3" color={blue[800]}>
                    Download
                  </Text>
                  <SolidIcon
                    icon="faDownload"
                    iconColor={blue[800]}
                    newClasses="h-4"
                  />
                </Link>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/12ntpvksJr9j0TzEzv0PGminzBBxPDPQp/view?usp=share_link"
                  target="_blank"
                >
                  <Text appearance="p3" color={blue[800]}>
                    Download
                  </Text>
                  <SolidIcon
                    icon="faDownload"
                    iconColor={blue[800]}
                    newClasses="h-4"
                  />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <Title appearance="h3" color={neutralDark[500]} extra>
          Passo 3
        </Title>
        <Text appearance="p3" color={neutralMid[500]}>
          Conecte o token ao seu computador e inicie a utilização.
        </Text>
      </div>
    </Container>
  );
}
