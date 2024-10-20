import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from 'styled-components';

// Estilos usando styled-components
const Section = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  margin: 50 auto;
  font-family: 'Outfit', sans-serif;
  padding: 60px 200px;
`;

const HeroContainer = styled.section`
  margin-top: 0px;
  display: flex;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
  height: 75vh;
  padding-top: 100px;

  @media screen and (max-width: 576px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  h2 {
    font-size: 3.8em;
  }

  p {
    margin: 20px 0;
    font-size: 1.5em;
    color: rgb(59, 61, 62);
    line-height: 2.18rem;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    h2 {
      font-size: 2.4em;
    }
  }
`;

const Blob = styled.div`
  width: 550px;
  height: 400px;
  margin: 100px;
  box-shadow: 0 10px 10px 10px #0d617b;
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
  border-radius: 20px;
  cursor: pointer;
  background-image: url('/image/presentation.png');
  background-size: cover;
  background-position: center center;

  &:hover {
    background-image: url('/image/white2.jpg');
  }

  @media screen and (max-width: 576px) {
    width: 280px;
    height: 280px;
  }
`;

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
    <Section className="lg:p-32 bg-black">
      <HeroContainer className="secction justify-center hero-container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="content"
        >
          <Content>
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
          </Content>
        </motion.div>
        <Blob />
      </HeroContainer>
    </Section>
  );
};

export default Presentation;
