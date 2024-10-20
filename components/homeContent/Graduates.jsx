import Link from "next/link";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Graduates = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es un dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definir pantallas móviles como <= 768px
    };

    handleResize(); // Verificar inicialmente
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño

    return () => window.removeEventListener("resize", handleResize); // Limpiar el listener
  }, []);

  // Función para renderizar las tarjetas de diplomados
  const renderCourseCards = () => (
    <>
      {graduates.map((graduate, index) => (
        <figure
          key={index}
          className="boxG relative m-3 overflow-hidden rounded-xl shadow-lg max-w-xs transition-transform duration-300 transform hover:scale-105"
        >
          <Link href={graduate.link}>
            <div className="figuree absolute w-full bottom-0 p-4 text-center bg-blue-800 text-white transform translate-y-full transition-transform duration-500 hover:translate-y-0">
              <div className="lg:text-4xl md:text-4xl text-4xl font-light mt-4">
                {graduate.title}
              </div>
              <p className="socials mt-4">
                {graduate.socials.map((icon, idx) => (
                  <i key={idx} className={`fa ${icon.class} mx-2 text-lg`}></i>
                ))}
              </p>
            </div>
            <img className="w-full rounded-xl" alt={graduate.alt} src={graduate.image} />
          </Link>
        </figure>
      ))}
    </>
  );

  return (
    <div className="p-5 bg-gradient-to-br from-primaryblue to-primaryceleste">
      <div className="text-center font-semibold font-poppins">
        <p className="font-extrabold text-white lg:text-7xl md:text-5xl text-5xl mt-8 mb-16">
          Nuestros Diplomados
        </p>
      </div>

      {isMobile ? (
        // Carrusel para móviles
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
          {/* Renderizar cada tarjeta en un SwiperSlide */}
          {graduates.map((graduate, index) => (
            <SwiperSlide key={index}>
              <figure className="boxG relative m-3 overflow-hidden rounded-xl shadow-lg max-w-xs transition-transform duration-300 transform hover:scale-105">
                <Link href={graduate.link}>
                  <div className="figuree absolute w-full bottom-0 p-4 text-center bg-blue-800 text-white transform translate-y-full transition-transform duration-500 hover:translate-y-0">
                    <div className="lg:text-4xl md:text-4xl text-4xl font-light mt-4">
                      {graduate.title}
                    </div>
                    <p className="socials mt-4">
                      {graduate.socials.map((icon, idx) => (
                        <i key={idx} className={`fa ${icon.class} mx-2 text-lg`}></i>
                      ))}
                    </p>
                  </div>
                  <img className="w-full rounded-xl" alt={graduate.alt} src={graduate.image} />
                </Link>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Diseño para pantallas grandes
        <div className="grid grid-cols-3 gap-6 justify-center items-center max-w-screen-lg mx-auto">
          {/* Renderizar las 3 primeras tarjetas con tamaño aumentado */}
          {graduates.slice(0, 3).map((graduate, index) => (
            <figure
              key={index}
              className="boxG relative m-3 overflow-hidden rounded-xl shadow-lg max-w-md h-[450px] transition-transform duration-300 transform hover:scale-105"
            >
              <Link href={graduate.link}>
                <div className="figuree absolute w-full bottom-0 p-4 text-center bg-blue-800 text-white transform translate-y-full transition-transform duration-500 hover:translate-y-0">
                  <div className="lg:text-4xl md:text-4xl text-4xl font-light mt-4">
                    {graduate.title}
                  </div>
                  <p className="socials mt-4">
                    {graduate.socials.map((icon, idx) => (
                      <i key={idx} className={`fa ${icon.class} mx-2 text-lg`}></i>
                    ))}
                  </p>
                </div>
                <img className="w-full h-full object-cover rounded-xl" alt={graduate.alt} src={graduate.image} />
              </Link>
            </figure>
          ))}

          {/* Renderizar las 2 tarjetas restantes y centrarlas */}
          <div className="col-span-3 flex justify-center gap-6">
            {graduates.slice(3, 5).map((graduate, index) => (
              <figure
                key={index}
                className="boxG relative m-3 overflow-hidden rounded-xl shadow-lg max-w-xs transition-transform duration-300 transform hover:scale-105"
              >
                <Link href={graduate.link}>
                  <div className="figuree absolute w-full bottom-0 p-4 text-center bg-blue-800 text-white transform translate-y-full transition-transform duration-500 hover:translate-y-0">
                    <div className="lg:text-4xl md:text-4xl text-4xl font-light mt-4">
                      {graduate.title}
                    </div>
                    <p className="socials mt-4">
                      {graduate.socials.map((icon, idx) => (
                        <i key={idx} className={`fa ${icon.class} mx-2 text-lg`}></i>
                      ))}
                    </p>
                  </div>
                  <img className="w-full h-full object-cover rounded-xl" alt={graduate.alt} src={graduate.image} />
                </Link>
              </figure>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Datos de los diplomados
const graduates = [
  {
    title: "INGENIERÍA CIVIL",
    image: "/graduate/tecnico.png",
    alt: "Ingeniería Civil",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "INGENIERÍA AMBIENTAL",
    image: "/graduate/ambiental.png",
    alt: "Ingeniería Ambiental",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "INGENIERÍA AGRÓNOMA",
    image: "/graduate/agronomo.png",
    alt: "Ingeniería Agrónoma",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "INGENIERÍA ALIMENTARIA",
    image: "/graduate/alimentaria.png",
    alt: "Ingeniería Alimentaria",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "PROFESIONES EN GENERAL",
    image: "/graduate/profesionales.png",
    alt: "Profesiones en General",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
];

export default Graduates;
