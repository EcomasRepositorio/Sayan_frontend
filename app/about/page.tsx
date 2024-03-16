"use client";
import React from "react";
import "./StyleAbout.css";
import Whatsapp from "@/components/whatsapp/Index";

const About = () => {
  return (
    <div id="/about">
      <div className="relative pt-12 lg:pt-40 pb-28 lg:pb-40 mb-8">
        <div
          className=" absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: 'url("/about/aboutt.jpg") ',
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-gray-800"
          ></span>
        </div>
        <div className="relative mx-auto max-w-screen-xl p-2 text-white">
          <h1 className=" font-extrabold text-5xl lg:text-6xl animated-fadeIn">
            Acerca de Nosotros
          </h1>
          <p></p>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto py-9 lg:py-0 px-4 lg:px-0">
        {/* Description */}
        <div className="flex items-center lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="text-5xl font-black leading-10 pb-5 text-primaryceleste text-center sm:text-start animated-slideInLeft">
              ¿Quiénes Somos?
            </h2>
            <p className="w-full text-gray-600 lg:text-3xl text-2xl lg:leading-10 leading-9 text-center sm:text-start animated-fadeIn">
              Nos destacamos como referentes en el diseño y ejecución de
              programas de desarrollo profesional, brindando un enfoque
              personalizado que impulsa el crecimiento y el éxito de nuestros
              clientes.
            </p>
          </div>
          <div className="w-full lg:w-6/12 ">
            <img
              className="lg:block w-full rounded-md  "
              src="/about/about.png"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-5 mt-16">
          {/* Misión y Visión */}
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              {/* Card team */}
              <div className="bg-red-70 p-6 rounded-md">
                <h2 className="text-5xl font-black leading-10 pb-5 text-primaryceleste text-center sm:text-start animated-slideInLeft ">
                  Nuestra Visión
                </h2>
                <p className="lg:text-3xl text-lg text-center text-gray-600 animated-fadeIn">
                  ❝Nos visualizamos como la firma de consultoría y capacitación
                  líder, siendo reconocidos a nivel global por nuestra
                  excelencia en el diseño e implementación de soluciones
                  innovadoras.❞
                </p>
              </div>

              {/* Card Task */}
              <div className="bg-red-70 p-6 rounded-md">
                <h2 className="text-5xl font-black leading-10 pb-5 text-primaryceleste text-center sm:text-start animated-slideInLeft ">
                  Nuestra Misión
                </h2>
                <p className="lg:text-3xl text-lg text-center  text-gray-600 animated-fadeIn">
                  ❝Nuestra misión es catalizar el progreso y la excelencia a
                  través de servicios de consultoría y capacitación de
                  vanguardia. Nos comprometemos a proporcionar a nuestros
                  clientes las herramientas, conocimientos y estrategias
                  necesarios para superar desafíos, optimizar sus operaciones y
                  alcanzar sus objetivos comerciales.❞
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-70 p-6 rounded-md ">
          <h2 className="text-5xl font-black leading-10 pb-5 text-primaryceleste text-center sm:text-start ">
            Nuestros Valores
          </h2>
        </div>
        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <section className="bg-red-70">
                <div className="cardio">
                  <div className="contentt">
                    <p className="headingg ">Excelencia</p>
                    <p className="para">
                      Compromiso con la excelencia en la prestación de servicios
                      de consultoría y capacitación. Buscar constantemente la
                      calidad en cada aspecto de nuestras operaciones, desde la
                      entrega de soluciones personalizadas hasta la
                      implementación de programas de capacitación efectivos.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <section className="bg-red-70">
                <div className="cardio">
                  <div className="contentt">
                    <p className="headingg">Aprendizaje Continuo</p>
                    <p className="para">
                      Una mentalidad de aprendizaje constante, tanto a nivel
                      individual como organizacional. Fomentar la actualización
                      continua de conocimientos y habilidades para mantenernos a
                      la vanguardia de las tendencias y tecnologías emergentes.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <section className="bg-red-70">
                <div className="cardio">
                  <div className="contentt">
                    <p className="headingg">Integridad</p>
                    <p className="para">
                      Actuar con honestidad, transparencia y ética en todas
                      nuestras interacciones. Mantener la integridad en la toma
                      de decisiones, la gestión de proyectos y las relaciones
                      con clientes y colaboradores.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Whatsapp />
    </div>
  );
};

export default About;
