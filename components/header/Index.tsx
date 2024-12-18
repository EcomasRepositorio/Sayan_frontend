"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsWhatsapp } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa"; // Icono de candado

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isCourseLocked, setIsCourseLocked] = useState(true); // Estado para controlar si el enlace de "Cursos" está bloqueado

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
  <>
    <div className="bg-black">
      <div className="flex lg:justify-between justify-center mx-auto max-w-screen-2xl p-2">
        <div className="hidden lg:flex"></div>
        <div className="flex space-x-6 rtl:space-x-reverse">
          <Link href="/certs" className="text-lg text-gray-50 hover:underline font-semibold">Verificar certificado</Link>
          <Link href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3" target='_blank' className="text-lg text-gray-50 hover:underline font-semibold">
            Aula virtual
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-black shadow-2xl mb-0">
      <div className="max-w-screen-2xl mx-auto p-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/icons/logo.png" className="h-8 mx-2" alt="sayan Logo" />
          </Link>

          <div onClick={handleMenu} className="flex lg:hidden justify-end p-4">
            {menu ? (
              <AiOutlineClose size={30} className="text-purple-50 flex justify-end" />
            ) : (
              <AiOutlineMenu size={30} className="text-purple-50 flex justify-end" />
            )}
          </div>

          <ul className="hidden uppercase font-semibold lg:flex text-white flex-wrap p-5 mx-auto space-x-8 rtl:space-x-reverse text-xm">
            <li className="hover:scale-110 duration-300">
              <Link href="/" className="p-2 hover:bg-primaryblue hover:text-primarygreen rounded-lg">Inicio</Link>
            </li>
            <li className="hover:scale-110 duration-300">
              <Link href="/graduate" className="p-2 hover:bg-primaryblue hover:text-primarygreen rounded-lg">Diplomados</Link>
            </li>
            <li className="hover:scale-110 duration-300">
              <Link href="/certs" className="p-2 hover:bg-primaryblue hover:text-primarygreen rounded-lg">Certificados</Link>
            </li>
            <li className={`relative ${isCourseLocked ? "opacity-60 cursor-not-allowed" : "hover:scale-110"} duration-300`}>
              {/* Enlace bloqueado para "Cursos" */}
              {isCourseLocked ? (
                <div className="p-2 rounded-lg flex items-center justify-center group">
                  Cursos
                  <FaLock className="absolute text-primarygreen opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
                </div>
              ) : (
                <Link href="/curs" className="p-2 hover:bg-primaryblue hover:text-primarygreen rounded-lg">Cursos</Link>
              )}
            </li>
            <li className="hover:scale-110 duration-300">
              <Link href="/about" className="p-2 hover:bg-primaryblue hover:text-primarygreen rounded-lg">Nosotros</Link>
            </li>
          </ul>

          <div className="hidden lg:flex flex-wrap justify-end max-w-screen-2xl space-x-9">
            <Link href="https://api.whatsapp.com/send?phone=51978490739" target="_blank" className="text-lg font-semibold text-green-600 hover:text-green-500">
              <BsWhatsapp className="inline-block align-middle mr-1" />
              +51 978490739
            </Link>
            <Link href="/login" className="text-blue-600">
              <IoPersonAddOutline className="text-2xl hover:text-pink-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Botón para alternar el estado de bloqueo */}
    

    <div className={menu ? 
      'lg:hidden top-[125px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-primaryblue text-white text-center ease-in duration-300 fixed z-10' : 
      'lg:hidden absolute top-[100px] right-0 left-[-1000px] flex justify-center items-center w-full h-screen bg-primaryblue text-white text-center ease-in duration-300'
    }>
      <div className="w-full mt-[-400px]">
        <ul className="uppercase font-mono font-bold text-xl mt-20">
          <li onClick={handleMenu} className="py-5">
            <Link href="/">Inicio</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href="/graduate">Diplomados</Link>
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href="/certs">Certificados</Link>
          </li>
          <li onClick={handleMenu} className={`py-5 ${isCourseLocked ? "opacity-60 cursor-not-allowed" : "hover:text-warning-800"} cursor-pointer relative`}>
            {isCourseLocked ? (
              <div className="group flex items-center justify-center">
                Cursos
                <FaLock className="absolute text-warning-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
              </div>
            ) : (
              <Link href="/curs">Cursos</Link>
            )}
          </li>
          <li onClick={handleMenu} className="py-5 hover:text-warning-800 cursor-pointer">
            <Link href="/about">Nosotros</Link>
          </li>
        </ul>
        <div className="flex flex-col justify-center items-center mt-6">
          <Link href="/login" onClick={handleMenu} className="text-white">
            <IoPersonAddOutline className="text-4xl hover:text-pink-500 mb-6" />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=51978490739" target="_blank" className="text-green-500 border border-gray-100 rounded-2xl px-8 py-2 uppercase font-bold">
            <BsWhatsapp className="text-2xl inline-block mr-2" />
            +51 978490739
          </Link>
        </div>
      </div>
    </div>
  </>
  );
};

export default Header;
