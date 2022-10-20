import React from "react";
import { useDispatch } from "react-redux";
import { firstLetter } from "../../services/GlobalFunctions";
import { deletePokemonTeam } from "../../states/pokemon";
import "./item.css";

const Item = ({ pok }) => {
  const dispatch = useDispatch();

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
        <button
          className="buttons"
          onClick={() => dispatch(deletePokemonTeam(pok.id))}
        >
          -
        </button>
      </td>
    </tr>
  );
};

export default Item;
