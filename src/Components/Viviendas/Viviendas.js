import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Input/Input";
import { CardVivienda } from "../CardVivienda/CardVivienda";
import "./viviendas.css";

export const Viviendas = ({ handleIsLogged }) => {
  const token = sessionStorage.getItem("token");
  const apiOrigin = "http://localhost:3001/";
  const [apartamentos, setApartamentos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  // state filters
  const [zona, setZona] = useState("");
  const [presupuesto, setPresupuesto] = useState(0);
  const [tipo, setTipo] = useState("");
  const [estrato, setEstrato] = useState(0);

  // filters handlers
  const handleChangeZonaInput = (event) => {
    setZona(event.target.value.toLowerCase());
  };
  const handleChangePresupuestoInput = (event) => {
    setPresupuesto(Number(event.target.value));
  };
  const handleChangeTipoInput = (event) => {
    setTipo(event.target.value.toLowerCase());
  };
  const handleChangeEstratoInput = (event) => {
    setEstrato(Number(event.target.value));
  };

  function isInArray(id){
    let ans = false
    favoritos.forEach(element => {
      if(element._id===id)
      {
        ans = true
      }
    });
    return ans
  }

  const user_id = sessionStorage.getItem("user_Id")
  useEffect(() => {
      fetch(`${apiOrigin}api/users/${user_id}/likedapartments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => data.json())
        .then((res) => setFavoritos(res));
    }, [token]);

  useEffect(() => {
    fetch(`${apiOrigin}api/apartments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => setApartamentos(res));
    if (sessionStorage.getItem("current_user")) handleIsLogged(true);
  }, [handleIsLogged, token]);

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
                picture_url,
              }) =>
                housing_type.toLowerCase().startsWith(tipo) &&
                (estrato === 0 || estrato === stratum) &&
                zone.toLowerCase().startsWith(zona) &&
                (presupuesto === 0 || presupuesto === price) && (
                  <CardVivienda
                    key={_id}
                    id={_id}
                    picture_url={picture_url}
                    price={price}
                    area={area_mtsc}
                    bedrooms={bedrooms}
                    bathrooms={bathrooms}
                    favorito={isInArray(_id)}
                  />
                )
            )}
        </div>
      </div>
    </div>
  );
};
