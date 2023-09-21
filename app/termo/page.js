'use client';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import { Container } from '../components/Foundation';

export default function Termo() {
  return (
    <main>
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-12 lg:col-span-5 lg:col-start-5 flex flex-col md:space-y-6 text-center px-8 mt-32 mb-12">
          <Overline appearance="o1" color={red[700]}>
            Atualizado em 10 de julho de 2023
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra>
            Termos de uso
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Ao adquirir um de nossos produtos, você concorda em cumprir estes
            termos de serviço e concorda que é responsável pelo cumprimento de
            todas as leis locais aplicáveis.
          </Text>
        </div>
      </Container>
      <Container>
        <div className="col-span-12 lg:col-span-7 lg:col-start-4">
          <Text appearance="p1" className="mb-12" color={neutralMid[500]}>
            Um termo de uso, também conhecido como termos de serviço ou contrato
            de usuário final, é um documento legal que estabelece as regras e
            condições que regem o uso de um serviço, aplicativo, plataforma
            online, site ou software. Esses termos são elaborados pelo provedor
            do serviço e definem as responsabilidades, direitos e obrigações
            tanto do provedor quanto dos usuários que acessam ou utilizam o
            serviço.
          </Text>
          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            Quais são as informações que coletamos?
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Nós coletamos informações que você (usuário), fornece diretamente ao
            utilizar nosso site, como nome, endereço de e-mail e outras
            informações de contato. Além disso, podemos coletar informações
            automaticamente, como endereço IP, tipo de navegador, dispositivo
            utilizado, páginas visitadas e atividades no site.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            Como usamos sua informação?
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Os dados pessoais do usuário e do visitante coletados e armazenados
            pela plataforma tem por finalidade: personalizar sua experiência no
            site, processar transações, enviar informações relevantes, responder
            a perguntas e fornecer suporte. Também podemos utilizar as
            informações para melhorar nossos serviços, realizar análises
            internas e enviar comunicações de marketing, esta última somente nas
            hipóteses de autorização expressa quanto ao recebimento de conteúdo.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            Usamos cookies e outras tecnologias de rastreamento?
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Sim, utilizamos cookies e tecnologias similares para coletar
            informações sobre a sua interação com o site. Isso nos ajuda a
            melhorar a funcionalidade do site, analisar tendências e
            personalizar o conteúdo. Você pode configurar seu navegador para
            recusar cookies, mas isso pode afetar a sua experiência no site.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            Por quanto tempo mantemos suas informações?
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Conforme exigido pela Lei Geral de Proteção de Dados (LGPD),
            mantemos suas informações pessoais apenas pelo tempo necessário para
            cumprir as finalidades para as quais foram coletadas. Após o período
            de retenção, suas informações serão devidamente anonimizadas ou
            excluídas de nossos sistemas.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            No mais, os dados pessoais dos usuários apenas podem ser conservados
            após o término de seu tratamento nas seguintes hipóteses previstas
            no artigo 16 da referida lei:
          </Text>
          <Text appearance="p2" color={neutralMid[500]}>
            1. Cumprimento de obrigação legal ou regulatória pelo controlador;
          </Text>
          <Text appearance="p2" color={neutralMid[500]}>
            2. Estudo por órgão de pesquisa, garantida, sempre que possível, a
            anonimização dos dados pessoais;
          </Text>
          <Text appearance="p2" color={neutralMid[500]}>
            3. Transferência a terceiro, desde que respeitados os requisitos de
            tratamento de dados dispostos nesta Lei;
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            4. Uso exclusivo do controlador, vedado seu acesso por terceiro, e
            desde que anonimizados os dados.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            Como mantemos suas informações seguras?
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Implementamos medidas de segurança técnicas e organizacionais para
            proteger suas informações contra acesso não autorizado, divulgação
            ou alteração. No entanto, é importante lembrar que nenhum método de
            transmissão pela internet ou sistema de armazenamento eletrônico é
            totalmente seguro, assim, em caso de qualquer falha ou invasão,
            agiremos tomando todas as medidas necessárias para compelir
            quaisquer atos decorrentes da falibilidade.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            Quais são os seus direitos de privacidade?
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            O usuário e/ou visitante tem direitos garantidos pela LGPD,
            incluindo:
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            <strong>Acesso aos Dados:</strong> O usuário pode solicitar
            informações sobre quais dados pessoais seus nós temos e como eles
            estão sendo processados.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            <strong>Retificação dos Dados:</strong> Caso o usuário acredite que
            os dados pessoais que possuímos estão incorretos ou desatualizados,
            pode solicitar a correção ou atualização.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            <strong>Exclusão dos Dados:</strong> O usuário pode solicitar a
            exclusão dos seus dados pessoais em determinadas circunstâncias, de
            acordo com a lei aplicável.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            <strong>Revogação do Consentimento:</strong> Se tivermos coletado e
            processado dados pessoais com base no consentimento do usuário, este
            terá o direito de revogar seu consentimento a qualquer momento.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            Como você pode entrar em contato conosco sobre esta política?
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Havendo dúvidas ou preocupações quanto ao presente Termo de Uso ou
            sobre o processamento de seus dados pessoais, entre em contato
            conosco através dos seguintes meios:
          </Text>
          <Text appearance="p2" color={neutralMid[500]}>
            Endereço: [Endereço da Empresa]
          </Text>
          <Text appearance="p2" color={neutralMid[500]}>
            E-mail: [E-mail de Contato]
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Telefone: [Número de Telefone]
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Ao utilizar nosso site, você concorda com os termos desta Política
            de Privacidade e com o processamento das suas informações conforme
            descrito aqui. Reservamo-nos o direito de atualizar esta política
            periodicamente, refletindo quaisquer alterações nas práticas de
            privacidade. Recomendamos que você reveja esta política
            regularmente.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Última atualização: [inserir data da última atualização].
          </Text>
        </div>
      </Container>
    </main>
  );
}
