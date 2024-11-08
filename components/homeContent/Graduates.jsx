import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Graduates = () => {
  // Función para renderizar las tarjetas de diplomados
  const renderCourseCards = () => (
    <>
      {graduates.map((graduate, index) => {
        const whatsappLink = `https://api.whatsapp.com/send?phone=51978490739&text=${encodeURIComponent(`Hola, estoy interesado en el diplomado de ${graduate.title}`)}`;
  
        return (
          <SwiperSlide key={index}>
            <figure className="boxG relative m-3 overflow-hidden rounded-xl shadow-lg w-[900px] h-[350px] transition-transform duration-300 transform hover:scale-105">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <div className="figuree absolute w-full bottom-0 p-4 text-center bg-blue-800 text-white transform translate-y-full transition-transform duration-500 hover:translate-y-0">
                  <div className="lg:text-2xl md:text-xl text-lg font-light mt-4">
                    {graduate.title}
                  </div>
                  <p className="socials mt-4">
                    {graduate.socials.map((icon, idx) => (
                      <i key={idx} className={`fa ${icon.class} mx-2 text-lg`}></i>
                    ))}
                  </p>
                </div>
                <img className=" h-full object-cover rounded-xl" alt={graduate.alt} src={graduate.image} />
              </Link>
            </figure>
          </SwiperSlide>
        );
      })}
    </>
  );

  return (
    <div className="p-5 bg-gradient-to-br from-primaryblue to-primaryceleste">
      <div className="text-center font-semibold font-poppins">
        <p className="font-extrabold text-white lg:text-7xl md:text-5xl text-5xl mt-8 mb-16">
          Nuestros Diplomados
        </p>
      </div>

      {/* Carrusel para todos los tamaños de pantalla */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="w-full mx-auto max-w-[1500px]"
      >
        {renderCourseCards()}
      </Swiper>
    </div>
  );
};


// Datos de los diplomados
const graduates = [
  {
    title: "ASISTENTE TÉCNICO EN OBRAS",
    image: "/DIPLOMADOS-02/1.webp",
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
    title: "INGENIERÍA VIAL",
    image: "/DIPLOMADOS-02/2.webp",
    alt: "Ingeniería Ambiental",
    link: `#`,
    target: "_blank" ,
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "INGENIERÍA DE PUENTES",
    image: "/DIPLOMADOS-02/3.webp",
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
    title: "ESTUDIO DE IMPACTO AMBIENTAL",
    image: "/DIPLOMADOS-02/4.webp",
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
    title: "GESTIÓN Y MANEJO INTEGRAL DE RESIDUOS SÓLIDOS",
    image: "/DIPLOMADOS-02/5.webp",
    alt: "Profesiones en General",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "MONITOREO Y EVALUACIÓN DE LA CALIDAD AMBIENTAL",
    image: "/DIPLOMADOS-02/6.webp",
    alt: "Profesiones en General",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "RIEGO Y FERTIRRIEGO",
    image: "/DIPLOMADOS-02/7.webp",
    alt: "Profesiones en General",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "SISTEMA DE RIEGO TECNIFICADO",
    image: "/DIPLOMADOS-02/8.webp",
    alt: "Profesiones en General",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "GESTIÓN DE LA CALIDAD E INOCUIDAD ALIMENTARIA",
    image: "/DIPLOMADOS-02/9.webp",
    alt: "Profesiones en General",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },
  {
    title: "SEGURIDAD, SALUD OCUPACIONAL Y MEDIO AMBIENTE",
    image: "/DIPLOMADOS-02/10.webp",
    alt: "Profesiones en General",
    link: "/graduate",
    socials: [
      { class: "fa-facebook" },
      { class: "fa-twitter" },
      { class: "fa-pinterest" },
      { class: "fa-linkedin" },
    ],
  },



  /* 
  
  */
];

export default Graduates;
