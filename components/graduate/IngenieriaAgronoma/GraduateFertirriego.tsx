"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { coursesAlimentary } from "@/components/utils/courses/course";
import { BiChevronDown, BiChevronUp, BiChevronRight } from "react-icons/bi";
import { FaRegFilePdf, FaWhatsapp } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";
import Modal from "@/components/share/Modal";
import Image from "next/image";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";



const GraduateFertirriego = () => {
  const [isAccordionOpen1, setIsAccordionOpen1] = useState(false);
  const [isAccordionOpen2, setIsAccordionOpen2] = useState(false);
  const [openWindow, setOpenWindow] = useState<Window | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageClick = (image: string) => {
    setImageUrl(image);
    setShowModal(true);
  };

  const toggleAccordion1 = () => {
    setIsAccordionOpen1(!isAccordionOpen1);
    setIsAccordionOpen2(false); // Cierra el otro elemento si está abierto
  };

  const handleClick = () => {
    const newWindow = window.open("/DOWLOAD_PDF/ESTUDIO_IMPACTO_AMBIENTAL.pdf");
    setOpenWindow(newWindow);

    // Descargar el archivo PDF
    const link = document.createElement("a");
    link.href = "/DOWLOAD_PDF/ESTUDIO_IMPACTO_AMBIENTAL.pdf";
    link.download = "ESTUDIO_IMPACTO_AMBIENTAL.pdf";
    link.click();
  };

  return (
    <section>
      <div id="Alimentary" className="">
      <div className="md:px-20 flex flex-col sm:flex-row justify-center lg:mt-8">

      <div className="sm:w-96 mb-4 sm:mb-0 ">
  <Image
    className="flex items-center sm:justify-center bg-cover h-96 w-96 sm:h-auto rounded-3xl mx-auto"
    src="/graduate/tecnico_obras.png"
    alt="icon"
    width={200}
    height={200}
  />
</div>


        <div className="p-5 sm:w-1/2 md:px-20 sm:px-5 lg:mt-8 ">
          <div className="text-primaryblue font-extrabold font-poppins lg:text-4xl text-3xl my-2 mb-2 ">
          RIEGO Y FERTIRRIEGO
          </div>
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-600">
              Diplomado dirigido a profesionales del medio ambiente, gestores de
              proyectos, consultores ambientales, autoridades reguladoras,
              estudiantes y académicos, profesionales de derecho ambiental,
              planificadores urbanos, ONGs, empresarios y público en general.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 text-primaryceleste text-sm mb-4">
            <div className="flex items-center mb-2">
              <BiChevronRight /> 
              <MdWatchLater className="w-6 h-6" />
              <p className="font-bold ml-1">Inicio 25 de febrero</p>
            </div>

            <div className="flex items-center mb-2">
              <BiChevronRight />
              <MdComputer className="w-6 h-6" />
              <p className="font-bold ml-1">Modalidad Online via Zoom</p>
            </div>

            <div className="flex items-center mb-2">
              <BiChevronRight />
              <IoCalendarNumberSharp className="w-6 h-6" />
              <p className="font-bold ml-1">4 meses</p>
            </div>

            <div className="flex items-center mb-2">
              <BiChevronRight />
              <PiCertificateFill className="w-6 h-6" />
              <p className="font-bold ml-1">
                420 horas académicas (
                <span className="credits">26 créditos</span>)
              </p>
            </div>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2">
              <div className="w-full">
                <Link
                  className="border-2 border-primaryblue flex items-center justify-center text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                  href="https://api.whatsapp.com/send?phone=51900102090"
                  target="_blank"
                >
                  <div className="items-center text-xs uppercase inline-flex">
                    <FaWhatsapp className="text-green-500 text-lg" />
                    <h1 className="ml-1">Mas información</h1>
                  </div>
                </Link>
              </div>
              <div className="w-full">
                <button
                  onClick={handleClick}
                  className="border-2 border-primaryblue w-full flex items-center justify-center mb- text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                  rel="noopener noreferrer"
                >
                  <div className="items-center text-xs uppercase inline-flex">
                    <FaRegFilePdf className="text-red-500 text-lg" />
                    <h1 className="ml-1">Plan de estudios</h1>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className="border-2 border-primaryblue w-full flex items-center justify-center mb-4 text-gray-600 font-bold rounded-xl p-2 hover:scale-105 duration-300"
                  onClick={() => handleImageClick("/IMAGEN.png")}
                >
                  <div className="items-center text-xs uppercase inline-flex">
                    <PiCertificate className="text-lg" />
                    <h1 className="ml-1">Certificación</h1>
                  </div>
                </button>
                {showModal && (
                  <Modal open={showModal} onClose={() => setShowModal(false)}>
                    <Image
                      src={imageUrl}
                      width={400}
                      height={420}
                      alt="certificate_promas"
                    />
                  </Modal>
                )}
              </div>
            </div>
          </div>
          <div className="z-0">
            <button
              onClick={toggleAccordion1}
              className="p-1 px-4 border flex items-center justify-between mb-4 text-gray-100 bg-primaryblue font-bold rounded-xl w-full hover:scale-105 duration-300"
              style={{ zIndex: 0 }}
            >
              <h1 className="hover:scale-110 duration-300 uppercase text">
                Lista de Módulos
              </h1>
              <div>
                {isAccordionOpen1 ? (
                  <BiChevronUp className="z-0 text-5xl hover:scale-150 duration-300" />
                ) : (
                  <BiChevronDown className="z-0 text-5xl hover:scale-150 duration-300" />
                )}
              </div>
            </button>
          </div>
          {isAccordionOpen1 && (
            <motion.div
              className="bg-white rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.1 } }}
            >
              <div className="text-center text-sm font-sans font-semibold">
                <ul className="">
                  {coursesAlimentary.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 1, delay: index * 0.2 },
                      }}
                      className="lg:p-2 p-2 mb-3 border rounded-md bg-slate-50 hover:bg-primaryblue hover:text-gray-100 border-primaryblue hover:scale-110 duration-300 cursor-pointer"
                      style={{ display: "block", width: "100%" }}
                      onClick={() =>
                        window.open(
                          `https://wa.me/51900102090/?text=`,
                          "_blank"
                        )
                      }
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>

       

    </div>
    </section>
    
  );
};

export default GraduateFertirriego;
