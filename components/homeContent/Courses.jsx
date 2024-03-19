import Image from "next/image";
import React from "react";
import "./Styles.css";

const Course = () => {
  return (
    <section className="p-5 bg-gradient-to-br from-primaryblue to-primaryceleste">
      <div className="text-center font-semibold font-poppins mb-8">
        <p className="font-extrabold text-white lg:text-7xl text-5xl mt-8 mb-0">
          Nuestros Cursos
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl mx-auto justify-center items-center gap-10 text-white mb-6 ">
        <div className="lg:w-[400px] sm:w-[450px] w-[380px] h-[420px] bg-gray-200 cursor-pointer group perspective mt-5 rounded-xl">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full rounded-lg overflow-hidden">
              <Image
                alt="sayan_picture"
                src="/courses/valorizacion_economica.png"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <div className="text-3xl font-semibold font-poppins mb-4 text-primaryblue">
                  Valoración Económica Ambiental
                </div>

                <p className="">
                  La valoración económica ambiental implica evaluar tanto los
                  beneficios directos como los indirectos que proporciona el
                  medio ambiente. Estos beneficios pueden incluir la provisión
                  de alimentos, agua y materias primas, así como la regulación
                  del clima, la purificación del aire y el agua, la recreación y
                  el turismo, entre otros.
                </p>
                <button className="bg-primaryceleste  px-7 py-4 font-semibold text-white rounded-full absolute bottom-10 transition duration-300 ease-in-out hover:bg-primaryblue">
                  Mas Información
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[400px] sm:w-[450px] w-[380px] h-[420px] bg-gray-200 cursor-pointer group perspective mt-5 rounded-xl">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full rounded-lg overflow-hidden">
              <Image
                alt="sayan_picture"
                src="/courses/fundamentos.png"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <div className="text-2xl font-semibold font-poppins mb-4 text-primaryblue">
                  Fundamentos e Interpretación de los Sistemas de Gestión de la
                  Calidad ISO 9001
                </div>

                <p>
                  Los sistemas de gestión de calidad ISO 9001 se basan en
                  principios y directrices para garantizar que una organización
                  cumpla con los estándares de calidad. Estos principios
                  incluyen centrarse en el cliente, liderazgo, enfoque en
                  procesos, toma de decisiones basada en evidencias y mejora
                  continua.
                </p>
                <button className="bg-primaryceleste  px-7 py-4 font-semibold text-white rounded-full absolute bottom-10 transition duration-300 ease-in-out hover:bg-primaryblue">
                  Mas Información
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[400px] sm:w-[450px] w-[380px] h-[420px] bg-gray-200 cursor-pointer group perspective mt-5 rounded-xl">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full rounded-lg overflow-hidden">
              <Image
                alt="sayan_picture"
                src="/courses/control_calidad.png"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <div className="text-3xl font-semibold font-poppins mb-4 text-primaryblue">
                  Control técnico y calidad en obras
                </div>

                <p>
                  El control técnico y la calidad en obras son procesos y
                  prácticas utilizadas para garantizar que los proyectos de
                  construcción se lleven a cabo de manera eficiente, segura y
                  cumpliendo con los estándares de calidad establecidos.
                </p>
                <button className="bg-primaryceleste  px-7 py-4 font-semibold text-white rounded-full absolute bottom-10 transition duration-300 ease-in-out hover:bg-primaryblue">
                  Mas Información
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[400px] sm:w-[450px] w-[380px] h-[420px] bg-gray-200 cursor-pointer group perspective mt-5 rounded-xl">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full rounded-lg overflow-hidden">
              <Image
                alt="sayan_picture"
                src="/courses/monitoreo.png"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <div className="text-3xl font-semibold font-poppins mb-4 text-primaryblue">
                  Monitoreo y evaluación de la calidad de aire
                </div>

                <p>
                  El monitoreo y la evaluación de la calidad del aire se centran
                  en medir y analizar los contaminantes presentes en la
                  atmósfera para determinar su nivel de concentración y su
                  impacto en la salud humana y el medio ambiente.
                </p>
                <button className="bg-primaryceleste  px-7 py-4 font-semibold text-white rounded-full absolute bottom-10 transition duration-300 ease-in-out hover:bg-primaryblue">
                  Mas Información
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[400px] sm:w-[450px] w-[380px] h-[420px] bg-gray-200 cursor-pointer group perspective mt-5 rounded-xl">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full rounded-lg overflow-hidden">
              <Image
                alt="sayan_picture"
                src="/courses/agua_suelo.png"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <div className="text-3xl font-semibold font-poppins mb-4 text-primaryblue">
                  Análisis de suelo, agua y foliar
                </div>

                <p>
                  El análisis de suelo, agua y foliar son procedimientos
                  esenciales en la evaluación de la calidad y características de
                  elementos en el entorno natural. Son fundamentales para la
                  gestión ambiental, agricultura, silvicultura y disciplinas
                  relacionadas con la conservación de recursos naturales y
                  producción de alimentos.
                </p>
                <button className="bg-primaryceleste  px-7 py-4 font-semibold text-white rounded-full absolute bottom-10 transition duration-300 ease-in-out hover:bg-primaryblue">
                  Mas Información
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[400px] sm:w-[450px] w-[380px] h-[420px] bg-gray-200 cursor-pointer group perspective mt-5 rounded-xl">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full rounded-lg overflow-hidden">
              <Image
                alt="sayan_picture"
                src="/courses/fertirriego.png"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <div className="text-3xl font-semibold font-poppins mb-4 text-primaryblue">
                  Fertirriego de cultivos y monitoreo
                </div>

                <p>
                  El fertirriego de cultivos es una técnica agrícola que combina
                  fertilización y riego al aplicar nutrientes directamente a
                  través del agua de riego. Esta práctica permite una gestión
                  eficiente de recursos hídricos y nutrientes al suministrarlos
                  de manera controlada y precisa, adaptándose a las necesidades
                  de los cultivos en cada etapa de su crecimiento.
                </p>
                <button className="bg-primaryceleste  px-7 py-4 font-semibold text-white rounded-full absolute bottom-10 transition duration-300 ease-in-out hover:bg-primaryblue">
                  Mas Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
