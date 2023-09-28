import { neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { formatCurrency } from '@/app/base/Masks';
import { Overline, Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function SelectedProduct(values) {
  return (
    <Container>
      <ul className="border col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col lg:flex-row justify-between mb-6 py-8 px-6 lg:px-12 rounded lg:space-x-4 space-y-4 lg:space-y-0">
        <li className="hidden lg:block">
          <Title appearance="h4" color={neutralDark[500]} extra>
            Certificado selecionado
          </Title>
        </li>
        <li className="flex flex-col space-y-2">
          <div
            className="py-2 rounded text-center"
            style={{ background: '#E6F8F2' }}
          >
            <Overline appearance="o1" color="#076E4F">
              {values?.values?.percentual_desconto}% off
            </Overline>
          </div>
          <div>
            <Title appearance="h4" color={neutralDark[400]} extra>
              {values?.values?.nome}
            </Title>
          </div>
        </li>
        <li className="flex flex-col space-y-2">
          <Text
            appearance="p3"
            color={neutralMid[600]}
            className="line-through"
          >
            De {formatCurrency(values?.values?.valor, 'BRL', 'pt-BR')} por
          </Text>
          <Title appearance="h2" color={neutralDark[500]} extra>
            {formatCurrency(values?.values?.valor_com_desconto, 'BRL', 'pt-BR')}
          </Title>
          <Text appearance="p3" color={neutralMid[600]}>
            3x de{' '}
            {formatCurrency(
              values?.values?.valor_com_desconto / 3,
              'BRL',
              'pt-BR'
            )}{' '}
            no crédito
          </Text>
          <Text
            appearance="p4"
            className="text-center lg:text-left"
            color={neutralDark[500]}
          >
            Validade de 12 meses
          </Text>
        </li>
        <li className="flex items-center">
          <button
            className="border flex items-center justify-center py-4 px-8 rounded-md space-x-3 w-full"
            style={{
              background: neutralLight[100],
              borderColor: neutralLight[500]
            }}
          >
            <Title appearance="h7" color={neutralDark[500]}>
              Trocar certificado
            </Title>
          </button>
        </li>
      </ul>
    </Container>
  );
}
