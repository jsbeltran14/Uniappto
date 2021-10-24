import React from 'react';
import "./styles.css";

export const Home = () => {
    return (
        <div className="container">
            <div className="imagen">
                <img  className="img" alt="" src="../images/Home.png"></img>
            </div>
            <div className="card">
                <h1> ¿Tienes pensado mudarte cerca del campus pero no sabes dónde? </h1>
                <h2>¡Encuentra la mejor opción de vivienda universitaria con tus roomies preferidos!</h2>
                <button>Iniciar Sesion</button>
                <div className="registrar">
                    <p className="registrar__item">¿no tienes cuenta?</p>
                    <a className="registrar__item" href="!#"> registrate</a>
                </div>

            </div>
        </div>
    )
}
