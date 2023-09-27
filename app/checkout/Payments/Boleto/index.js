import Link from 'next/link';
import {
  neutralDark,
  neutralMid,
  neutralLight,
  success
} from '@/app/base/Colors';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function Boleto(data) {
  const { data: iugu } = data;
  const due = iugu.vencimento.split('-');
  const due_date = `${due[2]}/${due[1]}/${due[0]}`;

  return (
    <Container>
      <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
        <div>
          <Text appearance="p3" color={neutralMid[600]}>
            Em breve você receberá uma confirmação com todos os detalhes do
            pedido em:{' '}
            <span style={{ color: neutralDark[500], fontWeight: 'bold' }}>
              {iugu.email}
            </span>
          </Text>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <Text appearance="p1" color={neutralMid[600]}>
              Valor da cobrança:
            </Text>
            <Title appearance="h5" color={neutralDark[500]}>
              {iugu.value}
            </Title>
          </div>
          <div className="flex space-x-2">
            <Text appearance="p1" color={neutralMid[600]}>
              Data de vencimento:
            </Text>
            <Title appearance="h5" color={neutralDark[500]}>
              {due_date}
            </Title>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img alt="Código de barras" src={iugu.codeImage} width="60%" />
          <Text appearance="p1" color={neutralMid[600]}>
            {iugu.codeLine}
          </Text>
        </div>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href={iugu.url || '/'} target="_blank">
              <button
                className="border flex items-center px-8 py-4 rounded space-x-2"
                style={{ borderColor: neutralLight[500] }}
                type="button"
              >
                <SolidIcon
                  icon="faPrint"
                  iconColor={neutralDark[500]}
                  newClasses="h-3"
                />
                <Title appearance="h7" color={neutralDark[500]}>
                  Imprimir boleto
                </Title>
              </button>
            </Link>
          </li>
          <li>
            <button
              className="flex items-center px-8 py-4 rounded space-x-2"
              onClick={() => navigator.clipboard.writeText(iugu.codeLine)}
              style={{ backgroundColor: success[900] }}
              type="button"
            >
              <RegularIcon
                icon="faCopy"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
              <Title appearance="h7" color={neutralLight[100]}>
                Copiar código
              </Title>
            </button>
          </li>
        </ul>
      </div>
    </Container>
  );
}
