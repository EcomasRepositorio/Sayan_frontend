import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./StylePresentation.css";

const Presentation = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    // Puedes ajustar el valor de offset según tus necesidades
    if (window.scrollY > 100) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  };

  // Agrega un listener para el evento de scroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Limpia el listener al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bodyy">
      <section className="justify-center hero-container  mb-8 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="content "
        >
        <div className="flex items-center font-semibold font-poppins lg:text-8xl text-6xl p-1 mb-4 text-center"  style={{ background: 'linear-gradient(to right, #0d617b, #b6d900)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Alcanza nuevos límites, con SAYAN!</div>



          </motion.div>
          <p className="text-stone-50 text-center">
           
          </p>
       

        <div>
          <div className ="blob"></div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
