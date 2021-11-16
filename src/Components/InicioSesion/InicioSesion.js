import React, { useState } from "react";
import { Input } from "../Input/Input";
import "./styles.css";
import { Link } from "react-router-dom";

export const InicioSesion = ({ setIsLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const apiOrigin = "http://localhost:3001/api";

  function handleChange(event) {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }

  const login = async () => {
    try {
      console.log(email, password);
      const resp = await fetch(`${apiOrigin}/login`, {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return resp.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const account = { email, password };
    if (account) {
      const data = await login();
      if (data.success === true) {
        sessionStorage.setItem("current_user", JSON.stringify(data.data));
        console.log(data);
        sessionStorage.setItem("token", data.token);
      }
    }
  };

  return (
    <div className="container__login">
      <div className="login__titulo">
        <h1>Inicia sesión</h1>
      </div>
      <div className="login__card">
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
        <Link to="/roomies">
          <button onClick={handleSubmit} className="login__button">
            Ingresar
          </button>
        </Link>
      </div>
    </div>
  );
};
