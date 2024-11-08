import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Styles.css";

const Course = () => {
  const courses = [
    {
      title: "Valoración Económica Ambiental",
      image: "/CURSOS/1.webp",
      description:
        "La valoración económica ambiental implica evaluar tanto los beneficios directos como los indirectos que proporciona el medio ambiente...",
    },
    {
      title: "Fundamentos e Interpretación de ISO 9001",
      image: "/CURSOS/2.webp",
      description:
        "Los sistemas de gestión de calidad ISO 9001 se basan en principios y directrices para garantizar que una organización cumpla con los estándares de calidad...",
    },
    {
      title: "Control técnico y calidad en obras",
      image: "/CURSOS/3.webp",
      description:
        "El control técnico y la calidad en obras son procesos y prácticas utilizadas para garantizar que los proyectos de construcción se lleven a cabo de manera eficiente...",
    },
    {
      title: "Monitoreo y evaluación de la calidad de aire",
      image: "/CURSOS/4.webp",
      description:
        "El monitoreo y la evaluación de la calidad del aire se centran en medir y analizar los contaminantes presentes en la atmósfera...",
    },
    {
      title: "Análisis de suelo, agua y foliar",
      image: "/CURSOS/5.webp",
      description:
        "El análisis de suelo, agua y foliar son procedimientos esenciales en la evaluación de la calidad y características de elementos en el entorno natural...",
    },
    {
      title: "Fertirriego de cultivos y monitoreo",
      image: "/CURSOS/6.webp",
      description:
        "El fertirriego de cultivos es una técnica agrícola que combina fertilización y riego al aplicar nutrientes directamente a través del agua de riego...",
    },
/* 
    {
      title: "Arqueología en proyectos viales",
      image: "/courses/valorizacion_economica.png",
      description:
        "Explora la preservación del patrimonio cultural en la construcción de infraestructuras viales.",
    },
    {
      title: "Monitoreo Biológico",
      image: "/courses/fundamentos.png",
      description:
        "Aprende técnicas para evaluar la salud de ecosistemas y biodiversidad.",
    },
    {
      title: "Estructuras en carreteras - puentes",
      image: "/CURSOS/8.webp",
      description:
        "Diseño y construcción de estructuras viales seguras y eficientes.",
    },
    {
      title: "Nutrición vegetal y principios de fertirriego",
      image: "/courses/monitoreo.png",
      description:
        "Optimiza el riego y la nutrición de cultivos con técnicas avanzadas.",
    },
    {
      title: "* Técnicas de laboratorio forense",
      image: "/courses/agua_suelo.png",
      description:
        "Análisis de evidencias en el laboratorio para la resolución de crímenes.",
    },
    {
      title: "* Monitoreo de agentes ocupacionales",
      image: "/courses/fertirriego.png",
      description: "Identifica y evalúa riesgos en el ambiente laboral.",
    },
    {
      title: "* Inspección y muestreo de alimentos",
      image: "/courses/valorizacion_economica.png",
      description:
        "Asegura la calidad e inocuidad de los productos alimentarios.",
    },
    {
      title: "* Control tecnico y calidad en obras",
      image: "/courses/fundamentos.png",
      description: "Gestión de calidad y control en proyectos de construcción.",
    },
    {
      title: "* Monitoreo de la calidad de agua",
      image: "/CURSOS/8.webp",
      description:
        "Evalúa y protege los recursos hídricos para la salud pública.",
    },
    {
      title: "* Sistemas de riego tecnificado por goteo",
      image: "/courses/monitoreo.png",
      description:
        "Aprende a implementar riego por goteo para una agricultura eficiente.",
    }, */
  ];

  const renderCourseCard = (course, index) => (
    <div
      key={index}
      className="lg:w-[400px] md:w-[380px] w-[380px] h-[420px] bg-gray-200 cursor-pointer group perspective mt-5 rounded-xl"
    >
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full rounded-lg overflow-hidden">
          <Image
            alt={course.title}
            src={course.image}
            width={400}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <div className="text-3xl font-semibold font-poppins mb-4 text-primaryblue">
              {course.title}
            </div>
            <p>{course.description}</p>
            <a
              href="https://api.whatsapp.com/send?phone=51978490739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primaryceleste px-7 py-4 font-semibold text-white rounded-full absolute bottom-10 transition duration-300 ease-in-out hover:bg-primaryblue"
            >
              Más Información
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="p-5 bg-gradient-to-br from-primaryblue to-primaryceleste">
      <div className="text-center font-semibold font-poppins mb-8">
        <p className="font-extrabold text-white lg:text-7xl text-5xl mt-8 mb-0">
          Nuestros Cursos
        </p>
      </div>

      {/* Carrusel para todos los tamaños de pantalla */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="w-full mx-auto max-w-[1400px]"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            {renderCourseCard(course, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Course;
