import React from "react";
import Counter from "./Counter";

const CounterMain = () => {
  return (
    <div
      className="pb-20"
      style={{
        position: "relative",
        width: "100%",
        height: "75vh",
        // Asegura que este elemento esté por encima del video // Ajusta la altura según tus necesidades
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
           // Ajusta el comportamiento de ajuste del video
        }}
      >
        <source src="/video/countervideo.mp4" type="video/mp4" />
        {/* Puedes agregar más elementos source para formatos diferentes */}
        Tu navegador no soporta el elemento de video.
      </video>

      <div className="mx-auto h-96 w-3/4 rounded-xl bg-cover bg-center" style={{
    position: "relative",
    zIndex: 1, // Asegura que este elemento esté por encima del video
  }}>
        
        <div className="mx-auto container w-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <div className="mt-20">
              <h1 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-primaryblue text-center">
                Sayan: Tu Socio en el Éxito Profesional.
              </h1>
            </div>
            <div className="mt-6 mx-2 md:mx-0 text-center">
              <p className="lg:text-xl md:text-lg leading-6 text-sm text-neutral-500 subtitulo">
                ¡Únete a nosotros y marca la diferencia en tu trayectoria
                profesional! <br />
              </p>
            </div>
          </div>
        </div>
        
      </div>
      {/* TARJETAS DE CONTEO */}
      <Counter/>
    </div>
  );
};

export default CounterMain;
