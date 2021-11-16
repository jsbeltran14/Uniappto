import React from "react";

const SideBarItem = ({ url, username, usuario, handleChatItemClick }) => {
  return (
    <div
      key={usuario._id}
      className="contacto__chat"
      onClick={() => handleChatItemClick(usuario)}
    >
      <img alt="foto" src={url} />
      <h3>{username}</h3>
    </div>
  );
};

export default SideBarItem;
