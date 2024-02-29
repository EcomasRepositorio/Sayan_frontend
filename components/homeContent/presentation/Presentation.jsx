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
      <section className="hero-container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="content"
        >
          <h2 className="text-primaryceleste font-semibold font-poppins">
            <div className="text-center lg:text-8xl text-5xl font-semibold">
              CORPORACIÓN SAYAN
            </div>
          </h2>
          </motion.div>
          <p className="text-stone-50 text-center">
           
          </p>
       

        <div>
          <div className="blob"></div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
