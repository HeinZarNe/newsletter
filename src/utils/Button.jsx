import React from "react";

const Button = ({ text, style, success, onCLick }) => {
  return (
    <button
      className={success ? "success-button" : "button"}
      style={style}
      onClick={typeof onCLick === "function" && onCLick}
    >
      {text}
    </button>
  );
};

export default Button;
