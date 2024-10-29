import React, { useEffect, useState } from 'react';


export const ItemCard = ({ number, description, animated, animation, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (animated) {
      interval = setInterval(() => {
        setCount((prevCount) => (prevCount < parseInt(number, 10) ? prevCount + 85 : parseInt(number, 10)));
      }, 25);
    }
    return () => clearInterval(interval);
  }, [animated, number]);

  return (
    <div
      className={`flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-46 blur-backgroundd border-2 border-white border-opacity-80 shadow-md rounded-2xl ${animated ? `animate-${animation}` : ''}`}
      style={{
        position: "relative",
        zIndex: 1, // Asegura que este elemento esté por encima del video
      }}
    >
      {/* Fondo con desenfoque */}
      <div
        className="absolute top-0 left-0 w-full h-full rounded-2xl  "
        style={{
          backgroundImage: 'url("/video/countervideo.mp4")',
        }}
      />

      {/* Contenido del card */}
 
      {icon && <img src={icon} alt="Icono" className="w-10 h-10 md:w-10 md:h-10 lg:w-20 lg:h-20 mb-4 p-2" />}
      <div className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-primarygreen">
        { "+" + count }
      </div>
      <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-white font-bold">
        {description}
      </p>
    </div>
  );
};

export default ItemCard;
