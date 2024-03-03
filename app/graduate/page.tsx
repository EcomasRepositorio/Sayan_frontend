import GraduateAlimentary from "@/components/graduate/GraduateAlimentary";
import React from "react";
import "./Graduate.css"


const Graduate = () => {
  return (
    <section id="/graduate">
      <div className="p-28 flex flex-col text-center bg-graduate">
        <section className="text-white text-center text-4xl lg:text-4xl xl:text-6xl mb-8 font-extrabold  ">
           Nuestros Diplomados
        </section>      
      </div>
      <GraduateAlimentary />
    </section>
  );
};

export default Graduate;
