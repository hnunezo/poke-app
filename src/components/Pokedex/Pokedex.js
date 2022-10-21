import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPokedexShow } from "../../states/page";
import List from "../List/List";
import "./pokedex.css";

const Pokedex = () => {
  const show = useSelector((state) => state.page.pokedexshow);
  const pokedex = useSelector((state) => state.pokemon.pokedex);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setPokedexShow(false));

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="d-flex flex-column align-items-center"
        style={{
          background: "rgba(227,27,109,0.7)",
          color: "white",
          borderLeft: "2px white solid",
        }}
        placement="end"
      >
        <Offcanvas.Header>
          <button className="button-close-offcanvas" onClick={handleClose}>
            X
          </button>
          <h2 className="pokemon-font">Pokedex</h2>
        </Offcanvas.Header>
        <Offcanvas.Body className={"w-100 scrollbar"}>
          <div className="d-flex flex-column">
            <List team={pokedex} type="pokedex" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Pokedex;
