"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Styles.css"; // Asegúrate de tener esta hoja de estilos donde puedes agregar media queries extra

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [sending, setSending] = useState(false);

  const [reclamoChecked, setReclamoChecked] = useState(false);
  const [sugerenciaChecked, setSugerenciaChecked] = useState(false);

  const handleReclamoChange = () => {
    setReclamoChecked(!reclamoChecked);
    setSugerenciaChecked(false);
  };

  const handleSugerenciaChange = () => {
    setSugerenciaChecked(!sugerenciaChecked);
    setReclamoChecked(false);
  };

  const refForm = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<any> = async (data, event) => {
    event?.preventDefault();
    setSending(true);
    const serviceID = "service_t41ltgf";
    const templateID = "template_5xocaql";
    const apiKey = "g-1IPnSH_2rU34udz";
    if (refForm.current) {
      try {
        await emailjs.sendForm(serviceID, templateID, refForm.current, apiKey);
        alert("¡Mensaje Enviado!");
      } catch (err) {
        alert(JSON.stringify(err));
      } finally {
        setSending(false);
      }
    }
  };

  const validateCheckbox = () => {
    if (!reclamoChecked && !sugerenciaChecked) {
      return "Selecciona al menos una opción";
    }
    return true;
  };

  return (
    <section
      className="bg-cover bg-center p-6 md:p-20"
      style={{ backgroundImage: "url(/certificate/bg-cert3.jpg)" }}
    >
      <div className="max-w-screen-lg mx-auto bg-primaryblue/80 rounded-xl p-6 md:p-8">
        <div className="p-4 md:p-8">
          <h1 className="uppercase font-extrabold text-white text-center text-3xl md:text-4xl lg:text-5xl mt-4 md:mt-8 mb-4 md:mb-8">
            CONTÁCTANOS
          </h1>

          <h2 className="bg-primarygreen p-0.5 font-semibold text-gray-50 rounded-xl"></h2>
        </div>

        <form
          ref={refForm}
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2"
        >
          {/* Nombres y Apellidos */}
          <div className="text-slate-300 md:mt-4">
            <label className="font-bold text-lg">
              Nombres y Apellidos:
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <FaUserPlus />
              </div>
              <input
                type="text"
                {...register("firstName", { required: true })}
                className="bg-gray-100 border-2 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500">
                El campo Nombres y Apellidos es obligatorio.
              </p>
            )}
          </div>

          {/* Correo Electrónico */}
          <div className="text-slate-300 md:mt-4">
            <label className="font-bold text-lg">
              Correo Electrónico:
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <FaUserPlus />
              </div>
              <input
                type="email"
                {...register("gmail", { required: true })}
                className="bg-gray-100 border-2 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
              />
            </div>
            {errors.gmail && (
              <p className="text-red-500">
                El campo Correo Electrónico es obligatorio.
              </p>
            )}
          </div>

          {/* Celular */}
          <div className="text-slate-300">
            <label className="font-bold text-lg">
              Celular:
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <BsFillTelephoneFill />
              </div>
              <input
                type="text"
                {...register("phoneNumber", { required: true, maxLength: 20 })}
                className="bg-gray-100 border-2 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500">
                El campo Celular es obligatorio y debe tener menos de 20 caracteres.
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div className="text-slate-300">
            <label className="font-bold text-lg">
              Mensaje:
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                {...register("message", { required: true })}
                className="bg-gray-100 border-2 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5"
              />
            </div>
            {errors.message && (
              <p className="text-red-500">El campo Mensaje es obligatorio.</p>
            )}
          </div>
          <input
            type="submit"
            value={sending ? "Enviando..." : "Enviar"}
            className="border-2 p-2 mb-6 rounded-xl bg-primaryblue flex justify-center text-gray-200 text-xl font-bold cursor-pointer"
          />
        </form>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
        >
          <img src="/icons/run.svg" alt="Icono" className="w-16 flex justify-center animate-bounce mt-5" />
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
