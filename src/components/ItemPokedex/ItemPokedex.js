import React from "react";
import { firstLetter } from "../../services/GlobalFunctions";

const ItemPokedex = ({ pok }) => {
  return (
    <tr className="item">
      <td># {pok.id}</td>
      <td className="image-container-blob">
        <img
          alt={pok.name}
          src={pok.sprites.other["official-artwork"].front_default}
        />
      </td>
      <td>
        <p>{firstLetter(pok.name)}</p>
      </td>
    </tr>
  );
};

export default ItemPokedex;
