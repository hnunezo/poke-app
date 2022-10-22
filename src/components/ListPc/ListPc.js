import React from "react";
import { firstLetter } from "../../services/GlobalFunctions";
import "./listpc.css";

const ListPc = ({ pc }) => {
  return (
    <div
      className="w-100 d-flex flex-wrap justify-content-center"
      style={{ gap: "1rem 4rem" }}
    >
      {pc.map((pok) => (
        <div className="itempc" onClick={() => console.log("click")}>
          <p># {pok.id}</p>
          <img
            alt={pok.name}
            src={pok.sprites.other["official-artwork"].front_default}
            className="img-pc"
          />
          <p>{firstLetter(pok.name)}</p>
        </div>
      ))}
    </div>
  );
};

export default ListPc;
