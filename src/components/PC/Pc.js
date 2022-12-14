import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPcShow } from "../../states/page";
import ListPc from "../ListPc/ListPc.js";

const Pc = () => {
  const pc = useSelector((state) => state.pokemon.pc);
  const show = useSelector((state) => state.page.pcshow);
  const team = useSelector((state) => state.pokemon.team);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setPcShow(false));

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="d-flex flex-column align-items-center"
        style={{
          background: "rgba(227,27,109,0.7)",
          color: "white",
          borderTop: "2px white solid",
        }}
        placement="bottom"
      >
        <Offcanvas.Header className="w-100 d-flex justify-content-center">
          <p style={{ fontSize: "1rem", position: "absolute", top: "-2rem" }}>
            {team.length < 6
              ? "Click on the Pokémon to reintegrate it into the team!"
              : "Team full!"}
          </p>
          <h2 className="pokemon-font">PC</h2>
          <button className="button-close-offcanvas" onClick={handleClose}>
            X
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="w-100 scrollbar">
          <div className="d-flex justify-content-center align-items-center">
            {pc.length > 0 ? (
              <ListPc pc={pc} />
            ) : (
              <div>
                <h2>Empty...</h2>
                <p style={{ fontSize: "0.8rem" }}>catch some pokemon!</p>
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Pc;
