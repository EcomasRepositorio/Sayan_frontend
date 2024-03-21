import React, { useState, useEffect } from 'react';
import { ItemCard } from './ItemCard';

const Counter = () => {
  const [counterAnimated, setCounterAnimated] = useState(false);
  const [targetPosition, setTargetPosition] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (targetPosition && scrollPosition >= targetPosition && !counterAnimated) {
        setCounterAnimated(true);
      }
    };

    const setInitialTargetPosition = () => {
      const targetElement = document.getElementById('counter-section');
      if (targetElement) {
        setTargetPosition(targetElement.offsetTop);
      }
    };

    setInitialTargetPosition();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counterAnimated, targetPosition]);

  return (
    <div id="counter-section">
      <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 transform hover:-translate-y-1 transition duration-600">
          <ItemCard number={"2000"} description={"Egresados"} animated={counterAnimated} />
          <ItemCard number={"7000"} description={"Alumnos"} animated={counterAnimated} />
          <ItemCard number={"70"} description={"Diplomados"} animated={counterAnimated} />
          <ItemCard number={"700"} description={"Cursos"} animated={counterAnimated} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
