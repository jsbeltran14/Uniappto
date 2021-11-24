import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = ({ isLogged = false }) => {
  return (
    <div className="header">
      <div className="inicio">
        <img src="../images/uniapptologo.jpg" alt="logo" />
        <Link to="/">
          <h2 className="inicio">Uniappto</h2>
        </Link>
      </div>
      <div className="info">
        {isLogged && (
          <>
            <div>
              <Link to="/favoritos" className="info__item">
                <strong>Viviendas favoritas</strong>
              </Link>
            </div>
            <div>
              <Link to="/chat" className="info__item">
                <strong>Chat</strong>
              </Link>
            </div>
            <div>
              <Link to="/EditarPerfil" className="info__item">
                <strong>Editar perfil</strong>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
