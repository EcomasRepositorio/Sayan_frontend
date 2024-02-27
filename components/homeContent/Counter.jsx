import React, { useState, useEffect } from 'react';
import { ItemCard } from "./ItemCard";

const Counter = () => {
  const [counterAnimated, setCounterAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const targetPosition = document.getElementById('counter-section').offsetTop;

      if (scrollPosition >= targetPosition && !counterAnimated) {
        setCounterAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counterAnimated]);

  return (
    <div id="counter-section">
      <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 transform hover:-translate-y-1 transition duration-600">
          <ItemCard number={"2000"} description={"Egresados"} animated={counterAnimated} icon="/icons/counter.jpg" />
          <ItemCard number={"7000"} description={"Alumnos"} animated={counterAnimated} icon="/icons/counter.jpg" />
          <ItemCard number={"70"} description={"Diplomados"} animated={counterAnimated} icon="/icons/counter.jpg" />
          <ItemCard number={"700"} description={"Cursos"} animated={counterAnimated} icon="/icons/counter.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
