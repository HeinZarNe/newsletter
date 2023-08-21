import React from "react";

const Header = ({ text, style }) => {
  return (
    <p className="header" style={style}>
      {text}
    </p>
  );
};

export default Header;
