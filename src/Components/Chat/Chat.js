import React, { useState, useEffect } from "react";
import { Input } from "../Input/Input";
import "./chat.css";
import ChatMessage from "./ChatMessage";
import SideBarItem from "./SideBarItem";

export const Chat = ({ handleIsLogged }) => {
  const token = sessionStorage.getItem("token");
  const apiOrigin = "http://localhost:3001/";

  // state for filter
  const [searchUser, setSearchUser] = useState("");

  // User management
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioActual, setUsuarioActual] = useState({});

  // Logged user
  const [loggedUser, setLoggedUser] = useState({});

  // mensaje
  const [mensaje, setmensaje] = useState("");
  const [mensajesEnviados, setMensajesEnviados] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    if (sessionStorage.getItem("current_user")) {
      setLoggedUser(JSON.parse(sessionStorage.getItem("current_user")));
      const { signal } = controller;
      handleIsLogged(true);

      fetch(`${apiOrigin}api/users/${loggedUser._id}/matches`, {
        signal: signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => data.json())
        .then((res) => setUsuarios(res));
    }

    return () => controller.abort();
  }, [loggedUser._id, token, handleIsLogged]);

  const handleChatItemClick = (usuario) => {
    setUsuarioActual(usuario);
  };

  const handleSearchFilter = (event) => {
    setSearchUser(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setmensaje(event.target.value);
  };
  const handleSubmitMensaje = () => {
    setMensajesEnviados([...mensajesEnviados, mensaje]);
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

        <div className="body__chat">
          <ChatMessage mensaje="Hola Juan" mensaje_propio={"no"} />
          {mensajesEnviados &&
            mensajesEnviados.map((mensaje) => (
              <ChatMessage mensaje={mensaje} mensaje_propio={"si"} />
            ))}
        </div>

        <div className="input__messages__chat">
          <Input
            attribute={{
              id: "mensaje",
              name: "mensaje",
              type: "text",
              placeholder: "",
            }}
            handleChange={handleMensajeChange}
          />
          <span
            className="fa fa-arrow-circle-right fa-2x "
            onClick={handleSubmitMensaje}
          ></span>
        </div>
      </div>
    </div>
  );
};
