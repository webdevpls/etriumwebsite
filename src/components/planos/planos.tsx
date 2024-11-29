import Plano1 from "./plano1";
import Plano2 from "./plano2";
import Plano3 from "./plano3";
import { motion } from "framer-motion";

function Planos() {
  return (
    <section id="planos" className="bg-[#15151D] h-auto py-16 flex justify-center flex-col items-center">
      <div className="text-white font-bold text-xl text-center mb-8">
        <span className="text-[#2D91FF]">Planos</span>
        <h1 className="text-[40px] leading-10">
          Escolha o melhor plano de acordo <br />
          com seu bolso!
        </h1>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center gap-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <Plano1 />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <Plano2 />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <Plano3 />
        </motion.div>
      </div>
    </section>
  );
}

export default Planos;
