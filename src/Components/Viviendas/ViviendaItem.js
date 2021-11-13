import React from "react";

const ViviendaItem = ({ price, bathrooms, bedrooms, area }) => {
  return (
    <div className="vivienda__container">
      <img src="../images/vivienda.jpg" alt="" />
      <div className="detalles__vivienda__container">
        <div className="detalles__vivienda">
          <div className="detalle__container">
            <p className="titulo">Arriendo</p>
            <p className="valor">$ {price}</p>
          </div>
          <div className="detalle__container">
            <p className="titulo">Area</p>
            <p className="valor">{area} m</p>
          </div>
          <div className="detalle__container">
            <p className="titulo">Habitaciones</p>
            <p className="valor">{bedrooms}</p>
          </div>
          <div className="detalle__container">
            <p className="titulo">Baños</p>
            <p className="valor">{bathrooms}</p>
          </div>
        </div>
        <div className="iconos__viviendas">
          <div className="favoritos__container">
            <p className="titulo">añadir a favoritos</p>
            <span className="fa fa-heart-o positive"></span>
          </div>
          <div className="favoritos__container">
            <button className="contactar__btn">contactar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViviendaItem;
