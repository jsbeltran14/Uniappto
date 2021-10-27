import React from "react";
import { Input } from "../Input/Input";
import "./chat.css";

export const Chat = () => {
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
          <div className="contacto__chat">
            <img alt="" src="../images/chica.png" />
            <h3>Laura</h3>
          </div>
        </div>
      </div>
      <div className="messages__chat">
        <div className="header__chat">
          <img alt="" src="../images/chica.png" />
          <h3>Laura</h3>
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
