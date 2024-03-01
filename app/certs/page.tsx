"use client";
import React, { useState } from "react";
import SearchCode from "@/components/certificate/SearchCode";
import SearchDNI from "@/components/certificate/SearchDNI";
import SearchName from "@/components/certificate/SearchName";
import { BsQrCodeScan } from "react-icons/bs";
import { BsPersonVcard, BsPersonSquare } from "react-icons/bs";
import Whatsapp from "@/components/whatsapp/Index";
import "./Styles.css";

const Certificate: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchType, setSearchType] = useState<string | null>(null);

  const handleButton = (type: string) => {
    setSearchType(type);
    setIsActive(true);
  };

  const handleSearch = (data: string) => {
    console.log(data);
  };

  return (
    <section id="certs" className="p-2 bg-imagee">
      <div className=" max-w-screen-xl mx-auto mb-12 border mt-12 rounded-3xl shadow-2xl text-center lg:mb-20 p-2 blur-background">
        <div className="mb-4 lg:mt-0 justify-center text-5xl font-extrabold tracking-tight text-gray-500">
          <div className="flex justify-center mb-4 lg:gap-10 mt-12">
            <img
              src={"/certificate/logo_unp.png"}
              className="lg:w-44 lg:h-44 w-42 h-42 object-contain md:w-26 md:h-26 sm:w-24 sm:h-24"
              alt="Logo UNP"
            />
            <img
              src={"/certificate/logo_certificados.png"}
              className="lg:w-34 lg:h-44 w-28 h-48 object-contain md:w-32 md:h-32 sm:w-16 sm:h-16"
              alt="Logo de Certificados"
            />
          </div>
        </div>
        <div className="">
          <h2 className="mb-4 mt-20 text-4xl font-extrabold text-primaryblue">
            Certificados
          </h2>
          <p className="font-semibold text-white sm:text-xl">
            En este módulo podrá realizar la búsqueda de certificados de los
            diferentes eventos ofrecidos por SAYAN.
          </p>
          <p className="mb-6 mt-6 lg:mt-10 text-xl tracking-tight font-semibold text-white">
            Buscar por:
          </p>
          <div className="lg:flex flex-wrap justify-center items-center text-center lg:ml-56 lg:mr-56">
            <button
              onClick={() => handleButton("documentNumber")}
              className={`buttonGlobal lg:mb-20 mb-4 font-bold rounded-lg text-md px-7 py-3 text-center inline-block
              ${searchType === "documentNumber" && ""}`}
            >
              <BsPersonVcard className="text-xl inline-block align-text-top mr-1" />
              Buscar por DNI
            </button>
            <button
              onClick={() => handleButton("name")}
              className={`buttonGlobal lg:mb-20 mb-4 ml-6 mr-6 font-bold rounded-lg text-md px-3 py-3 text-center
              ${searchType === "name" && ""}`}
            >
              <BsPersonSquare className="text-lg inline-block align-text-top mr-1" />
              Buscar por nombre
            </button>
            <button
              onClick={() => handleButton("code")}
              className={`buttonGlobal lg:mb-20 mb-5 font-bold rounded-lg text-md px-4 py-3 text-center inline-block
            ${searchType === "code" && ""}`}
            >
              <BsQrCodeScan className="text-lg inline-block align-text-top mr-1" />{" "}
              Buscar por código
            </button>
          </div>

          {isActive && (
            <div>
              {searchType === "documentNumber" && (
                <SearchDNI onSearchDNI={handleSearch} />
              )}
              {searchType === "name" && (
                <SearchName onSearchName={handleSearch} />
              )}
              {searchType === "code" && (
                <SearchCode onSearchCode={handleSearch} />
              )}
            </div>
          )}
        </div>
      </div>
      <Whatsapp />
    </section>
  );
};

export default Certificate;
