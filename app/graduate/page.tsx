import React from "react";
import GraduateIngenieriaVial from "@/components/graduate/IngenieriaCivil/GraduateIngVial";
import GraduateTecnicoObras from "@/components/graduate/IngenieriaCivil/GraduateTecnicoO";
import GraduateIngenieriaPuentes from "@/components/graduate/IngenieriaCivil/GraduateIngPuentes";


import GraduateImpacto from "@/components/graduate/IngenieriaAmbiental/GraduateImpactoA";
import GraduateSolidos from "@/components/graduate/IngenieriaAmbiental/GraduateManejoSolidos";
import GraduateMonitoreo from "@/components/graduate/IngenieriaAmbiental/GraduateMonitoreoCalidad";

import GraduateFertirriego from "@/components/graduate/IngenieriaAgronoma/GraduateFertirriego";
import GraduateRiego from "@/components/graduate/IngenieriaAgronoma/GraduateRiegoTecnificado";

import Image from "next/image";
import GraduateCalidadAlimentaria from "@/components/graduate/IngenieriaAlimentaria/GraduateCalidadAlimentaria";
import GraduateSeguridadOcupa from "@/components/graduate/ProfesionalesGeneral/GraduateSeguridadOcupa";
const Graduate = () => {
  return (
    <section id="/graduate">
      <div className="relative pt-12 lg:pt-40 pb-28 lg:pb-40 mb-8">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: 'url("/image/diplomado.jpg")' }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-gray-800"
          ></span>
        </div>
        <div className="relative mx-auto max-w-screen-xl p-2 text-white">
          <h1 className="font-extrabold text-5xl lg:text-6xl">
            Nuestros Diplomados
          </h1>
          <p></p>
        </div>
      </div>

      <div className="text-primaryceleste text-center  text-4xl  lg:text-6xl xl:text-6xl  font-bold font-poppins mb-8 ">
        INGENIERIA CIVIL
      </div>
      <div className=" mb-16">
        <GraduateTecnicoObras />
        <GraduateIngenieriaVial />
        <GraduateIngenieriaPuentes />
       
      </div>

      <div className="text-primaryceleste text-center  text-4xl  lg:text-6xl xl:text-6xl  font-bold font-poppins mb-12 ">
        INGENIERIA AMBIENTAL
      </div>
      <div className=" mb-16">
        <GraduateImpacto />
        <GraduateSolidos />
        <GraduateMonitoreo />
      </div>

      <div className="text-primaryceleste text-center  text-4xl  lg:text-6xl xl:text-6xl  font-bold font-poppins mb-12 ">
        INGENIERIA AGRÓNOMA
      </div>
      <div className=" mb-16">
      <GraduateFertirriego />
      <GraduateRiego />
      </div>

      <div className="text-primaryceleste text-center  text-4xl  lg:text-6xl xl:text-6xl  font-bold font-poppins mb-12 ">
        INGENIERIA AlIMENTARIA
      </div>
      <div className=" mb-16">
      <GraduateCalidadAlimentaria />

      </div>

      <div className="text-primaryceleste text-center  text-4xl  lg:text-6xl xl:text-6xl  font-bold font-poppins mb-12 ">
        PROFESIONES EN GENERAL
      </div>
      <div className=" mb-16">
      <GraduateSeguridadOcupa />
         
      </div>
    </section>
  );
};

export default Graduate;
