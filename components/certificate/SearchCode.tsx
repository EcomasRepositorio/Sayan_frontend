import React, { useState, FormEvent } from "react";
import { URL } from "@/components/utils/format/tokenConfig";
import axios from "axios";
import { SearchCodeProps, StudentCode } from "../../interface/interface";
import Modal from "../share/Modal";
import { Button } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";
import Image from "next/image";

const SearchName: React.FC<SearchCodeProps> = ({ onSearchCode }) => {
  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<StudentCode>();
  const [open, setOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "onChange ejecutado");
    setQueryValue(event.target.value);
    setSearchType(event.target.value);
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };
  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchCode = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }
    try {
      const value = queryValue.trim();
      const apiUrl = `${URL()}/student/code/${value}/type/${searchType}`;
      console.log(apiUrl);
      const res = await axios.get(
        `${URL()}/student/code/${value.trim()}/type/${searchType}`
      );
      console.log(res);
      setStudentData(res.data);
      onSearchCode(res.data);
      if (queryValue.trim() !== "") {
        setOpen(true);
      }
    } catch (error) {
      console.error("Error: Codigo invalido", error);
      openErrorModal();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };
  const tableRows = [
    {
      imgSrc: "/icons/organizadopor.svg",
      label: "Organizado por:",
      value: studentData?.institute,
    },
    {
      imgSrc: "/icons/otorgado.svg",
      label: "Otorgado a:",
      value: studentData?.name,
    },
    {
      imgSrc: "/icons/nom_evento.svg",
      label: "Nombre del evento:",
      value: studentData?.activityAcademy,
    },
    {
      imgSrc: "/icons/creditos_horas.svg",
      label: "Creditos/Horas:",
      value: studentData?.hour,
    },
    {
      imgSrc: "/icons/fecha_emision.svg",
      label: "Fecha de emisión:",
      value: studentData?.date,
    },
  ];

  const splitText = (text: string): string[] => {
    // Primero eliminamos espacios innecesarios y verificamos si el texto tiene las palabras clave.
    const cleanText = text.trim();

    // Identificamos la posición de las palabras clave
    const indexCorporacion = cleanText.indexOf("Corporación SAYAN");
    const indexFundenorp = cleanText.indexOf("FUNDENORP");
    

    // Si las palabras clave existen, dividimos el texto en las tres partes exactas.
    if (indexFundenorp !== -1 && indexCorporacion !== -1) {
      const firstLine = cleanText.substring(0, indexFundenorp).trim(); // Desde el inicio hasta "FUNDENORP"
      const secondLine = cleanText
        .substring(indexFundenorp, indexCorporacion)
        .trim(); // "FUNDENORP"
      const thirdLine = cleanText.substring(indexCorporacion).trim(); // "Corporación SAYAN"

      return [firstLine, secondLine, thirdLine];
    }

    // Si no encuentra las palabras clave, tratamos de hacer una separación por cantidad de palabras como fallback
    const words = cleanText.split(" ");
    const firstLine = words.slice(0, 9).join(" "); // Primera línea
    const secondLine = words.slice(9, 10).join(" "); // Segunda línea
    const thirdLine = words.slice(10).join(" "); // Tercera línea
    return [firstLine, secondLine, thirdLine].filter((line) => line.length > 0);
  };

  return (
    <div className="">
      <form onSubmit={searchCode} className="w-full ">
        <div className="flex items-center  justify-center">
          <div className=" flex-1">
            <input
              type="search"
              id="default-search"
              className=" font-normal text-sm text-gray-900 border-1 border-gray-300 rounded-lg bg-white  focus:border-primaryblue  m-0"
              placeholder={`Buscar por código ${
                searchType === "code" ? "código" : ""
              }`}
              required
              onClick={toggleIsActive}
              onChange={onChange}
              value={queryValue}
            />
          </div>
          <div className=" ml-2 h-full">
            <Button
              color="primary"
              type="submit"
              className="bg-primaryblue text-white border border-white/50 rounded-lg"
            >
              Buscar
            </Button>
          </div>
        </div>
      </form>

      {loading && <Spinner color="primary"/>}
      {studentData && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className=" flex justify-center mb-4 gap-2">
            <Image
              src={"/certificate/logo_sayan.png"}
              alt="ecomas"
              className="md:w-20 w-16  object-contain mt-2"
              width={200}
              height={200}
              priority={true}
            />
            <Image
              src={"/certificate/uni.png"}
              alt="ecomas"
              className="md:w-20 w-16  object-contain mt-2"
              width={400}
              height={400}
              priority={true}
            />
          </div>
          <div className=" max-w-md text-center  rounded-md mx-auto">
            {tableRows.map((row, index) => (
              <div key={index} className="mb-4">
                <div className="inline-flex items-center text-white  text-sm p-1 md:w-80 w-72 rounded-lg bg-slate-600 font-semibold">
                  {row.imgSrc && (
                    <Image
                      src={row.imgSrc}
                      alt={row.label}
                      className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1"
                      width={800}
                      height={800}
                    />
                  )}
                  <div className="flex-1 text-center">{row.label}</div>
                </div>

                <div className="text-gray-300 mt-3 mb-5 text-sm font-semibold">
                  {row.value === studentData?.institute &&
                    row.value &&
                    splitText(row.value).map((line, index) => (
                      <p key={index} className="mb-1">
                        {line}
                      </p>
                    ))}
                  {row.value !== studentData?.institute && row.value}
                </div>

              </div>
            ))}
          </div>
        </Modal>
      )}
      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className="p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-500 mb-4">
            Código incorrecto
          </h2>
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-100">
            El código que ingresaste no se encuentra en nuestra base de datos.
          </h3>
        </div>
      </Modal>
    </div>
  );
};

export default SearchName;
