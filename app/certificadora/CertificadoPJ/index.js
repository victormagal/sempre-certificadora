'use client';
import Link from 'next/link';
import { neutralDark, neutralLight, neutralMid, red } from '../../base/Colors';
import RegularIcon from '../../base/RegularIcon';
import SolidIcon from '../../base/SolidIcon';
import { Overline, Text, Title } from '../../base/Typography';
import { Container } from '../../components/Foundation';

export default function CertificadoPJ() {
  return (
    <Container newClasses="pb-16">
      <div className="col-span-4 col-start-2 flex flex-col space-y-8">
        <div
          className="h-14 flex items-center justify-center rounded-full w-14"
          style={{ background: red[100] }}
        >
          <RegularIcon
            icon="faBuilding"
            iconColor={red[900]}
            newClasses="h-6"
          />
        </div>
        <Title appearance="h3" color={neutralDark[500]}>
          Para sua empresa
        </Title>
        <Text appearance="p3" color={neutralMid[600]}>
          A identidade virtual do seu negócio! Validade jurídica para fazer
          transações e assinar documentos com segurança e praticidade.
        </Text>
        <ul className="flex flex-col space-y-3">
          <li className="flex space-x-2 items-center">
            <RegularIcon
              icon="faMoneyBill1"
              iconColor={red[900]}
              newClasses="h-5 w-5"
            />
            <Text appearance="p3" color={neutralMid[600]}>
              Reduz custos
            </Text>
          </li>
          <li className="flex space-x-2 items-center">
            <RegularIcon
              icon="faLemon"
              iconColor={red[900]}
              newClasses="h-5 w-5"
            />
            <Text appearance="p3" color={neutralMid[600]}>
              É sustentável
            </Text>
          </li>
          <li className="flex space-x-2 items-center">
            <RegularIcon
              icon="faPaperPlane"
              iconColor={red[900]}
              newClasses="h-5 w-5"
            />
            <Text appearance="p3" color={neutralMid[600]}>
              Garante mobilidade
            </Text>
          </li>
        </ul>
      </div>
      <div
        className="border col-span-3 flex flex-col space-y-8 py-8 px-6 rounded-2xl"
        style={{
          background: neutralLight[100],
          borderColor: neutralLight[400]
        }}
      >
        <header className="flex flex-col space-y-1">
          <div
            className="flex justify-center py-2 rounded w-1/4"
            style={{ background: '#E6F8F2' }}
          >
            <Overline appearance="o1" color="#076E4F">
              25% off
            </Overline>
          </div>
          <div>
            <Title appearance="h4" color={neutralDark[400]} extra>
              e-CPF A1
            </Title>
          </div>
        </header>
        <main className="flex flex-col space-y-1">
          <Text appearance="p3" color={neutralMid[600]}>
            A partir
          </Text>
          <Text
            appearance="p3"
            color={neutralMid[600]}
            className="line-through"
          >
            De R$242 por
          </Text>
          <Title appearance="h2" color={neutralDark[500]} extra>
            R$ 179,90
          </Title>
          <Text appearance="p3" color={neutralMid[600]}>
            3x de R$59,97 no crédito
          </Text>
        </main>
        <footer className="flex flex-col items-center space-y-4">
          <Text appearance="p4" color={neutralDark[500]}>
            Validade de 12 meses
          </Text>
          <button
            className="py-4 rounded-md w-full"
            style={{ background: red[1000] }}
          >
            <Link
              className="flex items-center justify-center space-x-3"
              href="/checkout"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Comprar agora
              </Text>
              <SolidIcon
                icon="faChevronRight"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
            </Link>
          </button>
        </footer>
      </div>
      <div
        className="border col-span-3 flex flex-col space-y-8 py-8 px-6 rounded-2xl"
        style={{
          background: neutralLight[100],
          borderColor: neutralLight[400]
        }}
      >
        <header className="flex flex-col space-y-1">
          <div
            className="flex justify-center py-2 rounded w-1/4"
            style={{ background: '#E6F8F2' }}
          >
            <Overline appearance="o1" color="#076E4F">
              25% off
            </Overline>
          </div>
          <div>
            <Title appearance="h4" color={neutralDark[400]} extra>
              e-CPF A3
            </Title>
          </div>
        </header>
        <main className="flex flex-col space-y-1">
          <Text appearance="p3" color={neutralMid[600]}>
            A partir
          </Text>
          <Text
            appearance="p3"
            color={neutralMid[600]}
            className="line-through"
          >
            De R$339 por
          </Text>
          <Title appearance="h2" color={neutralDark[500]} extra>
            R$ 254,25
          </Title>
          <Text appearance="p3" color={neutralMid[600]}>
            3x de R$84,75 no crédito
          </Text>
        </main>
        <footer className="flex flex-col items-center space-y-4">
          <Text appearance="p4" color={neutralDark[500]}>
            Validade de 36 meses
          </Text>
          <button
            className="py-4 rounded-md w-full"
            style={{ background: red[1000] }}
          >
            <Link
              className="flex items-center justify-center space-x-3"
              href="/checkout"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Comprar agora
              </Text>
              <SolidIcon
                icon="faChevronRight"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
            </Link>
          </button>
        </footer>
      </div>
    </Container>
  );
}
