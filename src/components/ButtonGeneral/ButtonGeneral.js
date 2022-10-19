import React from "react";
import "./styles.css";

const ButtonGeneral = ({ children, onClick }) => {
  return (
    <button className="button" onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default ButtonGeneral;
