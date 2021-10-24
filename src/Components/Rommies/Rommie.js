import React from 'react';
import './styles.css';


export const Rommie = () => {
    return (

        <>
        <div className="hero__container">
            <div className="seccion__hero ">
                <h1>Viviendas</h1>
            </div>
            <div className="seccion__hero ">
                <h1 className="hero__active">Roomies</h1>
            </div>
        </div>
        <div className="roomie__container">
            <div className="imagen__roomie">
             <i className="fa fa-times fa-5x negative"></i>
            </div>
            <div className="card__roomie">
                <div className="img__card">
                    <img  alt="" src="../images/chica.png"/>
                </div>
                <div className="info__personal__card">
                    <h1> Laura </h1>
                    <h2>18</h2>
                </div>
                <div className="info__card__roomie">
                    <p>Universidad de los andes</p>
                    <p>Diseño</p>
                    <p>Primer Semestre</p>
                </div>
                <div className="icons__card__roomie">
                    <div>
                         <span className="fa fa-paw fa-2x negative"></span>
                    </div>
                    <div>
                        <span className="fa fa-glass fa-2x positive"></span>
                        
                    </div>
                    <div>
                         <span className="fa fa-volume-up fa-2x positive"></span>
                    </div>
                    <div>
                         <span className="fa fa-music fa-2x positive"></span>
                    </div>
                </div>

            </div>
            <div className="imagen__roomie">
                <span className="fa fa-check fa-5x positive"></span>
            </div>
        </div>
        </>
    )
}
