import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeCanvas } from "../../states/page";
import List from "../List/List";
import "./offcanvas.css";

const OffCanvas = () => {
  const team = useSelector((state) => state.pokemon.team);
  const canvas = useSelector((state) => state.page.canvas);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeCanvas());

  return (
    <>
      <Offcanvas
        show={canvas}
        onHide={handleClose}
        className="d-flex flex-column align-items-center"
        style={{
          background: "rgba(227,27,109,0.7)",
          color: "white",
          borderRight: "2px white solid",
        }}
      >
        <Offcanvas.Header>
          <button className="button-close-offcanvas" onClick={handleClose}>
            X
          </button>
          <h2 className="pokemon-font">Team</h2>
        </Offcanvas.Header>
        <Offcanvas.Body
          className={
            team.length > 0
              ? "w-100"
              : "w-100 d-flex flex-column align-items-center justify-content-center text-center"
          }
        >
          <div className="d-flex flex-column">
            {team.length > 0 ? (
              <List team={team} />
            ) : (
              <>
                <h2>Empty...</h2>
                <p style={{ fontSize: "0.8rem" }}>catch some pokemon!</p>
              </>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
