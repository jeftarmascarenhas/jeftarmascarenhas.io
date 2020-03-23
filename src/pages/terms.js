import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import Header from 'components/header'
import SEO from 'components/seo'
import Box, { BoxBody, BoxHeader } from 'components/box'
import * as C from 'styles/common'

const Policies = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'terms.title' })} />
      <Header
        siteTitle={`Jeftar Mascarenhas - ${intl.formatMessage({
          id: 'terms.title',
        })}`}
        description={intl.formatMessage({ id: 'terms.description' })}
      />
      <Box className="my-4">
        <BoxHeader>
          <C.Title className="my-2">
            {intl.formatMessage({ id: 'terms.title' })}
          </C.Title>
          <C.SubTitle>
            {intl.formatMessage({ id: 'terms.description' })}
          </C.SubTitle>
          <hr />
        </BoxHeader>
        <BoxBody>
          <h2>Termo de Uso</h2>
          <p>
            Este site pertence e é operado por jeftar.com.br. Estes Termos
            estabelecem os termos e condições sob os quais você pode utilizar
            nosso site e serviços oferecidos por nós. Este site oferece aos
            visitantes os serviços de informações técnicas, serviços e produtos
            web e mobile, vendas, mentoria, criação de sistemas web e mobile e
            treinamentos. Ao acessar ou usar o website do nosso serviço, você
            aprova que leu, entendeu e concorda em ficar vinculado a estes
            Termos.
          </p>
          <p>
            Este site pertence e é operado por Tampa Tech. Estes Termos
            estabelecem os termos e condições sob os quais você pode utilizar
            nosso site e serviços oferecidos por nós. Este site oferece aos
            visitantes os serviços de informações técnicas, serviços e produtos
            web e mobile, vendas, mentoria, criação de sistemas web e mobile e
            treinamentos. Ao acessar ou usar o website do nosso serviço, você
            aprova que leu, entendeu e concorda em ficar vinculado a estes
            Termos.
          </p>
          <p>
            Ao comprar um item, você concorda que: (i) é responsável por ler a
            listagem completa do item antes de assumir o compromisso de
            comprá-lo: (ii) aceita um contrato juridicamente vinculativo para
            comprar um item quando se compromete a comprar um item e você
            conclui o processo de pagamento de check-out.
          </p>
          <p>
            Os preços que cobramos pelos nossos serviços / produtos estão
            listados no site. Reservamo-nos o direito de alterar nossos preços
            de produtos exibidos a qualquer momento e corrigir erros de
            precificação que possam ocorrer inadvertidamente. Informações
            adicionais sobre preços e impostos sobre vendas estão disponíveis na
            página de pagamentos.
          </p>
          <p>
            A taxa pelos serviços e quaisquer outros encargos que você possa
            incorrer em conexão com o uso do serviço, como impostos e possíveis
            taxas de transação, serão cobrados mensalmente por sua forma de
            pagamento.
          </p>
          <h2>Política de devolução e reembolso</h2>
          <p>
            Como nossos serviços e produtos são online, e caso você não queira
            continuar a utiliza-los apenas deixe de pagar o serviços e produtos.
            Isso vale para serviços e produtos que não tenha contrato, caso o
            serviço ou produto que você utilize tenha contrato favor entrar
            contato conosco.
          </p>
          <h2>Retenção do direito de mudar de oferta</h2>
          <p>
            Podemos, sem aviso prévio, alterar os serviços; deixar de fornecer
            os serviços ou quaisquer recursos dos serviços que oferecemos; ou
            criar limites para os serviços.
          </p>
          <p>
            Podemos rescindir ou suspender, permanentemente ou temporariamente,
            o acesso aos serviços sem aviso prévio e responsabilidade por
            qualquer motivo ou sem motivo.
          </p>

          <h2>Garantias e responsabilidade por serviços e produtos</h2>
          <p>
            A maoria de nossos serviços e produtos o cliente não precisa de
            contrato, caso você utilize um serviço ou produto que tenha
            contrato, entre em contato conosco. Para serviços e produtos que não
            tenha contrato apenas não pegue ou exclua sua conta sem prejuizos.
          </p>

          <h2>Propriedade intelectual, direitos autorais e logotipos</h2>
          <p>
            O Serviço e todos os materiais nele contidos ou transferidos,
            incluindo, sem limitação, software, imagens, textos, gráficos,
            logotipos, patentes, marcas registradas, marcas de serviço, direitos
            autorais, fotografias, áudio, vídeos, música e todos os Direitos de
            Propriedade Intelectual relacionados a eles são a propriedade
            exclusiva de jeftar.com.br e Tampa Tech. Exceto conforme
            explicitamente fornecido neste documento, nada nestes Termos deverá
            ser considerado como uma licença em ou sob tais Direitos de
            Propriedade Intelectual, e você concorda em não vender, licenciar,
            alugar, modificar, distribuir, copiar, reproduzir, transmitir,
            exibir publicamente, realizar publicamente, publicar, adaptar,
            editar ou criar trabalhos derivados.
          </p>
          <h2>Direito de suspender ou cancelar conta de usuário</h2>
          <p>
            odemos rescindir ou suspender permanentemente ou temporariamente seu
            acesso ao serviço sem aviso prévio e responsabilidade por qualquer
            motivo, inclusive se, em nossa única e exclusiva determinação, você
            violar qualquer disposição destes Termos ou qualquer lei ou
            regulamentação aplicável. Você pode interromper o uso e solicitar o
            cancelamento da sua conta e / ou de qualquer serviço a qualquer
            momento. Não obstante qualquer disposição em contrário no que diz
            respeito a assinaturas automaticamente renovadas de serviços pagos,
            tais assinaturas serão descontinuadas somente após o término do
            respectivo período para o qual você já efetuou pagamento.
          </p>
          <h2>Limitação de responsabilidade</h2>
          <p>
            Na máxima extensão permitida pela lei aplicável, em nenhuma
            circunstância o jeftar.com.br será responsável por quaisquer danos
            indiretos, punitivos, incidentais, especiais, consequenciais ou
            exemplares, incluindo, sem limitação, danos por lucros cessantes,
            boa vontade, uso de dados ou outras perdas intangíveis, decorrentes
            ou relacionadas ao uso ou incapacidade de usar o serviço. Na
            extensão máxima permitida pela lei aplicável, o jeftar.com.br e
            Tampa Tech não assume nenhuma responsabilidade por quaisquer erros
            (i), erros ou imprecisões de conteúdo; (ii) ferimentos pessoais ou
            danos materiais, de qualquer natureza, resultantes do seu acesso ou
            uso do nosso serviço; e (iii) qualquer acesso não autorizado ou uso
            de nossos servidores seguros e / ou toda e qualquer informação
            pessoal armazenada nele.
          </p>
          <h2>Direito de alterar e modificar os Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos de tempos em
            tempos, a nosso exclusivo critério. Portanto, você deve revisar
            essas páginas periodicamente. Quando alterarmos os Termos de maneira
            material, você será notificado. Seu uso continuado do Site ou de
            nosso serviço após qualquer alteração constitui sua aceitação dos
            novos Termos. Se você não concordar com algum destes termos ou
            qualquer versão futura dos Termos, não use ou acesse (ou continue a
            acessar) o site ou o serviço.
          </p>
          <h2>E-mails promocionais e conteúdo</h2>
          <p>
            Você concorda em receber de tempos em tempos mensagens promocionais
            e materiais por correio, e-mail ou qualquer outro formulário de
            contato que você possa nos fornecer (incluindo seu número de
            telefone para chamadas ou mensagens de texto). Se você não deseja
            receber esses materiais promocionais ou avisos - por favor, basta
            nos notificar a qualquer momento.
          </p>
          <h2>Preferência de lei e resolução de disputas</h2>
          <p>
            Estes Termos, os direitos e recursos aqui previstos, e todas e
            quaisquer reclamações e disputas relacionadas a ele e / ou aos
            serviços, serão regidos, interpretados e aplicados em todos os
            aspectos única e exclusivamente de acordo com as leis internas de [
            Nome do País / Estado], sem respeito aos seus conflitos de
            princípios legais. Todas e quaisquer reclamações e disputas serão
            apresentadas, e você consente que elas sejam decididas
            exclusivamente por um tribunal de jurisdição competente localizado
            em [Nome da cidade dos tribunais]. A aplicação da Convenção das
            Nações Unidas de Contratos para a Venda Internacional de Bens é
            expressamente excluída.
          </p>
        </BoxBody>
      </Box>
    </Layout>
  )
}

export default Policies
