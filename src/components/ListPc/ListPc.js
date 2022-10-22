import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstLetter, popupSwa } from "../../services/GlobalFunctions";
import { addTeam, setPc } from "../../states/pokemon";
import "./listpc.css";

const ListPc = ({ pc }) => {
  const team = useSelector((state) => state.pokemon.team);
  const dispatch = useDispatch();

  const reintegrateToTeam = (pok) => {
    if (team.length < 6) {
      const copy = [...pc];
      const withoutPok = copy.filter((el) => el.id !== pok.id);
      dispatch(setPc(withoutPok));
      dispatch(addTeam(pok));
      popupSwa(
        "Hey",
        `${pok.name} has been reintegrate to your team`,
        "success",
        pok.sprites.other["official-artwork"].front_default
      );
    } else if (team.length >= 6) {
      popupSwa("Team Full", ``, "error");
    }
  };

  return (
    <div
      className="w-100 d-flex flex-wrap justify-content-center"
      style={{ gap: "1rem 4rem" }}
    >
      {pc.map((pok) => (
        <div className="itempc" onClick={() => reintegrateToTeam(pok)}>
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
