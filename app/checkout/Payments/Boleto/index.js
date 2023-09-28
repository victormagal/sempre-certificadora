import Link from 'next/link';
import {
  neutralDark,
  neutralMid,
  neutralLight,
  success,
  warning
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
      <div
        className="col-span-4 lg:col-span-10 lg:col-start-2 flex items-center mt-6 py-8 px-6 lg:px-12 rounded space-x-8"
        style={{ backgroundColor: warning[200] }}
      >
        <SolidIcon
          icon="faTriangleExclamation"
          iconColor={warning[500]}
          newClasses="h-12"
        />
        <div>
          <Title appearance="h4" color={warning[1100]} extra>
            Você tem até o dia {due_date} para pagar
          </Title>
          <Title appearance="h6" color={warning[1100]}>
            Para efetivar a compra, basta efetuar o pagamento do seu boleto.
            Lembre-se: um de nossos especialistas entrará em contato após a
            confirmação de pagamento.
          </Title>
        </div>
      </div>
      <div className="border col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col my-6 py-8 px-6 lg:px-12 rounded space-y-6">
        <div>
          <Text appearance="p3" color={neutralMid[600]}>
            Em breve você receberá uma confirmação com todos os detalhes do
            pedido em:{' '}
            <span style={{ color: neutralDark[500], fontWeight: 'bold' }}>
              {iugu.email}
            </span>
          </Text>
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row lg:space-x-2">
            <Text appearance="p1" color={neutralMid[600]}>
              Valor da cobrança:
            </Text>
            <Title appearance="h5" color={neutralDark[500]}>
              {iugu.value}
            </Title>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-2">
            <Text appearance="p1" color={neutralMid[600]}>
              Data de vencimento:
            </Text>
            <Title appearance="h5" color={neutralDark[500]}>
              {due_date}
            </Title>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            alt="Código de barras"
            className="lg:w-3/4"
            src={iugu.codeImage}
          />
          <Text
            appearance="p1"
            className="break-all text-center"
            color={neutralMid[600]}
          >
            {iugu.codeLine}
          </Text>
        </div>
        <ul className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
          <li className="border justify-center px-8 py-4 rounded">
            <Link href={iugu.url || '/'} target="_blank">
              <button
                className="flex items-center space-x-2"
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
          <li
            className="justify-center px-8 py-4 rounded"
            style={{ backgroundColor: success[900] }}
          >
            <button
              className="flex items-center space-x-2"
              onClick={() => navigator.clipboard.writeText(iugu.codeLine)}
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
