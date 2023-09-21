import { neutralDark, neutralMid } from '@/app/base/Colors';
import { Overline, Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';
import { useFormikContext } from 'formik';

export default function SummaryData() {
  const { values } = useFormikContext();

  return (
    <Container>
      <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Resumo da compra
        </Title>
        <div className="border-b flex flex-col mb-6 pb-6 space-y-6">
          <Title appearance="h4" color={neutralDark[500]}>
            Dados do cliente
          </Title>
          <ul className="flex space-x-6">
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                Cliente
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.name}
              </Title>
            </li>
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                CPF/CNPJ
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.document}
              </Title>
            </li>
            <li className="w-1/3"></li>
          </ul>
          <ul className="flex space-x-6">
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                Telefone
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.phone}
              </Title>
            </li>
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                Email
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.mail}
              </Title>
            </li>
            <li className="w-1/3"></li>
          </ul>
        </div>
        <div className="border-b flex flex-col mb-6 pb-6 space-y-6">
          <Title appearance="h4" color={neutralDark[500]}>
            Dados da compra
          </Title>
          <ul className="flex space-x-6">
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                Data da emissão
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.name}
              </Title>
            </li>
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                Descrição
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.document}
              </Title>
            </li>
            <li className="w-1/3"></li>
          </ul>
          <ul className="flex space-x-6">
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                Forma de pagamento
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.phone}
              </Title>
            </li>
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                Valor total
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.mail}
              </Title>
            </li>
            <li className="w-1/3">
              <Text appearance="p3" color={neutralMid[600]}>
                Parcelas
              </Text>
              <Title appearance="h6" color={neutralDark[500]}>
                {values.document}
              </Title>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col space-y-6">
          <li className="flex justify-between">
            <Title appearance="h6" color={neutralMid[500]}>
              Subtotal
            </Title>
            <Title appearance="h6" color={neutralDark[500]}>
              R$ 242,00
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
                  25% off
                </Overline>
              </div>
              <Title appearance="h6" color={neutralDark[500]}>
                R$ 62,10
              </Title>
            </div>
          </li>
          <li className="flex justify-between">
            <Title appearance="h3" color={neutralDark[500]}>
              Total
            </Title>
            <Title appearance="h3" color={neutralDark[500]}>
              R$ 179,90
            </Title>
          </li>
        </ul>
      </div>
    </Container>
  );
}
