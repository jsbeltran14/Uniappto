import React, { useState, useEffect } from "react";
import { CardVivienda } from "../CardVivienda/CardVivienda";
import "./Favoritos.css";

export const Favoritos = () => {
    const token = sessionStorage.getItem("token");
    const apiOrigin = "http://localhost:3001/";
    const [apartamentos, setApartamentos] = useState([]);

    const [isClick] = useState(true);



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
          .then((res) => setApartamentos(res));
      }, [token]);
      
      
    
  return (
    <div>
    <div className="seccion__hero ">
        <h1 className="hero__active">Mis Viviendas Favoritas</h1>

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
            <CardVivienda
              key={_id}
              id={_id}
              picture_url={picture_url}
              price={price}
              area={area_mtsc}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              favorito={isClick}
            />
          
      )}
  </div>
  </div>
  )};