/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { blue, neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function Mac() {
  return (
    <Container newClasses="pb-12">
      <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col space-y-8">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Certificado Digital A3 em equipamentos macOS
        </Title>
        <Text appearance="p3" color={neutralMid[500]}>
          Para versões do sistema operacional macOS 10.13 (High Sierra), 10.14
          (Mojave) ou 10.15 (Catalina) é necessário instalar a versão SafeSign
          3.5.0 / 3.6.0 / 3.7.0 ou Safenet 10.2.97
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
                  Versões do driver
                </Title>
              </th>
              <th
                className="border-r p-3 lg:p-6"
                style={{ borderColor: neutralLight[400] }}
              >
                <Title appearance="h6" color={neutralDark[500]}></Title>
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
                  SafeSign 3.7.0 - macOS 32 e 64 bits
                </Text>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/1_lnCtIZjmwEkz_DsLNNVOlhljd1l_Byn/view?usp=share_link"
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
                  SafeSign 3.6.0 - macOS 32 e 64 bits
                </Text>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/1pE5xPc-jTd3QoY_RC8Gk-FdPPnv43Gaa/view?usp=share_link"
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
                  SafeSign 3.5.0 - macOS 32 e 64 bits
                </Text>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/1G2WRveQcz7VGxFhyNNrfkNuZZDZjrZF6/view?usp=share_link"
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
        <Title appearance="h6" color={neutralDark[500]}>
          SafeNet
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
                  Versões do driver
                </Title>
              </th>
              <th
                className="border-r p-3 lg:p-6"
                style={{ borderColor: neutralLight[400] }}
              >
                <Title appearance="h6" color={neutralDark[500]}></Title>
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
                  SafeNet 10.2.97 - macOS 32 e 64 bits
                </Text>
              </td>
              <td className="border-r p-3 lg:p-6">
                <Link
                  className="flex items-center space-x-3"
                  href="https://drive.google.com/file/d/1X0H6Zqo35C0rUMlqvxLv1MbckRWgdIWJ/view?usp=share_link"
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
      </div>
    </Container>
  );
}
