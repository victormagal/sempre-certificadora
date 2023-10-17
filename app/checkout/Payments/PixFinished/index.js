import { success } from '@/app/base/Colors';
import { SolidIcon } from '@/app/base/Icons';
import { Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Elements';

export default function PixFinished() {
  return (
    <Container>
      <div
        className="col-span-4 lg:col-span-10 lg:col-start-2 flex items-center mt-6 py-8 px-6 lg:px-12 rounded space-x-8"
        style={{ backgroundColor: success[200] }}
      >
        <SolidIcon
          icon="faCircleCheck"
          iconColor={success[900]}
          newClasses="h-12"
        />
        <div>
          <Title appearance="h4" color={success[900]} extra>
            Sua compra foi finalizada com sucesso
          </Title>
          <Title appearance="h6" color={success[800]}>
            Em breve você receberá um email de nossos analistas
          </Title>
        </div>
      </div>
    </Container>
  );
}
