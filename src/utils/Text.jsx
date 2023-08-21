import React from "react";

const Text = ({ text, style, email, className = null }) => {
  if (!text) return;
  return (
    <p className={className ?? "text"} style={style}>
      {email ? (
        <>
          {text.split("&&^&&")[0]}
          <span className="email">{email}</span>
          {text.split("&&^&&")[1]}
        </>
      ) : (
        text
      )}
    </p>
  );
};

export default Text;
