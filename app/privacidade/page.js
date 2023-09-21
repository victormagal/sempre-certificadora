'use client';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import { Container } from '../components/Foundation';

export default function Privacidade() {
  return (
    <main>
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-12 lg:col-span-5 lg:col-start-5 flex flex-col md:space-y-6 text-center px-8 mt-32 mb-12">
          <Overline appearance="o1" color={red[700]}>
            Atualizado em 10 de julho de 2023
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra>
            Política de privacidade
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Respeitamos sua privacidade em relação a qualquer informação sua que
            possamos coletar em nosso site.
          </Text>
        </div>
      </Container>
      <Container>
        <div className="col-span-12 lg:col-span-7 lg:col-start-4">
          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            1. Informações gerais
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            A presente Política de Privacidade contém informações sobre coleta,
            uso, armazenamento, tratamento e proteção dos dados pessoais dos
            usuários e visitantes do site _______________ com a finalidade de
            demonstrar absoluta transparência quanto ao assunto e esclarecer a
            todos interessados sobre os tipos de dados que são coletados, os
            motivos da coleta e a forma como os usuários podem gerenciar ou
            excluir as suas informações pessoais.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Esta Política de Privacidade aplica-se a todos os usuários e
            visitantes do site ____ e integra os Termos e Condições Gerais de
            Uso do site da empresa ____, devidamente inscrita no CNPJ sob o nº
            ___, situada em _____ (endereço completo), doravante nominada ____.
            O presente documento foi elaborado em conformidade com a Lei Geral
            de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da
            Internet (Lei 12.965/14) (e o Regulamento da UE n. 2016/6790),
            podendo ser atualizado em decorrência de eventual atualização
            normativa, razão pela qual se convida o usuário a consultar
            periodicamente esta seção, informando que, ao utilizar nosso site,
            você concorda com as práticas descritas nesta política.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            2. Informações coletadas
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Podemos coletar as seguintes categorias de dados pessoais:
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            2.1. Dados de Identificação: Nome, endereço, CPF, RG, data de
            nascimento e outras informações semelhantes que você forneça ao se
            registrar em nosso site e/ ou para a criação da conta/perfil na
            plataforma ou preencher formulários.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            2.2. Dados de Contato: Endereço de e-mail, número de telefone ou
            outras informações de contato que você forneça voluntariamente para
            nos comunicarmos com você.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            2.3. Dados Para a Otimização da Navegação: Endereço IP, tipo de
            navegador, informações sobre o dispositivo utilizado, histórico de
            navegação, tempo de visita e outras informações coletadas
            automaticamente por meio de cookies e tecnologias similares.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            2.4. Dados para Concretizar Transações: Dados referentes ao
            pagamento e transações, tais como, número do cartão de crédito e
            outras informações sobre o cartão, além dos pagamentos efetuados.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            2.5. Dados Sensíveis: A plataforma poderá coletar os seguintes dados
            sensíveis do usuário, como: origem étnica ou racial, opinião
            política, convicção religiosa, dados genéticos, dados relativos à
            saúde, orientação sexual.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            2.6. Dados Relacionados a Contratos: diante da formalização do
            contrato de compra e venda ou de prestação de serviços entre a
            plataforma e o usuário e visitante poderão ser coletados e
            armazenados dados relativos à execução contratual, inclusive as
            comunicações realizadas entre a empresa e o usuário.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            3. Forma em que os dados são coletados
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Os dados pessoais do usuário e visitante são recolhidos pela
            plataforma da seguinte forma:
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            3.1. Quando o Usuário Cria uma Conta/Perfil na Plataforma: esses
            dados são de identificação básica, como: e-mail, nome completo,
            cidade de residência e profissão. A partir deles, podemos
            identificar o usuário e o visitante, além de garantir uma maior
            segurança e bem-estar às suas necessidades. Ficam cientes os
            usuários e visitantes de que seu perfil na plataforma estará
            acessível a todos demais usuários e visitantes do site.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            3.2. Quando um Usuário e Visitante Acessa Páginas do Site: As
            informações sobre interação e acesso são coletadas pela empresa para
            garantir uma melhor experiência ao usuário e visitante. Estes dados
            podem tratar sobre as palavras-chaves utilizadas em uma busca, o
            compartilhamento de um documento específico, comentários,
            visualizações de páginas, perfis, a URL de onde o usuário e
            visitante provêm, o navegador que utilizam e seus IPs de acesso,
            dentre outras que poderão ser armazenadas e retidas.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            4. Uso dos dados pessoais
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Os dados pessoais do usuário e do visitante coletados e armazenados
            pela plataforma tem por finalidade:
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            4.1. Fornecer e Melhorar Nossos Serviços: Utilizamos seus dados
            pessoais para fornecer e aprimorar os serviços solicitados,
            personalizar sua experiência no site e analisar o seu desempenho,
            além de facilitar, agilizar e cumprir os compromissos estabelecidos
            entre o usuário e a empresa, melhorar a experiência dos usuários e
            fornecer funcionalidades específicas a depender das características
            básicas do usuário.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            4.2. Comunicação: Utilizamos seus dados pessoais para nos
            comunicarmos com você, responder a suas perguntas, fornecer
            informações relevantes sobre nossos produtos ou serviços, enviar
            atualizações, notificações e materiais promocionais, quando você nos
            dá seu consentimento para isso.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            4.3. Comercial: Os dados são usados para personalizar o conteúdo
            oferecido e gerar subsídio à plataforma para a melhora da qualidade
            no funcionamento dos serviços.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            4.4. Cumprimento Legal: Podemos processar seus dados pessoais para
            cumprir obrigações legais, como responder a solicitações de
            autoridades competentes ou investigar atividades fraudulentas.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            O tratamento de dados pessoais para finalidades não previstas nesta
            Política de Privacidade somente ocorrerá mediante comunicação prévia
            ao usuário, de modo que os direitos e obrigações aqui previstos
            permanecem aplicáveis..
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            5. Retenção de dados
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            5.1. Conservaremos os dados pessoais coletados pelo tempo necessário
            para cumprir os propósitos descritos nesta Política de Privacidade,
            a menos que um período de retenção mais longo seja exigido ou
            permitido pela lei aplicável, conforme o disposto no inciso I do
            artigo 15 da Lei 13.709/18.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            5.2. Os dados podem ser removidos ou anonimizados a pedido do
            usuário, excetuando os casos em que a lei oferecer outro tratamento.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            5.3. Ainda, os dados pessoais dos usuários apenas podem ser
            conservados após o término de seu tratamento nas seguintes hipóteses
            previstas no artigo 16 da referida lei:
          </Text>
          <Text appearance="p2" className="mb-6 ml-8" color={neutralMid[500]}>
            I - Cumprimento de obrigação legal ou regulatória pelo controlador;
          </Text>
          <Text appearance="p2" className="mb-6 ml-8" color={neutralMid[500]}>
            II - Estudo por órgão de pesquisa, garantida, sempre que possível, a
            anonimização dos dados pessoais;
          </Text>
          <Text appearance="p2" className="mb-6 ml-8" color={neutralMid[500]}>
            III - Transferência a terceiro, desde que respeitados os requisitos
            de tratamento de dados dispostos nesta Lei;
          </Text>
          <Text appearance="p2" className="mb-6 ml-8" color={neutralMid[500]}>
            IV - Uso exclusivo do controlador, vedado seu acesso por terceiro, e
            desde que anonimizados os dados.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            6. Segurança dos dados pessoais armazenados
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            6.1. A plataforma se compromete a aplicar as medidas técnicas e
            organizativas aptas a proteger os dados pessoais de acessos não
            autorizados e de situações de destruição, perda, alteração,
            comunicação ou difusão de tais dados.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            6.2. Os dados relativos a cartões de crédito são criptografados
            usando a tecnologia secure socket layer (SSL) que garante a
            transmissão de dados de forma segura e confidencial, de modo que a
            transmissão dos dados entre o servidor e o usuário ocorre de maneira
            cifrada e encriptada.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            6.3. A plataforma não se exime de responsabilidade por culpa
            exclusiva de terceiros, como em caso de ataque de hackers ou
            crackers, ou culpa exclusiva do usuário, como no caso em que ele
            mesmo transfere seus dados a terceiros. O site se compromete a
            comunicar o usuário em caso de alguma violação de segurança dos seus
            dados pessoais.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            7. Compartilhamento dos dados
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            Não compartilhamos dados pessoais com terceiros, exceto nas
            seguintes circunstâncias:
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            7.1. Parceiros e Prestadores de Serviços: Podemos compartilhar dados
            pessoais com parceiros de negócios e prestadores de serviços
            terceirizados que nos auxiliam na operação do site, fornecimento de
            serviços, processamento de pagamentos, envio de comunicações ou
            outras finalidades relacionadas ao seu uso do site.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            7.2. Requisitos Legais: Podemos compartilhar dados pessoais quando
            exigido por lei, ordem judicial ou para cumprir com obrigações
            legais, proteger nossos direitos ou responder a solicitações legais
            válidas.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            8. Cookies ou dados de navegação
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            8.1. Os cookies referem-se a arquivos de texto enviados pela
            plataforma ao computador do usuário e visitante e que nele ficam
            armazenados, com informações relacionadas à navegação no site. Tais
            informações são relacionadas aos dados de acesso como local e
            horário de acesso e são armazenadas pelo navegador do usuário e
            visitante para que o servidor da plataforma possa lê-las
            posteriormente a fim de personalizar os serviços da plataforma.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            8.2. O usuário e/ou visitante do site manifesta conhecer e aceitar
            que pode ser utilizado um sistema de coleta de dados de navegação
            mediante à utilização de cookies.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            8.3. O cookie persistente permanece no disco rígido do usuário e
            visitante depois que o navegador é fechado e será usado pelo
            navegador em visitas subsequentes ao site. Os cookies persistentes
            podem ser removidos seguindo as instruções do seu navegador. Já o
            cookie de sessão é temporário e desaparece depois que o navegador é
            fechado. É possível redefinir seu navegador da web para recusar
            todos os cookies, porém alguns recursos da plataforma podem não
            funcionar corretamente se a capacidade de aceitar cookies estiver
            desabilitada.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            9. Seus direitos
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            O usuário e/ou visitante tem direitos garantidos pela LGPD,
            incluindo:
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            9.1. Acesso aos Dados: O usuário pode solicitar informações sobre
            quais dados pessoais seus nós temos e como eles estão sendo
            processados.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            9.2. Retificação dos Dados: Caso o usuário acredite que os dados
            pessoais que possuímos estão incorretos ou desatualizados, pode
            solicitar a correção ou atualização.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            9.3. Exclusão dos Dados: O usuário pode solicitar a exclusão dos
            seus dados pessoais em determinadas circunstâncias, de acordo com a
            lei aplicável.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            9.4. Revogação do Consentimento: Se tivermos coletado e processado
            dados pessoais com base no consentimento do usuário, este terá o
            direito de revogar seu consentimento a qualquer momento.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            10. Consentimento
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            10.1. Ao utilizar os serviços e fornecer as informações pessoais na
            plataforma, o usuário está consentindo com a presente Política de
            Privacidade.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            10.2. O usuário, ao cadastrar-se, manifesta conhecer e pode
            exercitar seus direitos de cancelar seu cadastro, acessar e
            atualizar seus dados pessoais e garante a veracidade das informações
            por ele disponibilizadas.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            10.3. O usuário tem direito de retirar o seu consentimento a
            qualquer tempo, para tanto deve entrar em contato através do e-mail
            _______ ou por correio enviado ao seguinte endereço: ________
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            11. Alterações para essa política de privacidade
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            11.1. Reservamos o direito de modificar essa Política de Privacidade
            a qualquer momento. A versão mais recente estará sempre disponível
            em nosso site.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            11.2. As alterações e esclarecimentos vão surtir efeito
            imediatamente após sua publicação na plataforma. Quando realizadas
            alterações os usuários serão notificados. Ao utilizar o serviço ou
            fornecer informações pessoais após eventuais modificações, o usuário
            e visitante demonstra sua concordância com as novas normas.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            11.3. Diante da fusão ou venda da plataforma à outra empresa os
            dados dos usuários podem ser transferidos para os novos
            proprietários para que a permanência dos serviços oferecidos.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            12. Medidas de segurança
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            12.1. Implementamos medidas técnicas e organizacionais adequadas
            para proteger seus dados pessoais contra acesso não autorizado, uso
            indevido, alteração, destruição ou divulgação não autorizada.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            13. Jurisdição para resolução de conflitos
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            13.1. Para a solução de controvérsias decorrentes do presente
            instrumento será aplicado integralmente o Direito brasileiro.
          </Text>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            13.2. Os eventuais litígios deverão ser apresentados no foro da
            comarca em que se encontra a sede da empresa.
          </Text>

          <Title
            appearance="h4"
            className="mb-6"
            color={neutralDark[500]}
            extra
          >
            {' '}
            14. Contato
          </Title>
          <Text appearance="p2" className="mb-6" color={neutralMid[500]}>
            14.1. Havendo dúvidas ou preocupações sobre esta Política de
            Privacidade ou sobre o processamento de seus dados pessoais, entre
            em contato conosco através do e-mail [inserir endereço de e-mail] ou
            pelo endereço postal [inserir endereço postal].
          </Text>
        </div>
      </Container>
    </main>
  );
}
