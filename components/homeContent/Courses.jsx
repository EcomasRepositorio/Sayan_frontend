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
      image: "/courses/valorizacion_economica.png",
      description:
        "La valoración económica ambiental implica evaluar tanto los beneficios directos como los indirectos que proporciona el medio ambiente...",
    },
    {
      title: "Fundamentos e Interpretación de ISO 9001",
      image: "/courses/fundamentos.png",
      description:
        "Los sistemas de gestión de calidad ISO 9001 se basan en principios y directrices para garantizar que una organización cumpla con los estándares de calidad...",
    },
    {
      title: "Control técnico y calidad en obras",
      image: "/courses/control_calidad.png",
      description:
        "El control técnico y la calidad en obras son procesos y prácticas utilizadas para garantizar que los proyectos de construcción se lleven a cabo de manera eficiente...",
    },
    {
      title: "Monitoreo y evaluación de la calidad de aire",
      image: "/courses/monitoreo.png",
      description:
        "El monitoreo y la evaluación de la calidad del aire se centran en medir y analizar los contaminantes presentes en la atmósfera...",
    },
    {
      title: "Análisis de suelo, agua y foliar",
      image: "/courses/agua_suelo.png",
      description:
        "El análisis de suelo, agua y foliar son procedimientos esenciales en la evaluación de la calidad y características de elementos en el entorno natural...",
    },
    {
      title: "Fertirriego de cultivos y monitoreo",
      image: "/courses/fertirriego.png",
      description:
        "El fertirriego de cultivos es una técnica agrícola que combina fertilización y riego al aplicar nutrientes directamente a través del agua de riego...",
    },
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

      {/* Carrusel para pantallas móviles */}
      <div className="block md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full mx-auto"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>{renderCourseCard(course, index)}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid para pantallas medianas y grandes */}
      <div className="hidden md:grid lg:grid-cols-3 md:grid-cols-2 max-w-screen-xl mx-auto justify-center items-center gap-10 text-white mb-6">
        {courses.map(renderCourseCard)}
      </div>
    </section>
  );
};

export default Course;
