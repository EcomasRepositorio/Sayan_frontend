import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import Modal from '../share/Modal';
import { SearchDNIProps, Student } from '@/interface/interface';
import { URL } from '@/components/utils/format/tokenConfig';
import '../../style/globals.css';

interface StudentCode extends Student {
  hour: string;
  institute: string;
}

const SearchName: React.FC<SearchDNIProps> = ({ onSearchDNI }) => {
  const [isActive, setIsActive] = useState(false);
  const [queryValue, setQueryValue] = useState<string>('');
  const [searchType, setSearchType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState<Student[]>([]);
  const [closeTable, setCloseTable] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudentData, setSelectedStudentData] = useState<StudentCode | null>(null);
  const [openModals, setOpenModals] = useState<boolean[]>([]);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
    setCloseTable(false);
  };

  const openErrorModal = () => {
    setModalOpen(true);
  };

  const closeErrorModal = () => {
    setModalOpen(false);
  };

  const searchDNI = async (event: FormEvent) => {
    event.preventDefault();

    if (queryValue.trim()) {
      setLoading(true);
    }

    try {
      const value = queryValue.trim();
      const res = await axios.get(`${URL()}/student/dni/${value}/type/${searchType}`);
      console.log(res.data);
      setStudentData(res.data);
      onSearchDNI(res.data);
      setCloseTable(true);
    } catch (error) {
      console.error("Error: DNI invalido", error);
      openErrorModal();
    } finally {
      setLoading(false);
    }
  };

  const tableRows = [
    { imgSrc: '/icons/organizadopor.svg', label: 'Organizado por:', value: 'institute' },
    { imgSrc: '/icons/otorgado.svg', label: 'Otorgado a:', value: 'name' },
    { imgSrc: '/icons/nom_evento.svg', label: 'Nombre del evento:', value: 'activityAcademy' },
    { imgSrc: '/icons/creditos_horas.svg', label: 'Creditos/Horas:', value: 'hour' },
    { imgSrc: '/icons/fecha_emision.svg', label: 'Fecha de emisión:', value: 'date' },
  ];

  const splitText = (text: string): string[] => {
    const words = text.trim().split(" ");
    if (words.length > 7) {
      const firstLine = words.slice(0, words.length - 6).join(" ");
      const secondLine = words.slice(words.length - 6, words.length - 2).join(" ");
      const thirdLine = words.slice(words.length - 2, words.length).join(" ");
      return [firstLine, secondLine, thirdLine];
    } else if (words.length === 7) {
      const firstLine = words.slice(0, 4).join(" ");
      const secondLine = words.slice(4, 5).join(" ");
      const thirdLine = words.slice(5, 7).join(" ");
      return [firstLine, secondLine, thirdLine];
    } else if (words.length === 6) {
      const firstLine = words.slice(0, 4).join(" ");
      const secondLine = words.slice(4, 6).join(" ");
      const thirdLine = words.slice(5, 5).join(" ");
      return [firstLine, secondLine, thirdLine];
    } else {
      return [text];
    }
  };

  const openStudentModal = (selectedStudent: StudentCode, index: number) => {
    setSelectedStudentData(selectedStudent);
    const updatedOpenModals = Array(studentData.length).fill(false);
    updatedOpenModals[index] = true;
    setOpenModals(updatedOpenModals);
  };

  const closeStudentModal = (index: number) => {
    const updatedOpenModals = [...openModals];
    updatedOpenModals[index] = false;
    setOpenModals(updatedOpenModals);
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-8 text-center lg:mb-12">
      <form onSubmit={searchDNI} className="w-full md:w-2/3 lg:w-full xl:w-2/3 mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium"></label>
        <div className="relative lg:mx-auto mr-4 ml-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full font-semibold p-4 ps-10 text-sm text-gray-600 border-2 border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder={`Buscar por DNI ${searchType === 'documentNumber' ? 'DNI' : ''}`}
            required
            onClick={toggleIsActive}
            onChange={onChange}
            value={queryValue}
          />
          <button className=" bg-primaryblue absolute end-1.5 bottom-3 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-1.5">Buscar</button>
        </div>
      </form>

      {loading && <p>Cargando...</p>}

      {closeTable && studentData.length > 0 && (
        <div className="relative overflow-x-auto shadow-xl sm:rounded-xl mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-semibold">
            <thead className="text-xs text-center text-gray-700 uppercase bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">#</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Actividad academica</th>
                <th scope="col" className="px-6 py-3">Fecha</th>
                <th scope="col" className="px-6 py-3">Acción</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index} className="bg-white border-b text-center hover:bg-gray-100">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap w-12">
                    <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{index + 1}</span>
                  </th>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.activityAcademy}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span style={{ whiteSpace: 'nowrap', display: 'block' }}>{student.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type='button'
                      onClick={() => openStudentModal(student as StudentCode, index)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Ver
                    </button>
                  </td>
                  {selectedStudentData && (
                    <Modal open={openModals[index]} onClose={() => closeStudentModal(index)}>
                      <div className='flex justify-center items-center mb-4 gap-10'>
                        <img src={'/certificate/logo_unp.png'} className="md:w-32 md:h-32 w-32 h-32 object-contain" />
                        <img src={'/certificate/logo_certificados.png'} className="md:w-24 md:h-32 w-24 h-24 object-contain" />
                      </div>
                      <div className="max-w-md mx-auto p-6 bg-white rounded-md">
                        {tableRows.map((row, idx) => (
                          <div key={idx} className="mb-4">
                            <div className="flex items-center text-gray-100 text-sm p-1 lg:ml-5 ml-0 lg:w-80 w-full rounded-lg bg-slate-600 font-semibold">
                              {row.imgSrc && <img src={row.imgSrc} alt={row.label} className="flex lg:w-5 lg:h-5 w-5 h-5 object-contain ml-1" />}
                              <div className='flex-1 text-center'>
                                {row.label}
                              </div>
                            </div>
                            <div className="text-gray-600 mt-3 mb-5 text-sm font-semibold">
                              {row.value === 'institute' ? (
                                splitText(selectedStudentData[row.value as keyof StudentCode] as string).map((text, index) => (
                                  <p key={index}>{text}</p>
                                ))
                              ) : (
                                <div>{selectedStudentData ? selectedStudentData[row.value as keyof StudentCode] : ''}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Modal>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal open={modalOpen} onClose={closeErrorModal}>
        <div className="border-2 p-2 rounded-lg">
          <h2 className="text-md font-bold text-red-600 mb-4">DNI incorrecto</h2>
          <h3 className="text-sm font-semibold text-gray-600">El DNI que ingresaste no se encuentra en nuestra base de datos.</h3>
        </div>
      </Modal>
    </div>
  );
};

export default SearchName;
