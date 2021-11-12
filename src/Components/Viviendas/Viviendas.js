import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Input } from "../Input/Input";
import { CardVivienda } from "../CardVivienda/CardVivienda";
import './viviendas.css'


export default function Viviendas() {

    let [viviendasDisp, setviviendasDisp] = useState(null);

    useEffect(() => {
        fetch("/api/apartments")
        .then((response) => response.json())
        .then((data) => setviviendasDisp(data));
    }, []);

    return (
        <div>
        <div className="hero__container">
            <div className="seccion__hero ">
                <Link to="viviendas">
                <h1 className="hero__active">Viviendas</h1>
                </Link>
            </div>
            <div className="seccion__hero ">
                <Link to="roomies">
                <h1 className="">Roomies</h1>
                </Link>
            </div>
        </div>
        <div className="viviendas__container">
            <div className="filtro__viviendas__container">
            
                    <h3>Filtros de busqueda</h3>
                    
                    <Input
                    attribute={{
                        id: "zona",
                        name: "zona",
                        type: "text",
                        placeholder: "zona",
                    }}
                    
                    />
                    
                    <Input
                    attribute={{
                        id: "precio",
                        name: "precio",
                        type: "text",
                        placeholder: "presupuesto",
                    }}
                    />

                    <Input
                    attribute={{
                        id: "tipo",
                        name: "tipo",
                        type: "text",
                        placeholder: "tipo inmueble",
                    }}
                    />

                    <Input
                    attribute={{
                        id: "estrato",
                        name: "estrato",
                        type: "text",
                        placeholder: "estrato",
                    }}
                    />
                    
                    <button className="filter__button">
                        Ingresar
                    </button>
                    
                
            </div>
            <div className="list__viviendas__container">
                
            {viviendasDisp && viviendasDisp.map((element) => (
                <CardVivienda
                picture_url={element.picture_url}
                price={element.price}
                area={element.area}
                bedrooms={element.bedrooms}
                bathrooms={element.bathrooms}
                />
            ))}

                <div className="vivienda__container">
                    <img src="../images/vivienda.jpg" alt="" />
                    <div className="detalles__vivienda__container">
                        <div className="detalles__vivienda">
                            <div className="detalle__container">
                                <p className="titulo">precio de arriendo</p>
                                <p className="valor">$ 2.000.000</p>
                            </div>
                            <div className="detalle__container">
                                <p className="titulo">area</p>
                                <p className="valor">65m</p>
                            </div>
                            <div className="detalle__container">
                                <p className="titulo">hab</p>
                                <p className="valor">2</p>
                            </div>
                            <div className="detalle__container">
                                <p className="titulo">baños</p>
                                <p className="valor">2</p>
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
            </div>
        </div>
        </div>
    )
}



