import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./StylePresentation.css";

const Presentation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY <= 100 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (isScrolled) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isScrolled, controls]);

  return (
    <div className="lg:p-32  bg-black">
      <section className="secction justify-center hero-container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="content"
        >
          <div
            className="flex items-center font-semibold font-poppins lg:text-7xl md:text-5xl text-6xl p-1 mb-16 text-center lg:ml-24"
            style={{
              background: "linear-gradient(to right, #0d617b, #12a9be)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Alcanza nuevos límites, con Nosotros!
          </div>
        </motion.div>
        <div>
          <div className="blob"></div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
