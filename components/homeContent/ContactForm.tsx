"use client";
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaUserPlus } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import './Styles.css';



const ContactForm = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
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
    console.log(data);
    setSending(true);
    const serviceID = "service_i88as6f";
    const templateID = "template_5xocaql";
    const apiKey = "g-1IPnSH_2rU34udz";
    if (refForm.current) {
      try {
        await emailjs.sendForm(serviceID, templateID, refForm.current, apiKey);
        alert('¡Mensaje Enviado!');
      } catch (err) {
        alert(JSON.stringify(err));
      } finally {
        setSending(false);
      }
    }
  }

  const validateCheckbox = () => {
    if (!reclamoChecked && !sugerenciaChecked) {
      return "Selecciona al menos una opción";
    }
    return true;
  };
  return (
    <section className='mt-20 mb-20'>
    <div className='max-w-screen-lg mx-auto bg-gradient-to-r from-primaryblue to-primaryceleste rounded-xl p-8'>
     
    <div className='p-8 '>
      <h1 className=' uppercase font-extrabold text-white lg:text-5xl md:text-5xl text-4xl mt-8 mb-8 text-center'>CONTÁCTANOS</h1>
     
      <h2 className='bg-primarygreen p-1 text-lg font-semibold text-gray-50 rounded-xl'></h2>
    </div>
  <form ref={refForm} onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>
      <div className='text-slate-300 md:mt-4'>
        <label
          className=' font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
              Nombres y Apellidos:
        </label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <FaUserPlus  />
          </div>
        <input
          type="text" {...register('firstName', { required: true })}
          id='nombres'
          name='firstName'
          //autoFocus
          className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
        </div>
        </div>

        <div className='text-slate-300 md:mt-4'>
        <label
          className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
            Correo Electrónico:
        </label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <FaUserPlus />
          </div>
        <input
          type="text" {...register('gmail', { required: true })}
          id='correo'
          name='gmail'
          //autoFocus
          className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
      </div>
      </div>

      <div className='text-slate-300'>
        <label
          className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
            Celular:
        </label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
        <BsFillTelephoneFill />
          </div>
        <input
          type="text" {...register('phoneNumber', { required: true })}
          id='number'
          name='phoneNumber'
          //autoFocus
          className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
      </div>
        {errors.nombres && <p>El campo nombre es obligatorio</p>}
        {errors.nombres && <p>El campo nombre debe contener menos de 20 caracteres</p>}
      </div>

      <div className='text-slate-300'>
        <label
          className='font-bold absolute text-lg duration-500 scale-75 origin-[0]'>
            Mensaje:
        </label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
         
          </div>
        <input
          type="text" {...register('message', { required: true })}
          id='message'
          name='message'
          //autoFocus
          className="bg-gray-100 border-2 mt-6 border-gray-300 text-gray-600 text-sm rounded-lg block w-full ps-8 p-2.5" placeholder=""/>
      </div>
      </div>

      <input type="submit" value={sending ? 'Enviando...' : 'Enviar'} className=' border-2 p-2 mb-6 rounded-xl bg-primaryblue text-gray-200 text-xl font-bold cursor-pointer'/>
    </form>
    </div>
  </section>
  );
}

export default ContactForm;
