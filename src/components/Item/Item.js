import React from "react";
import { firstLetter } from "../../services/GlobalFunctions";
import "./item.css";

const Item = ({ pok }) => {
  return (
    <tr className="item">
      <td className="image-container-blob">
        <img
          alt={pok.name}
          src={pok.sprites.other["official-artwork"].front_default}
        />
      </td>
      <td>
        <p>{firstLetter(pok.name)}</p>
      </td>

      <td className="button-container">
        <button className="buttons">+</button>
      </td>
      <td className="button-container">
        <button className="buttons">-</button>
      </td>
    </tr>
  );
};

export default Item;
