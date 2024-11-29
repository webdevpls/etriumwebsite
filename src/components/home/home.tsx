import { motion } from "framer-motion";
import { useRef } from "react";

function Home() {
  const carouselRef = useRef(null);

  const images = [
    "./src/assets/img-home.svg",
    
    // Adicione mais imagens conforme necessário
  ];

  return (
    <section id="home" className="relative w-full h-auto bg-[#F2E9E9] bg-cover pt-20">
      <div className="flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#2A2A34] font-bold text-[32px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[80px] text-center mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] tracking-normal leading-tight sm:leading-[40px] md:leading-[60px] lg:leading-[80px]"
        >
          Otimize sua <span className="text-[#2D91FF]">rotina jurídica</span> com <br />
          nosso software <span className="text-[#2D91FF]">especializado!</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[#2A2A34] mt-4 text-[14px] sm:text-[16px] md:text-[18px] text-center px-2 md:px-4 lg:px-8"
        >
          Traga inovação para sua prática jurídica e supere a concorrência com a ajuda de nossa tecnologia de ponta.
        </motion.p>

        {/* Carrossel de Imagens */}
        <motion.div
          ref={carouselRef}
          className="carousel overflow-hidden relative mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[155px] w-full"
          style={{ cursor: "grab" }}
        >
          <motion.div
            drag="x"
            className="flex space-x-4"
          >
            {images.map((src, index) => (
              <motion.div key={index} className="min-w-[300px] md:min-w-[400px] lg:min-w-[600px] p-4">
                <img src={src} alt={`Imagem ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
