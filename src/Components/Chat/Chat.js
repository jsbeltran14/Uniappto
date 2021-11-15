import React, { useState, useEffect } from "react";
import { Input } from "../Input/Input";
import "./chat.css";
import SideBarItem from "./SideBarItem";

export const Chat = () => {
  const token = sessionStorage.getItem("token");
  const apiOrigin = "http://localhost:3001/";

  // state for filter
  const [searchUser, setSearchUser] = useState("");

  // User management
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioActual, setUsuarioActual] = useState({});

  // Logged user
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    fetch(`${apiOrigin}api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((res) => setUsuarios(res));

    setLoggedUser(JSON.parse(sessionStorage.getItem("current_user")));
  }, [token]);

  const handleChatItemClick = (usuario) => {
    setUsuarioActual(usuario);
  };

  const handleSearchFilter = (event) => {
    setSearchUser(event.target.value);
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
            handleChange={handleSearchFilter}
          />
        </div>

        <div className="contactos__chat">
          {usuarios &&
            usuarios.map(
              (usuario) =>
                usuario.username
                  .toLowerCase()
                  .startsWith(searchUser.toLowerCase()) &&
                loggedUser.username !== usuario.username && (
                  <SideBarItem
                    key={usuario._id}
                    handleChatItemClick={handleChatItemClick}
                    url={usuario.pic_url}
                    username={usuario.username}
                    usuario={usuario}
                  />
                )
            )}
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
