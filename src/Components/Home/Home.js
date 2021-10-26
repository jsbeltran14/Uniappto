import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <div className="imagen">
        <img className="img" alt="" src="../images/Home.png"></img>
      </div>
      <div className="card">
        <h1> ¿Tienes pensado mudarte cerca del campus pero no sabes dónde? </h1>
        <h2>
          ¡Encuentra la mejor opción de vivienda universitaria con tus roomies
          preferidos!
        </h2>
        <Link to="/login">
          <button>Iniciar Sesion</button>
        </Link>
        <div className="registrar">
          <p className="registrar__item">¿No tienes cuenta?</p>
          <a className="registrar__item" href="/registro">
            {" "}
            Registrate Aquí
          </a>
        </div>
      </div>
    </div>
  );
};
