import React, { useState } from "react";
import { Input } from "../Input/Input";
import "./styles.css";
import { Link } from "react-router-dom";

export const InicioSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const apiOrigin = "http://localhost:3001/api";
  function handleChange(name, value) {
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  const login = async () => {
    const resp = await fetch(`${apiOrigin}/login`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp.json();
  };

  const handleSubmit = async () => {
    const account = { email, password };
    if (account) {
      const msg = await login();
      console.log(msg);
    }
  };

  return (
    <div className="container__login">
      <div className="login__titulo">
        <h1>Inicia Sesion</h1>
      </div>
      <div className="login__card">
        <h2>Email o Telefono</h2>
        <Input
          attribute={{
            id: "email",
            name: "email",
            type: "text",
            placeholder: "Ingrese su Email o Numero",
          }}
          handleChange={handleChange}
        />
        <h2>Contraseña</h2>
        <Input
          attribute={{
            id: "contraseña",
            name: "contraseña",
            type: "text",
            placeholder: "Ingrese su contraseña",
          }}
          handleChange={handleChange}
        />
        <Link to="/roomies">
          <button onClick={handleSubmit} className="login__button">
            Ingresar
          </button>
        </Link>
      </div>
    </div>
  );
};
