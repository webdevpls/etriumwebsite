import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const whatsappNumber = "5583986151110"; // Substitua pelo número do WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Olá, vim através do site e gostaria de saber mais informações sobre os serviços da Etrium."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="bg-[#15151D] py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        
        {/* Left side */}
        <div className="w-full md:w-auto">
          <h2 className="text-white text-xl font-bold"><a href="https://etrium.com.br">ETRIUM</a></h2>
          <p className="text-gray-400 mt-2">Otimize sua rotina jurídica com nosso software especializado!</p>
        </div>
        
        {/* Middle Navigation */}
        <div className="w-full md:w-auto text-white">
          <ul className="space-y-2 font-bold flex flex-col items-start md:items-center md:space-y-0 md:space-x-6 md:flex-row">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">Sobre nós</a></li>
            <li><a href="#service" className="hover:text-gray-400">Serviços</a></li>
            <li><a href="#planos" className="hover:text-gray-400">Planos</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contato</a></li>
          </ul>
        </div>
        
        {/* Right side - Social Media and WhatsApp */}
        <div className="w-full md:w-auto text-white">
          <h3 className="font-bold text-lg">Nossas Redes Sociais</h3>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.linkedin.com/company/etriumjuridico" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/etriumjuridico/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/etriumjuridico" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaWhatsapp size={24} />
            </a>
          </div>

          {/* WhatsApp Contact Button */}
          <div className="mt-4">
            <h3 className="font-bold text-lg">Entre em contato pelo Whatsapp</h3>
            <div className="mt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded block text-center"
              >
                Entrar em contato
              </a>
            </div>
          </div>

          {/* Link para Termos de Responsabilidade */}
          <div className="mt-4">
            <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-white">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright - Centralizado */}
      <div className="mt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Etrium Agilidade Jurídica. Todos os direitos reservados.</p>
        <p>CNPJ: 39.327.910/0001-19</p> {/* Adicionando o CNPJ aqui */}
      </div>
    </section>
  );
}

export default Footer;
