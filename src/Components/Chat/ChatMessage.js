import React from "react";

const ChatMessage = ({ mensaje, mensaje_propio }) => {
  return (
    <div className={"mensaje_" + mensaje_propio}>
      <p>{mensaje}</p>
    </div>
  );
};

export default ChatMessage;
