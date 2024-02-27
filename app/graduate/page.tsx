import GraduateAlimentary from '@/components/graduate/GraduateAlimentary';
import React from 'react'

const Graduate = () => {
  return (
    <section id="/graduate">
      <div className=" p-5 flex flex-col ">
        <div
          className="text-primaryblue text-center text-3xl lg:text-4xl xl:text-4xl mb-4 font-extrabold">
            DIPLOMADOS EN INGENIERIA CIVIL
        </div>
        <GraduateAlimentary/>
      </div>
    </section>
  )
}

export default Graduate;