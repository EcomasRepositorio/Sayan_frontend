import React from 'react';
import Social from "../content/Social";
import { SlBookOpen } from "react-icons/sl";
import './Styles.css';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className=''>
    <div className='flex-grow'>
    <footer className="px-4 py-20 bg-black text-white" >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-3">
          <div title="Go to Kutty Home Page" className="col-span-2 mb-6 md:col-span-1 text-white">
            <img className="w-auto h-14 mx-auto mb-8" src="/footer/logo.png" alt="Tu logo" />
            <nav className="mb-2 ml-8">
              <p className="mb-5 text-x1 font-bold tracking-wider text-gray-50 uppercase">Contáctanos</p>
              <a href="https://api.whatsapp.com/send?phone=51978490739" target='_blank' className="flex mb-3 text-lg font-medium transition md:mb-2">
                <img src="/footer/footer_whatsapp.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                <button className=" text hover:text-primarygreen hover:scale-100 duration-300">978 490 739</button>
              </a>
              <a href="mailto:capacitaciones@cimade.edu.pe" className="flex mb-3 text-lg font-medium transition md:mb-2">
              <img src="/footer/footer_correo.svg" alt="Correo Icono" className="w-6 h-6 mr-2" />
                <button className="hover:text-primarygreen hover:scale-100 duration-300 text">capacitaciones@sayan.edu.pe</button>
              </a>

              <a className="flex mb-3 text-lg font-medium transition md:mb-2">
                <img src="/footer/footer_reloj.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
                HORARIO: 9:00 AM – 6:00 PM
              </a>
            </nav>
            <div className='justify-items-center ml-12'>
              <Social />
            </div>
          </div>
          <nav className="mb-4 ml-8">
            <p className="text-center mb-3 text-xl font-bold tracking-wider text-gray-50 uppercase">Nuestra Empresa</p>
            <div className="flex flex-col items-center  ">
              <a href="/">
                <button className=" font-poppins  mb-3 hover:text-primarygreen hover:scale-125 duration-300">Inicio</button>
              </a>

              <a href="/graduate">
                <button className=" font-poppins  mb-3 hover:text-primarygreen hover:scale-125 duration-300 ">Diplomados</button>
              </a>

              <a href="/certificate">
                <button className="font-poppins  mb-3 hover:text-primarygreen hover:scale-125 duration-300">Certificados</button>
              </a>

              <a href="/about">
                <button className="font-poppins  mb-3 hover:text-primarygreen hover:scale-125 duration-300">Nosotros</button>
              </a>

              <a href="#">
                <button className="font-poppins  hover:text-primarygreen mb-3 hover:scale-125 duration-300">Blog</button>
              </a>
            </div>
          </nav>
          <nav className="mb-4 ml-8">
            {/* INFORMACION DEL FOOTER */}
            <p className="text-center text-1 font-bold tracking-wider text-gray-50 uppercase mb-4 mr-8">Acerca de nosotros </p>
            <p className="hidden md:block text-center mr-8">Corporación Sayan se erige como una destacada institución dedicada con firmeza a la excelencia, calidad y profesionalismo, orientada a ofrecer una educación online de primer nivel, marcando un estándar insuperable en el ámbito educativo.</p>
            <p className="md:hidden text-center mr-8">Corporación Cimade, calidad y profesionalismo dedicada a brindar una educación online de excelencia. </p>
           

            <Link href="/book" className='flex items-center justify-center mt-6 font-bold text-xl'>
            <SlBookOpen className='mr-2'/>
              <p className='mr-8 text-gray-100 '>Libro de Reclamaciones</p>
            </Link>
          </nav>
        </div>
        <p className="text-sm font-medium text-left text-white md:text-center">© Copyright 2024 Sayan Emp. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
    </div>
  );
}

export default Footer;