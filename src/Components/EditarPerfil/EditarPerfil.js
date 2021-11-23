import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./EditarPerfil.css";

export const EditarPerfil = ({ handleIsLogged }) => {
  const [usuarioActual, setUsuarioActual] = useState({});

  useEffect(() => {
    const usuarioActual = sessionStorage.getItem("current_user");
    if (usuarioActual) {
      setUsuarioActual(JSON.parse(usuarioActual));
      handleIsLogged(true);
    }
  }, [handleIsLogged]);

  return (
    <div className="container__edit">
      <div className="edit__titulo">
        <h1>Mi perfil</h1>{" "}
      </div>
      <div className="edit__card">
        <label className="textE" htmlFor="us">
          Nombre de usuario
        </label>
        <input
          className="form__input"
          type="text"
          id="userNameEditar"
          name="userName"
          placeholder={usuarioActual.username}
        />

        <label className="textE" htmlFor="age">
          Edad
        </label>
        <input
          className="form__input"
          type="text"
          id="ageEditar"
          name="age"
          placeholder={usuarioActual.age}
        />

        <label className="textE" htmlFor="university">
          Universidad
        </label>
        <input
          className="form__input"
          type="text"
          id="universityEditar"
          name="university"
          placeholder={usuarioActual.university}
        />

        <label className="textE" htmlFor="career">
          Carrera
        </label>
        <input
          className="form__input"
          type="text"
          id="careerEditar"
          name="career"
          placeholder={usuarioActual.career}
        />

        <label className="textE" htmlFor="semester">
          Semestre
        </label>
        <input
          className="form__input"
          type="text"
          id="semesterEditar"
          name="semester"
          placeholder={usuarioActual.semester}
        />

        <div className="row">
          <button className="edit__button">Realizar</button>

          <Link to="/roomies">
            <button className="edit__button">Cancelar</button>
          </Link>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};
