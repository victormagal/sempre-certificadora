import {
  neutralDark,
  neutralMid,
  neutralLight,
  warning
} from '@/app/base/Colors';
import { RegularIcon, SolidIcon } from '@/app/base/Icons';
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function Pix(data) {
  const { data: iugu } = data;

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
            Escaneie o código para pagar
          </Title>
          <Title appearance="h6" color={warning[1100]}>
            Após a compra, enviaremos um e-mail de confirmação do pagamento
          </Title>
        </div>
      </div>
      <div className="border col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col lg:flex-row items-center lg:items-start justify-between my-6 py-8 px-6 lg:px-12 rounded space-y-4 lg:space-y-0">
        <div className="flex flex-col space-y-6">
          <ol className="list-decimal ml-6">
            <li>
              <Text appearance="p4" color={neutralMid[500]}>
                Acesse seu internet banking ou app de pagamento
              </Text>
            </li>
            <li>
              <Text appearance="p4" color={neutralMid[500]}>
                Escolha pagar via Pix
              </Text>
            </li>
            <li>
              <Text appearance="p4" color={neutralMid[500]}>
                Escaneie o código ao lado
              </Text>
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center">
          <img alt="QR Code" src={iugu.codeImage} width="280" />
          <button
            className="border flex items-center justify-center px-8 py-4 rounded space-x-2"
            onClick={() => navigator.clipboard.writeText(iugu.codeLine)}
            style={{ borderColor: neutralLight[500] }}
            type="button"
          >
            <RegularIcon
              icon="faCopy"
              iconColor={neutralDark[500]}
              newClasses="h-3"
            />
            <Title appearance="h7" color={neutralDark[500]}>
              Copiar código PIX
            </Title>
          </button>
        </div>
      </div>
    </Container>
  );
}
