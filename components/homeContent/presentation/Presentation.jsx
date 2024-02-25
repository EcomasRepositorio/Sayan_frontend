import React, { useState, useEffect } from 'react';
import "./StylePresentation.css";
import TypingAnimation from './typing';

const Presentation = () => {
 
  return (
    <div className="bodyy">
      <section className="hero-container mb-8">
        <div className="content">
        <h2 className="text-primaryceleste font-semibold">
            <TypingAnimation texto="SAYAN" />
          </h2>
          <p className="text-stone-50">
            Somos una empresa que brinda un servicio de especializacion para
            empresas, personas y especialistas.
          </p>
          <div>
            <button className="btn">
              <i className="fa-regular fa-circle-play"></i> swee More
            </button>
            <button className="btn-outline">Mas informacion</button>
          </div>
        </div>

        <div>
          <div className="blob"></div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
