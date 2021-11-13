
import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import TinderCard from 'react-tinder-card';
import { CardRoomie } from "../CardRoomie/CardRoomie";




export default function Rommie(){
  const isAuthenticated = sessionStorage.getItem("token") !== null;

  let [roomieDisp, setroomieDisp] = useState(null);

  useEffect(() => {
      fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setroomieDisp(data));
  }, []);

  return (
    isAuthenticated && (
      <>

        {/* BREADCRUMBS */}
        <div className="hero__container">
            <div className="seccion__hero ">
                <Link to="viviendas">
                <h1>Viviendas</h1>
                </Link>
            </div>
            <div className="seccion__hero ">
                <Link to="roomies">
                <h1 className="hero__active">Roomies</h1>
                </Link>
            </div>
        </div>

        {/* TIMES */}
        <div className="roomie__container">
          <div className="imagen__roomie">
            <i className="fa fa-times fa-5x negative"></i>
          </div>
          

          {/* CONTAINER DE LOS ROOMIES */}
          <div className="roomies__container">
            {roomieDisp && roomieDisp.map((element) => (
              <TinderCard 
              className="swipe"
              key={element.name}
              preventSwipe={['up','down']}
              >
                <CardRoomie
                username={element.username}
                age={element.age}
                university={element.university}
                career={element.career}
                semester={element.semester}
                picture_url={element.picture_url}
                />  
                
              </TinderCard>    
            ))}
          </div>

          {/* CHECK */}
          <div className="imagen__roomie">
            <span className="fa fa-check fa-5x positive"></span>
          </div>

        </div>
       
      
    </>
    )
  )
};
