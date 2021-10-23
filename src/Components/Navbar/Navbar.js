import React from 'react';
import "./styles.css";

export const Navbar = () => {
    return (
        <div className="header">
            <div className="inicio">
            <img src="../images/uniapptologo.jpg"
                alt="logo" />
            <h2>Uniappto</h2>
            </div>
            <div className="info">
                <div>
                    <a href="!#" className="info__item">viviendas favoritas</a>
                </div>
                <div>
                    <a href="!#" className="info__item">chat</a>
                </div>
                <div>
                    <a href="!#" className="info__item">editar perfil</a>
                </div>
            </div>
        </div>
    )
}
