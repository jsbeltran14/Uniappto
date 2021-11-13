import React from 'react'

export const CardVivienda = (props) => {

    const {
        picture_url,
        price,
        area,
        bedrooms,
        bathrooms
      } = props;


    return (
        <div className="vivienda__container">
            <img src="../images/vivienda.jpg" alt="" />
            <div className="detalles__vivienda__container">
                <div className="detalles__vivienda">
                    <div className="detalle__container">
                        <p className="titulo">precio de arriendo</p>
                        <p className="valor">{price}</p>
                    </div>
                    <div className="detalle__container">
                        <p className="titulo">area</p>
                        <p className="valor">{area}</p>
                    </div>
                    <div className="detalle__container">
                        <p className="titulo">hab</p>
                        <p className="valor">{bedrooms}</p>
                    </div>
                    <div className="detalle__container">
                        <p className="titulo">baños</p>
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
    )
}
