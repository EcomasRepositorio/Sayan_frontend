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
        <div className="text-3xl font-semibold">Valoración Económica Ambiental</div>
       
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          itaque assumenda saepe animi maxime libero non quasi, odit natus
          veritatis enim culpa nam inventore doloribus quidem temporibus
          amet velit accusamus.
        </p>
        <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
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
        <h1 className="text-3xl font-semibold">Fundamentos e Interpretación de los Sistemas de Gestión de la Calidad ISO 9001</h1>
     
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          itaque assumenda saepe animi maxime libero non quasi, odit natus
          veritatis enim culpa nam inventore doloribus quidem temporibus
          amet velit accusamus.
        </p>
        <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
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
        <h1 className="text-3xl font-semibold">Control técnico y calidad en obras</h1>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          itaque assumenda saepe animi maxime libero non quasi, odit natus
          veritatis enim culpa nam inventore doloribus quidem temporibus
          amet velit accusamus.
        </p>
        <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
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
        <h1 className="text-3xl font-semibold">Monitoreo y evaluación de la calidad de aire</h1>
    
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          itaque assumenda saepe animi maxime libero non quasi, odit natus
          veritatis enim culpa nam inventore doloribus quidem temporibus
          amet velit accusamus.
        </p>
        <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
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
        <h1 className="text-3xl font-semibold">Análisis de suelo, agua y foliar</h1>
    
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          itaque assumenda saepe animi maxime libero non quasi, odit natus
          veritatis enim culpa nam inventore doloribus quidem temporibus
          amet velit accusamus.
        </p>
        <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
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
        <h1 className="text-3xl font-semibold">Fertirriego de cultivos y monitoreo</h1>
  
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          itaque assumenda saepe animi maxime libero non quasi, odit natus
          veritatis enim culpa nam inventore doloribus quidem temporibus
          amet velit accusamus.
        </p>
        <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
          Watch Now
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
