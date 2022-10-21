import React from "react";
import { useDispatch } from "react-redux";
import { firstLetter } from "../../services/GlobalFunctions";
import { deletePokemonTeam, setSelectedPokemon } from "../../states/pokemon";
import { setModal } from "../../states/page";
import "./item.css";

const Item = ({ pok }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setModal(true));
    dispatch(setSelectedPokemon(pok));
  };

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
        <label>info</label>
        <button className="buttons" onClick={() => openModal()}>
          +
        </button>
      </td>
      <td className="button-container">
        <label>release</label>
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
