import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="header">
      <div className="inicio">
        <img src="../images/uniapptologo.jpg" alt="logo" />
        <Link to="/">
          <h2 className="inicio">Uniappto</h2>
        </Link>
      </div>
      <div className="info">
        <div>
          <Link to="/" className="info__item">
            Viviendas Favoritas
          </Link>
        </div>
        <div>
          <a href="!#" className="info__item">
            Chat
          </a>
        </div>
        <div>
          <a href="!#" className="info__item">
            Configuraciones
          </a>
        </div>
      </div>
    </div>
  );
};
