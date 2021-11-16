import React from 'react';
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";

export const Registrar = () => {

    function handleChange(event) {
        if (event.target.name === "email") {
        } else {
        }
      }

    return (
        <div className="container__login">
      <div className="login__titulo">
        <h1>Registrar</h1>
      </div>
      <div className="registrar__card">
      <h2>Nombre</h2>
        <Input
          attribute={{
            id: "email",
            name: "email",
            type: "text",
            placeholder: "Email o número telefónico",
          }}
          handleChange={handleChange}
        />
        <h2>Email o Telefono</h2>
        <Input
          attribute={{
            id: "email",
            name: "email",
            type: "text",
            placeholder: "Email o número telefónico",
          }}
          handleChange={handleChange}
        />
        <h2>Contraseña</h2>
        <Input
          attribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "Contraseña",
          }}
          handleChange={handleChange}
        />
        <h2>Repetir Contraseña</h2>
        <Input
          attribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "Contraseña",
          }}
          handleChange={handleChange}
        />
        <Link to="/">
          <button  className="login__button">
            Registrarse
          </button>
          {/* TODO: Just authenticated users*/}
        </Link>
      </div>
    </div>
    )
}
