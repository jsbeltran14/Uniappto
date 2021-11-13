import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../Input/Input";
import "./viviendas.css";

export const Viviendas = () => {
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
            <h1 className="rommies_button">Roomies</h1>
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

          <button className="filter__button">Ingresar</button>
        </div>
        <div className="list__viviendas__container">
          <div className="vivienda__container">
            <img src="../images/vivienda.jpg" alt="" />
            <div className="detalles__vivienda__container">
              <div className="detalles__vivienda">
                <div className="detalle__container">
                  <p className="titulo">Arriendo</p>
                  <p className="valor">$ 2.000.000</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Area</p>
                  <p className="valor">65m</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Habitaciones</p>
                  <p className="valor">2</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Baños</p>
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
          <div className="vivienda__container">
            <img src="../images/vivienda.jpg" alt="" />
            <div className="detalles__vivienda__container">
              <div className="detalles__vivienda">
                <div className="detalle__container">
                  <p className="titulo">Arriendo</p>
                  <p className="valor">$ 2.000.000</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Area</p>
                  <p className="valor">65m</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Habitaciones</p>
                  <p className="valor">2</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Baños</p>
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
          <div className="vivienda__container">
            <img src="../images/vivienda.jpg" alt="" />
            <div className="detalles__vivienda__container">
              <div className="detalles__vivienda">
                <div className="detalle__container">
                  <p className="titulo">Arriendo</p>
                  <p className="valor">$ 2.000.000</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Area</p>
                  <p className="valor">65m</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Habitaciones</p>
                  <p className="valor">2</p>
                </div>
                <div className="detalle__container">
                  <p className="titulo">Baños</p>
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
  );
};
