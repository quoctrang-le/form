import React from "react";
import "./styles.css";

const Button = ({ text, handleClick }) => {
  return (
    <button
      className="__btn"
      onMouseEnter={() => console.log("click")}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
