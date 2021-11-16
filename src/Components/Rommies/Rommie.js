import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import TinderCard from "react-tinder-card";
import { CardRoomie } from "../CardRoomie/CardRoomie";

export default function Rommie() {
  const token = sessionStorage.getItem("token");
  const apiOrigin = "http://localhost:3001/";

  const [roomieDisp, setroomieDisp] = useState(null);
  const [loggedUser, setloggedUser] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`${apiOrigin}api/users`, {
      signal: signal,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => setroomieDisp(res));

    setloggedUser(JSON.parse(sessionStorage.getItem("current_user")));
    return () => controller.abort();
  }, [token]);

  return (
    (
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
            {roomieDisp &&
              roomieDisp.map(
                (element) =>
                  loggedUser.username !== element.username && (
                    <TinderCard
                      className="swipe"
                      key={element._id}
                      preventSwipe={["up", "down"]}
                    >
                      <CardRoomie
                        key={element._id}
                        username={element.username}
                        age={element.age}
                        university={element.university}
                        career={element.career}
                        semester={element.semester}
                        pic_url={element.pic_url}
                      />
                    </TinderCard>
                  )
              )}
          </div>

          {/* CHECK */}
          <div className="imagen__roomie">
            <span className="fa fa-check fa-5x positive"></span>
          </div>
        </div>
      </>
    )
  );
}
