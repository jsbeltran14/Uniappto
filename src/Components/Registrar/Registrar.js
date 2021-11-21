import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";
import "./styles.css";

export const Registrar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const apiOrigin = "http://localhost:3001/api";

  function handleChange(event) {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }

  const postUser = async () => {
    try {
      const resp = await fetch(`${apiOrigin}/users`, {
        method: "POST",
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
          age: 20,
          career: "none",
          pic_url: "none",
          university: "none",
          semester: "none",
        }),
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
    const account = { name, email, password };
    if (account) {
      const data = await postUser();
      if (data.success === true) {
        console.log("usuario creado");
      }
    }
  };

  return (
    <div className="container__login">
      <div className="login__titulo">
        <h1>Registrar</h1>
      </div>
      <div className="registrar__card">
        <h2>Nombre</h2>
        <Input
          attribute={{
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nombre",
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
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Contraseña",
          }}
          handleChange={handleChange}
        />
        <h2>Repetir Contraseña</h2>
        <Input
          attribute={{
            id: "password2",
            name: "password2",
            type: "password",
            placeholder: "Contraseña",
          }}
          handleChange={handleChange}
        />
        <Link to="/">
          <button onClick={handleSubmit} className="login__button">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
};
