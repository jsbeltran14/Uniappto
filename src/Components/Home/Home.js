import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const handleSubmit = () => {
    sessionStorage.removeItem("current_user");
    sessionStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div className="container">
      <div className="imagen">
        <img className="img" alt="" src="../images/Home.png"></img>
      </div>
      <div className="card">
        <h1> ¿Tienes pensado mudarte cerca del campus pero no sabes dónde? </h1>
        <h3>
          ¡Encuentra la mejor opción de vivienda universitaria con tus roomies
          preferidos!
        </h3>

        {sessionStorage.getItem("current_user") == null ? (
          <>
            <Link to="/login">
              <button>Iniciar Sesion</button>
            </Link>
            <div className="registrar">
              <p className="registrar__item">¿No tienes cuenta?</p>
              <Link to="/registrar">
                <p className="registrar__item"> Registrate Aquí</p>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/roomies">
              <button>Busca Roomies</button>
            </Link>
            <div className="registrar">
              <p className="registrar__item">¿deseas cerrar sesion?</p>
              <Link to="/" onClick={handleSubmit}>
                <p className="registrar__item"> Cerrar Sesion</p>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
