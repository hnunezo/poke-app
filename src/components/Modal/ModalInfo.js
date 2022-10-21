import React from "react";
import Modal from "react-bootstrap/Modal";
import { setModal } from "../../states/page";
import { useDispatch, useSelector } from "react-redux";
import { firstLetter } from "../../services/GlobalFunctions";
import "./modal.css";

const ModalInfo = () => {
  const modal = useSelector((state) => state.page.modal);
  const pokemon = useSelector((state) => state.pokemon.selectedModal);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(setModal(false));
  return (
    <>
      <Modal
        show={modal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{firstLetter(pokemon.name)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-modal-container">
            <div className="d-flex justify-content-between align-items-center">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                className="modal-image"
              />
              <div className="stats-modal-container">
                <h2>BASE STATS</h2>
                <div>
                  {pokemon.stats.map((stat) => (
                    <p>
                      {stat.stat.name.toUpperCase()}: {stat.base_stat}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="body-modal-pokedex">
              <div className="header-body-modal">
                <div className="pokedex-number">
                  <p className="text-pokedex-number">POKEDEX N°</p>
                  <h2>#{pokemon.id}</h2>
                </div>
                <div className="pokedex-number">
                  <p className="text-pokedex-number">TYPE</p>
                  <h2 className="modal-types">
                    {pokemon.types.map((type, i) => (
                      <p key={i}>{type.type.name.toUpperCase()}</p>
                    ))}
                  </h2>
                </div>
              </div>

              <p>{pokemon.description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-modal" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInfo;
