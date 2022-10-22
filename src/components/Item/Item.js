import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstLetter, popupSwa } from "../../services/GlobalFunctions";
import {
  deletePokemonTeam,
  setSelectedPokemon,
  setPc,
} from "../../states/pokemon";
import { setModal } from "../../states/page";
import "./item.css";

const Item = ({ pok }) => {
  const dispatch = useDispatch();
  const pc = useSelector((state) => state.pokemon.pc);

  const openModal = () => {
    dispatch(setModal(true));
    dispatch(setSelectedPokemon(pok));
  };

  const sendToPc = (id) => {
    const copy = [...pc, pok];
    dispatch(setPc(copy));
    dispatch(deletePokemonTeam(id));
    popupSwa(
      "Hey",
      `${pok.name} has been sent to your pc`,
      "success",
      pok.sprites.other["official-artwork"].front_default
    );
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
        <button className="buttons" onClick={() => openModal()}>
          +
        </button>
      </td>
      <td className="button-container">
        <button className="buttons" onClick={() => sendToPc(pok.id)}>
          -
        </button>
      </td>
    </tr>
  );
};

export default Item;
