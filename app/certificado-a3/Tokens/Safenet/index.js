/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { blue, neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function Safenet() {
  return (
    <Container newClasses="pb-12">
      <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col space-y-8">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Passo 1
        </Title>
        <Text appearance="p3" color={neutralMid[500]}>
          Faça o download do software SafeNet, conforme a configuração do seu
          computador, e realize a instalação avançando e confirmando todas as
          telas.
        </Text>
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
                  Versões do Driver SafeNet
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
                  10.5
                </Text>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/19GmhTkv2h7gBdFo0un_HsARtBxulUtVO/view?usp=share_link"
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
                  href="https://drive.google.com/file/d/1Q_bzZ2PmchIIyprdyMm7NKGCX0NL-evY/view?usp=share_link"
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
          Conecte o token ao seu computador e inicie a utilização.
        </Text>
      </div>
    </Container>
  );
}
