import React from "react";
import { firstLetter } from "../../services/GlobalFunctions";
import "./listpc.css";

const ListPc = ({ pc }) => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="d-flex gap-4 flex-wrap justify-content-center">
        {pc.map((pok) => (
          <div className="itempc" key={pok.id}>
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
    </div>
  );
};

export default ListPc;
