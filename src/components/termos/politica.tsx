
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importa ícones de menu




function PoliticaPrivacidade() {



  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  
  return (
    <>

       <nav className="fixed top-0 z-50 py-3 bg-[#F2E9E9] w-full shadow-md">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/">
              <img src="./src/assets/logoetrium.png" alt="logo" className='w-[130px]' />
            </a>
          </div>

          {/* Desktop Menu */}
      

          {/* Desktop Buttons */}
          <div className="relative hidden lg:flex justify-center space-x-4 items-center">
            <a
              href="https://app.etrium.com.br/"
              className="relative bg-[#0072C7] py-2 px-9 z-10 rounded-full text-white font-bold hover:bg-[#005bb5]"
              target='_blank'
              rel='noreferrer'
            >
              Acessar Sistema
            </a>
            <a
              href="https://app.etrium.com.br/#/cadastro"
              className="relative py-2 px-9 z-10 rounded-full text-[#0072C7] font-bold hover:bg-[#0072C7] border border-[#0072C7] hover:text-white"
              target='_blank'
              rel='noreferrer'
            >
              Cadastrar
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="text-[#2A2A34] focus:outline-none">
              {mobileDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden bg-[#F2E9E9] w-full py-4">
            <ul className="flex flex-col items-center space-y-4 font-mono text-[17px]">
             
              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-2 mt-4 w-full px-6">
                <a
                  href="https://app-staging.etrium.com.br/#/"
                  className="bg-[#0072C7] py-2 rounded-full text-white font-bold hover:bg-[#005bb5] text-center"
                  target='_blank'
                  rel='noreferrer'
                >
                  Acessar Sistema
                </a>
                <a
                  href="https://app-staging.etrium.com.br/#/cadastro"
                  className="py-2 rounded-full text-[#0072C7] font-bold hover:bg-[#0072C7] border border-[#0072C7] hover:text-white text-center"
                  target='_blank'
                  rel='noreferrer'
                >
                  Cadastrar
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>


      <section className="container mx-auto py-12 px-4 md:px-8 lg:px-16 text-gray-700 leading-7">
        <h1 className="text-3xl font-bold text-center text-[#2A2A34] mb-8">Política de Privacidade do Aplicativo Etrium</h1>

        <p className="mb-4">
          Bem-vindo à Política de Privacidade do aplicativo Etrium ("nós", "nosso" ou "Etrium"). Esta política detalha nossas práticas em relação à coleta, uso, divulgação e proteção de informações pessoais quando você utiliza nosso aplicativo móvel chamado Etrium ("aplicativo"). Reconhecemos a importância da privacidade e estamos comprometidos em proteger os dados pessoais dos nossos usuários ("você" ou "usuário"). Ao acessar ou usar o aplicativo Etrium, você concorda com as práticas descritas nesta Política de Privacidade.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informações que Coletamos</h2>
        <p className="mb-4"><strong>1.1.</strong> Informações de Registro e Perfil: Quando você cria uma conta no Etrium, coletamos informações como seu nome, endereço de e-mail, número de telefone e outras informações de contato. Além disso, você pode optar por adicionar informações ao seu perfil, como foto e detalhes profissionais.</p>
        <p className="mb-4"><strong>1.2.</strong> Informações de Uso: Coletamos informações sobre como você interage com o aplicativo, incluindo ações dentro do aplicativo, tempos de acesso, histórico de navegação e preferências de uso. Isso nos ajuda a compreender melhor como você utiliza o Etrium e a melhorar constantemente sua experiência.</p>
        <p className="mb-4"><strong>1.3.</strong> Informações de Pagamento: Se você realizar transações de pagamento através do aplicativo, coletaremos informações de pagamento, como detalhes do cartão de crédito ou outros métodos de pagamento, bem como informações de faturamento.</p>
        <p className="mb-4"><strong>1.4.</strong> Informações de Localização: Com sua permissão, podemos coletar informações de localização do seu dispositivo para fornecer serviços baseados em localização, como pesquisa de escritórios jurídicos próximos ou eventos relevantes à sua localização.</p>
        <p className="mb-4"><strong>1.5.</strong> Informações do Dispositivo: Coletamos informações técnicas sobre seu dispositivo, como tipo de dispositivo, sistema operacional, versão do aplicativo e identificadores únicos, para fins de suporte técnico e melhorias na compatibilidade.</p>
        <p className="mb-4"><strong>1.6.</strong> Informações de Comunicação: Se você entrar em contato conosco, podemos coletar informações relacionadas à comunicação, para responder às suas consultas e fornecer suporte eficiente.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso das Informações</h2>
        <p className="mb-4"><strong>2.1.</strong> Prestação de Serviços: Utilizamos as informações coletadas para fornecer, operar, manter e melhorar o aplicativo Etrium, bem como para desenvolver novos recursos e serviços.</p>
        <p className="mb-4"><strong>2.2.</strong> Personalização da Experiência: Utilizamos suas informações para personalizar sua experiência no aplicativo, exibindo conteúdo e funcionalidades relevantes aos seus interesses e perfil.</p>
        <p className="mb-4"><strong>2.3.</strong> Comunicação: Podemos usar seu endereço de e-mail para enviar notificações sobre atualizações, novos recursos, eventos e ofertas especiais relacionadas ao Etrium. Você pode gerenciar suas preferências de comunicação a qualquer momento.</p>
        <p className="mb-4"><strong>2.4.</strong> Análise e Pesquisa: Utilizamos dados anonimizados para análises internas, pesquisa de mercado e aprimoramento dos nossos serviços. Isso nos ajuda a compreender tendências de uso e preferências dos usuários.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Compartilhamento de Informações</h2>
        <p className="mb-4"><strong>3.1.</strong> Parceiros de Serviço: Podemos compartilhar informações com parceiros de serviço terceirizados que nos auxiliam na prestação do serviço, como provedores de hospedagem, serviços de pagamento e análise de dados. Esses parceiros estão sujeitos a obrigações contratuais de proteção de dados.</p>
        <p className="mb-4"><strong>3.2.</strong> Compartilhamento Selecionado: Em algumas circunstâncias, podemos compartilhar informações com terceiros selecionados, como escritórios jurídicos parceiros, para fins específicos, como referências ou colaborações profissionais. Isso será feito com o seu consentimento.</p>
        <p className="mb-4"><strong>3.3.</strong> Requisitos Legais e Proteção: Reservamo-nos o direito de divulgar informações quando acreditarmos de boa-fé que a divulgação é necessária para cumprir com obrigações legais, proteger nossos direitos, segurança ou propriedade, ou responder a uma ordem judicial ou processo legal válido.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Armazenamento e Segurança das Informações</h2>
        <p className="mb-4"><strong>4.1.</strong> Medidas de Segurança: Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhuma plataforma é completamente segura, e não podemos garantir a segurança absoluta dos dados.</p>
        <p className="mb-4"><strong>4.2.</strong> Retenção de Dados: Manteremos suas informações pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Seus Direitos e Escolhas</h2>
        <p className="mb-4"><strong>5.1.</strong> Acesso e Atualização: Você pode acessar e atualizar suas informações de perfil a qualquer momento. Seu direito de acesso também se estende às informações pessoais que coletamos e mantemos sobre você.</p>
        <p className="mb-4"><strong>5.2.</strong> Exclusão de Dados: Você pode solicitar a exclusão das suas informações pessoais, sujeito a obrigações legais e regulatórias que possam exigir a retenção de certos dados.</p>
        <p className="mb-4"><strong>5.3.</strong> Gerenciamento de Comunicações: Você pode gerenciar suas preferências de comunicação, incluindo a opção de optar por não receber nossas comunicações promocionais.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Transferência Internacional de Dados</h2>
        <p className="mb-4"><strong>6.1.</strong> Podemos transferir suas informações para servidores localizados em outros países para fins de processamento e armazenamento. Essas transferências serão realizadas em conformidade com as leis de proteção de dados aplicáveis.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Crianças</h2>
        <p className="mb-4"><strong>7.1.</strong> O aplicativo Etrium não se destina ao uso por crianças menores de 13 anos. Não coletamos intencionalmente informações de crianças menores de 13 anos. Se tomarmos conhecimento de que coletamos inadvertidamente informações de uma criança, tomaremos medidas para excluir essas informações o mais rápido possível.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Alterações a esta Política</h2>
        <p className="mb-4"><strong>8.1.</strong> Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento, para refletir alterações em nossas práticas de coleta e uso de informações. A versão mais atual da política será sempre disponibilizada no aplicativo.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contato</h2>
        <p className="mb-4">Se você tiver dúvidas, entre em contato por email: <a href="mailto:atendimento@etrium.com.br" className="text-blue-500 hover:underline">atendimento@etrium.com.br</a></p>
      </section>
    </>
  );
}

export default PoliticaPrivacidade;
