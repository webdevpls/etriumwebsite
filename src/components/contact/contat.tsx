import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Controle das animações
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !name || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    

    emailjs.send('service_37wrlbf', 'template_zgrm7m3', templateParams, 'yDDyrkrsu2IAfMH5E')
      .then(() => {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);

        setEmail('');
        setName('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Erro ao enviar e-mail:", error);
        alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" ref={ref} className="relative w-full py-16 bg-[#15151D]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Animação do cabeçalho */}
        <motion.header 
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -30 }
          }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-left"
        >
          <span className="font-bold text-[#2D91FF] text-[22px]">Contato</span>
          <h1 className="text-white font-bold text-[48px] leading-[58px]">
            Entre em contato conosco
          </h1>
        </motion.header>

        <div className="relative w-full">
          {/* Container do Fundo com animação */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.95 }
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-auto bg-[#1F1F2B] rounded-[24px] p-6 md:p-10 flex flex-col items-start max-w-[1400px] mx-auto"
          >
            <img
              src="./src/assets/bg-contact.svg"
              alt="background"
              className="absolute inset-0 w-full h-full object-cover rounded-[24px] opacity-60"
            />

            {/* Formulário com animação */}
            <motion.form 
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative z-10 w-full space-y-4" 
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none"
                required
              />
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none"
                required
              />
              <textarea
                placeholder="Sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 rounded-xl bg-[#1F1F2B] text-white border-none outline-none resize-none"
                required
              ></textarea>
              
              <motion.button
                type="submit"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -20 }
                }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className={`w-full p-4 rounded-xl font-bold text-white flex items-center justify-center ${
                  isSent ? 'bg-green-500' : 'bg-[#2D91FF]'
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                    Enviando...
                  </>
                ) : isSent ? (
                  <>
                    <FontAwesomeIcon icon={faCheck} className="mr-2" />
                    Enviado!
                  </>
                ) : (
                  "Enviar"
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
