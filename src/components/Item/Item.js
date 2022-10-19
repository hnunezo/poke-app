import React from "react";
import { firstLetter } from "../../services/GlobalFunctions";
import "./item.css";

const Item = ({ pok }) => {
  return (
    <li className="item">
      <img
        alt={pok.name}
        src={pok.sprites.other["official-artwork"].front_default}
      />
      <p>{firstLetter(pok.name)}</p>
      <div className="button-container">
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

export default Item;
