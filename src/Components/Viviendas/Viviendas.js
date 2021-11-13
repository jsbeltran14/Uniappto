
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Input/Input";
import ViviendaItem from "./ViviendaItem";
import "./viviendas.css";

export const Viviendas = () => {
  const token = sessionStorage.getItem("token");
  const apiOrigin = "http://localhost:3001/";
  const [apartamentos, setApartamentos] = useState([]);

  // state filters
  const [zona, setZona] = useState("");
  const [presupuesto, setPresupuesto] = useState(0);
  const [tipo, setTipo] = useState("");
  const [estrato, setEstrato] = useState(0);

  // filters handlers
  const handleChangeZonaInput = (event) => {
    setZona(event.target.value);
  };
  const handleChangePresupuestoInput = (event) => {
    setPresupuesto(Number(event.target.value));
  };
  const handleChangeTipoInput = (event) => {
    setTipo(event.target.value);
  };
  const handleChangeEstratoInput = (event) => {
    setEstrato(Number(event.target.value));
  };

  useEffect(() => {
    fetch(`${apiOrigin}api/apartments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => setApartamentos(res));
  }, [token]);

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
            handleChange={handleChangeZonaInput}
          />

          <Input
            attribute={{
              id: "precio",
              name: "precio",
              type: "text",
              placeholder: "presupuesto",
            }}
            handleChange={handleChangePresupuestoInput}
          />

          <Input
            attribute={{
              id: "tipo",
              name: "tipo",
              type: "text",
              placeholder: "tipo inmueble",
            }}
            handleChange={handleChangeTipoInput}
          />

          <Input
            attribute={{
              id: "estrato",
              name: "estrato",
              type: "text",
              placeholder: "estrato",
            }}
            handleChange={handleChangeEstratoInput}
          />


          <button className="filter__button">Ingresar</button>

        </div>
        <div className="list__viviendas__container">
          {apartamentos &&
            apartamentos.map(
              ({
                _id,
                price,
                bathrooms,
                bedrooms,
                area_mtsc,
                housing_type,
                stratum,
                zone,
              }) =>
                housing_type.startsWith(tipo) &&
                (estrato === 0 || estrato === stratum) &&
                zone.startsWith(zona) &&
                (presupuesto === 0 || presupuesto === price) && (
                  <ViviendaItem
                    key={_id}
                    price={price}
                    area={area_mtsc}
                    bathrooms={bathrooms}
                    bedrooms={bedrooms}
                  />
                )
            )}
        </div>

      </div>
    </div>
  );
};

