import React, { useState, useEffect } from "react";
import { Input } from "../Input/Input";
import "./chat.css";

export const Chat = () => {
  const token = sessionStorage.getItem("token");
  const apiOrigin = "http://localhost:3001/";

  let [usuarios, setUsuarios] = useState([]);
  let [usuarioActual, setUsuarioActual] = useState({});

  useEffect(() => {
    fetch(`${apiOrigin}api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => setUsuarios(res));
  }, [token]);

  const handleChatItemClick = (usuario) => {
    setUsuarioActual(usuario);
  };

  return (
    <div className="chat__container">
      <div className="sidebar__chat">
        <div className="input__chat">
          <Input
            attribute={{
              id: "buscar",
              name: "buscar",
              type: "text",
              placeholder: "Buscar",
            }}
          />
        </div>

        <div className="contactos__chat">
          {usuarios &&
            usuarios.map((usuario) => (
              <div
                key={usuario._id}
                className="contacto__chat"
                onClick={() => handleChatItemClick(usuario)}
              >
                <img alt="" src={usuario.pic_url} />
                <h3>{usuario.username}</h3>
              </div>
            ))}
        </div>
      </div>
      <div className="messages__chat">
        <div className="header__chat">
          <img alt="" src={usuarioActual.pic_url} />
          <h3>{usuarioActual.username}</h3>
        </div>

        <div className="body__chat"></div>

        <div className="input__messages__chat">
          <Input
            attribute={{
              id: "mensaje",
              name: "mensaje",
              type: "text",
              placeholder: "",
            }}
          />

          <span className="fa fa-arrow-circle-right fa-2x "></span>
        </div>
      </div>
    </div>
  );
};
