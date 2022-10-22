import React from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonService from "../../services/Pokemon";
import { addTeam, addPokedex, setWild } from "../../states/pokemon";
import { openCanvas, setPokedexShow, setPcShow } from "../../states/page";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import { firstLetter } from "../../services/GlobalFunctions";
import "./hero.css";
import OffCanvas from "../offcanvas/OffCanvas";
import ModalInfo from "../Modal/ModalInfo";
import Pokedex from "../Pokedex/Pokedex";
import Pc from "../PC/Pc";

const Hero = () => {
  const wild = useSelector((state) => state.pokemon.wild);
  const team = useSelector((state) => state.pokemon.team);
  const pokedex = useSelector((state) => state.pokemon.pokedex);
  const modal = useSelector((state) => state.page.modal);
  const pc = useSelector((state) => state.pokemon.pc);

  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openCanvas());

  console.log(wild, "wild");
  console.log(pc, "pc");
  console.log(pokedex, "pokedex");
  console.log(team, "team");

  const handleWild = () => {
    const id = Number(Math.floor(Math.random() * (905 - 1 + 1) + 1));
    pokemonService.getPokemon(id).then((res) => {
      if (pokedex.filter((el) => el.id === res.id).length === 0) {
        const copyPokedex = [...pokedex, res];
        const orderedCopy = copyPokedex.slice().sort((a, b) => a.id - b.id);
        dispatch(addPokedex(orderedCopy));
      }
      dispatch(setWild(res));
    });
  };

  const catchPokemon = (pokemon) => {
    if (team.length === 0) {
      pokemonService.getDescription(pokemon.id).then((res) => {
        const description = res.flavor_text_entries.filter(
          (text) => text.language.name === "en"
        )[0].flavor_text;
        const copia = {
          description,
          ...pokemon,
        };
        dispatch(addTeam(copia));
      });
    } else {
      if (team.filter((pok) => pok.name === pokemon.name).length === 0) {
        pokemonService.getDescription(pokemon.id).then((res) => {
          const description = res.flavor_text_entries.filter(
            (text) => text.language.name === "en"
          )[0].flavor_text;
          const copia = {
            description,
            ...pokemon,
          };
          if (team.length < 6) {
            dispatch(addTeam(copia));
          } else {
            alert("team can´t have more than 6 pokemons");
          }
        });
      } else {
        alert("you alredy have this pokemon");
      }
    }
  };
  return (
    <div className="app">
      <div className="header-container">
        <ButtonGeneral onClick={handleWild}>
          <span>WILD POKEMON</span>
        </ButtonGeneral>
        <div className="d-flex gap-3 text-center">
          <div className="d-flex flex-column gap-3">
            <label>Capture</label>
            <img
              src={require("../../assets/images/pokeball.png")}
              className={
                Object.keys(wild).length > 0 ? "pokeball" : "desactivate"
              }
              onClick={
                Object.keys(wild).length > 0 ? () => catchPokemon(wild) : null
              }
              alt="pokeball.png"
            />
          </div>
          <div className="d-flex flex-column gap-3 text-center ">
            <img
              src={require("../../assets/images/pc.png")}
              className={
                Object.keys(wild).length > 0 ? "pokeball" : "desactivate"
              }
              onClick={() => dispatch(setPcShow(true))}
              alt="pokeball.png"
            />
            <label>PC</label>
          </div>
          <div className="d-flex flex-column gap-3">
            <label>Pokedex</label>

            <img
              src={require("../../assets/images/pokedex.png")}
              className={
                Object.keys(wild).length > 0 ? "pokeball" : "desactivate"
              }
              onClick={
                Object.keys(wild).length > 0
                  ? () => dispatch(setPokedexShow(true))
                  : null
              }
              alt="pokedex.png"
            />
          </div>
        </div>
        <ButtonGeneral onClick={handleOpen}>
          <span>TEAM</span>
        </ButtonGeneral>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center content-container">
        {Object.keys(wild).length > 0 ? (
          <>
            <img
              src={wild.sprites.other["official-artwork"].front_default}
              alt={wild.name}
            />
            <h2 style={{ textAlign: "center" }}>
              A{" "}
              <strong style={{ color: "#e31b6d" }}>
                {firstLetter(wild.name)}
              </strong>{" "}
              wild appeared
            </h2>
          </>
        ) : (
          <>
            <img src={require("../../assets/images/logo.png")} alt="pokemon" />
            <h2>
              Welcome <strong style={{ color: "#e31b6d" }}>Pokémon</strong>{" "}
              trainer
            </h2>
          </>
        )}
      </div>

      <OffCanvas />
      <Pc />
      {pokedex ? <Pokedex /> : null}
      {modal ? <ModalInfo /> : null}
    </div>
  );
};

export default Hero;
