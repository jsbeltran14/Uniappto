import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Input/Input";

import "./EditarPerfil.css";

export const EditarPerfil = ({ handleIsLogged }) => {
  const [usuarioActual, setUsuarioActual] = useState({});

  const [username, setUserName] = useState(usuarioActual.username);
  const [age, setAge] = useState(usuarioActual.age);
  const [semester, setSemester] = useState(usuarioActual.semester);
  const [university, setUniversity] = useState(usuarioActual.university);
  const [career, setCareer] = useState(usuarioActual.career);

  const usernameA = usuarioActual.username;
  const ageA = usuarioActual.age;
  const semesterA = usuarioActual.semester;
  const universityA = usuarioActual.university;
  const careerA  = usuarioActual.career;

  const apiOrigin = "http://localhost:3001/api";

  useEffect(() => {
    const usuarioActual = sessionStorage.getItem("current_user");
    if (usuarioActual) {
      setUsuarioActual(JSON.parse(usuarioActual));
      handleIsLogged(true);
    }
  }, [handleIsLogged]);

  const putUser = async () => {
    try {
      const resp = await fetch(`${apiOrigin}/users/${usuarioActual._id}`, {
        method: "PUT",
        body: JSON.stringify({
          username: username,
          age: age,
          career: career,
          university: university,
          semester: semester,
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
    const account = { username, age, career, university, semester };
    if (account) {
      putUser();
    }
  };
  function handleChange(event) {
    if (event.target.name === "userName") {
      setUserName(event.target.value);
    } else if (event.target.name === "age") {
      setAge(event.target.value);
    } else if (event.target.name === "university") {
      setUniversity(event.target.value);
    } else if (event.target.name === "career") {
      setCareer(event.target.value);
    } else if (event.target.name === "semester") {
      setSemester(event.target.value);
    }
  }

  return (
   
    <div className="container__edit">
      <div className="edit__titulo">
        <h1>Mi perfil</h1>{" "}
      </div>
      <div className="edit__card">
        <label className="textE" htmlFor="us">
          Nombre de usuario
        </label>
        <Input
          attribute={{
            type: "text",
            id: "userName",
            name: "userName",
            placeholder: usernameA,
          }}
          handleChange={handleChange}
        />

        <label className="textE" htmlFor="age">
          Edad
        </label>
        <Input
          attribute={{
            type: "text",
            id: "age",
            name: "age",
            placeholder: ageA,
          }}
          handleChange={handleChange}
        />

        <label className="textE" htmlFor="university">
          Universidad
        </label>
        <Input
          attribute={{
            type: "text",
            id: "university",
            name: "university",
            placeholder: universityA,
          }}
          handleChange={handleChange}
        />

        <label className="textE" htmlFor="career">
          Carrera
        </label>
        <Input
          attribute={{
            type: "text",
            id: "career",
            name: "career",
            placeholder: careerA,
          }}
          handleChange={handleChange}
        />

        <label className="textE" htmlFor="semester">
          Semestre
        </label>
        <Input
          attribute={{
            type: "text",
            id: "semester",
            name: "semester",
            placeholder: semesterA,
          }}
          handleChange={handleChange}
        />

        <div className="row">
          <button className="edit__button" onClick={handleSubmit}>
            Realizar
          </button>

          <Link to="/roomies">
            <button className="edit__button">Cancelar</button>
          </Link>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};
