import React, { useState, useEffect } from "react";
import Heart from "react-animated-heart";
export const CardVivienda = (props) => {
  const { id, picture_url, price, area, bedrooms, bathrooms, favorito } = props;

    const token = sessionStorage.getItem("token");
    const apiOrigin = "http://localhost:3001/";
 
    const [isclicked, setClick] = useState(favorito);

    const handleAgregar = (id) => {
        const user_id = sessionStorage.getItem("user_Id");
        console.log(token);
        console.log(user_id);
        console.log(id);

      fetch(`${apiOrigin}api/users/${user_id}/likedapartments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            liked_apartment_id: `${id}`,
        }),
      });
    
  };

  const handleEliminar = (id) => {
    const user_id = sessionStorage.getItem("user_Id");
    console.log(token);
    console.log(user_id);
    console.log(id);

      fetch(`${apiOrigin}api/users/${user_id}/likedapartments`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            liked_apartment_id: `${id}`,
        }),
      });
    
  };
    useEffect(()=>{ 
        setClick(favorito)    
    },[favorito]);
  
    return (
        <div className="vivienda__container">
            <img src={picture_url} alt="" />
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
                         { isclicked ? <p className="titulo">Agregado a favoritos</p>: <p className="titulo">Agregar a favoritos</p> }
                         <div className="heart">
                            <Heart isClick={isclicked} onClick={() => {setClick(!isclicked); {isclicked ? handleEliminar(id): handleAgregar(id)}}} />  
                        </div>
                    </div>
                    <div className="favoritos__container">
                        <button className="contactar__btn">contactar</button>
                    </div>
                </div>
            </div>
        </div>

  );
};
