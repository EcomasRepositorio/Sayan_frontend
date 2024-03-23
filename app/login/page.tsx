"use client";
import React, { useState } from "react";
import axios from "axios";
import Whatsapp from "@/components/whatsapp/Index";
import "./login.css";

type ResErrors = {
  message: string;
  errorContent: string;
};

type Auth = {
  email: string;
  password: string;
  role: boolean;
  token: string;
};

const dataForm = {
  email: "",
  password: "",
  role: true,
  token: "",
};

const Login: React.FC = () => {
  const [resErrors, setResErrors] = useState<ResErrors | null>(null);
  const [form, setForm] = useState<Auth>(dataForm);

  const handleFormData = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    textField: string
  ) => {
    const { value } = target;
    setForm({ ...form, [textField]: value });
  };

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://backend.sayan.edu.pe/api/v1/user/login",
        form
      );
      if (response.data.token) {
        const token = response.data.token;
        saveToken(token);
        window.location.href = "student";
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;

        if (data.error === "invalid_password") {
          setResErrors({
            message: "Contraseña incorrecta",
            errorContent: data.errorContent,
          });
        } else if (data.error === "user_not_found") {
          setResErrors({
            message: "Email no encontrado",
            errorContent: data.errorContent,
          });
        } else {
          setResErrors({ message: "Datos incorrectos", errorContent: "" });
        }
      } else {
        setResErrors({ message: "Error en el servidor", errorContent: "" });
      }
    }
  };
  const buttonStyle = {
    background: "#12a9be",
  };
  return (
    <section className="flex justify-center items-center h-screen bg-primaryceleste" style={{ backgroundImage: "url('image/login.jpg')" }}>
  <div className="container p-4 lg:p-10">
    <div className="slider-login">
      <form className="form-login  rounded-lg shadow-lg p-8 max-w-sm mx-auto">
        <div className="text-center mb-4">
          <img
            className="mx-auto w-24 lg:w-32"
            src="/certificate/logo_blanco.png"
            alt="logo"
          />
        </div>
        <h2 className="text-center text-xl lg:text-2xl font-semibold mb-4 text-white">Inicio de Sesión</h2>
        {resErrors?.message && (
          <div className="border border-red-800 bg-red-600 text-white text-sm p-2 rounded-md mb-4">
            {resErrors.message}
          </div>
        )}

        <div className="form-control mb-4">
          <input
            type="text"
            id="exampleFormControlInput1"
            className="input-login"
            autoComplete="off"
            required
            onChange={(event) =>
              handleFormData(event, "email")
            }
          />
          <label className="label-login">Correo</label>
        </div>

        <div className="form-control mb-4">
          <input
            type="password"
            className="input-login"
            required
            id="exampleFormControlInput11"
            onChange={(event) =>
              handleFormData(event, "password")
            }
          />
          <label className="label-login">Contraseña</label>
        </div>
        <button
          onClick={onSubmit}
          type="button"
          value="login"
          className="buttonLog w-full  text-white font-semibold py-2 px-4 rounded"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</section>



  );
};

export default Login;
