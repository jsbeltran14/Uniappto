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
            <strong>Viviendas favoritas</strong>
          </Link>
        </div>
        <div>
          <Link to="/chat" className="info__item">
            <strong>Chat</strong>
          </Link>
        </div>
        <div>
          <a href="!#" className="info__item">
            <strong>Editar perfil</strong>
          </a>
        </div>
      </div>
    </div>
  );
};
