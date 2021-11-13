import React from "react";
import "./styles.css";

export const Input = ({ attribute, handleChange, param }) => {
  return (
    <div>
      <input
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type={attribute.type}
        onChange={handleChange}
        className="form__input"
      />
    </div>
  );
};
