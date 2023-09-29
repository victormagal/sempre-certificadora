import { red } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function Error() {
  return (
    <Container>
      <div
        className="col-span-4 lg:col-span-10 lg:col-start-2 flex items-center mt-6 py-8 px-6 lg:px-12 rounded space-x-8"
        style={{ backgroundColor: red[100] }}
      >
        <SolidIcon icon="faBan" iconColor={red[500]} newClasses="h-12" />
        <div>
          <Title appearance="h4" color={red[1200]} extra>
            Compra não finalizada
          </Title>
          <Title appearance="h6" color={red[1200]}>
            Ocorreu algum erro e não foi possível finalizar sua transação. Tente
            novamente mais tarde ou entre em contato com um de nossos
            vendedores.
          </Title>
        </div>
      </div>
    </Container>
  );
}
