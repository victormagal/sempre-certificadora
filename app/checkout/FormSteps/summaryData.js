import Skeleton from 'react-loading-skeleton';
import { neutralDark, neutralMid } from '@/app/base/Colors';
import { formatCurrency } from '@/app/base/Masks';
import { Overline, Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';
import { useFormikContext } from 'formik';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SummaryData({
  desconto,
  description,
  loading,
  valor,
  valor_desconto,
  valor_final
}) {
  const { values } = useFormikContext();
  const date = new Date();

  return (
    <Container>
      <div className="border col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col my-6 py-8 px-6 lg:px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Resumo da compra
        </Title>
        <div className="border-b flex flex-col mb-6 pb-6 space-y-6">
          <Title appearance="h4" color={neutralDark[500]}>
            Dados do cliente
          </Title>
          <ul className="flex flex-col md:flex-row mb-6 lg:space-x-6 space-y-6 md:space-y-0">
            <li className="flex-1">
              <Text appearance="p3" color={neutralMid[600]}>
                Cliente
              </Text>
              {loading ? (
                <Skeleton />
              ) : (
                <Title appearance="h6" color={neutralDark[500]}>
                  {values.name}
                </Title>
              )}
            </li>
            <li className="flex-1">
              <Text appearance="p3" color={neutralMid[600]}>
                CPF/CNPJ
              </Text>
              {loading ? (
                <Skeleton />
              ) : (
                <Title appearance="h6" color={neutralDark[500]}>
                  {values.document}
                </Title>
              )}
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row mb-6 lg:space-x-6 space-y-6 md:space-y-0">
            <li className="flex-1">
              <Text appearance="p3" color={neutralMid[600]}>
                Telefone
              </Text>
              {loading ? (
                <Skeleton />
              ) : (
                <Title appearance="h6" color={neutralDark[500]}>
                  {values.phone}
                </Title>
              )}
            </li>
            <li className="flex-1">
              <Text appearance="p3" color={neutralMid[600]}>
                Email
              </Text>
              {loading ? (
                <Skeleton />
              ) : (
                <Title appearance="h6" color={neutralDark[500]}>
                  {values.mail}
                </Title>
              )}
            </li>
          </ul>
        </div>
        <div className="border-b flex flex-col mb-6 pb-6 space-y-6">
          <Title appearance="h4" color={neutralDark[500]}>
            Dados da compra
          </Title>
          <ul className="flex flex-col md:flex-row mb-6 lg:space-x-6 space-y-6 md:space-y-0">
            <li className="flex-1">
              <Text appearance="p3" color={neutralMid[600]}>
                Data da emissão
              </Text>
              {loading ? (
                <Skeleton />
              ) : (
                <Title appearance="h6" color={neutralDark[500]}>
                  {date.toLocaleDateString('pt-br')}
                </Title>
              )}
            </li>
            <li className="flex-1">
              <Text appearance="p3" color={neutralMid[600]}>
                Descrição
              </Text>
              {loading ? (
                <Skeleton />
              ) : (
                <Title appearance="h6" color={neutralDark[500]}>
                  {description}
                </Title>
              )}
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row mb-6 lg:space-x-6 space-y-6 md:space-y-0">
            <li className="flex-1">
              <Text appearance="p3" color={neutralMid[600]}>
                Forma de pagamento
              </Text>
              {loading ? (
                <Skeleton />
              ) : (
                <Title appearance="h6" color={neutralDark[500]}>
                  {values.forma_pagamento}
                </Title>
              )}
            </li>
            <li className="flex-1">
              <Text appearance="p3" color={neutralMid[600]}>
                Valor total
              </Text>
              {loading ? (
                <Skeleton />
              ) : (
                <Title appearance="h6" color={neutralDark[500]}>
                  {formatCurrency(valor_final, 'BRL', 'pt-BR')}
                </Title>
              )}
            </li>
            {values.parcelas !== '' && (
              <li className="flex-1">
                <Text appearance="p3" color={neutralMid[600]}>
                  Parcelas
                </Text>
                {loading ? (
                  <Skeleton />
                ) : (
                  <Title appearance="h6" color={neutralDark[500]}>
                    {values.parcelas}
                  </Title>
                )}
              </li>
            )}
          </ul>
        </div>
        <ul className="flex flex-col space-y-6">
          <li className="flex justify-between">
            <Title appearance="h6" color={neutralMid[500]}>
              Subtotal
            </Title>
            <Title appearance="h6" color={neutralDark[500]}>
              {formatCurrency(valor, 'BRL', 'pt-BR')}
            </Title>
          </li>
          <li className="flex justify-between">
            <Title appearance="h6" color={neutralMid[500]}>
              Desconto
            </Title>
            <div className="flex items-center space-x-4">
              <div
                className="py-2 rounded text-center"
                style={{ background: '#E6F8F2' }}
              >
                <Overline appearance="o1" className="px-4" color="#076E4F">
                  {desconto}% off
                </Overline>
              </div>
              <Title appearance="h6" color={neutralDark[500]}>
                {formatCurrency(valor_desconto, 'BRL', 'pt-BR')}
              </Title>
            </div>
          </li>
          <li className="flex justify-between">
            <Title appearance="h3" color={neutralDark[500]}>
              Total
            </Title>
            <Title appearance="h3" color={neutralDark[500]}>
              {formatCurrency(valor_final, 'BRL', 'pt-BR')}
            </Title>
          </li>
        </ul>
      </div>
    </Container>
  );
}
