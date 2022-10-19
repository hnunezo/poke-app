import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeCanvas } from "../../states/page";
import List from "../List/List";

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
          <button
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              position: "absolute",
              right: "0.5rem",
              top: "0.1rem",
              backgroundColor: "transparent",
              color: "white",
              border: "none",
            }}
            onClick={handleClose}
          >
            X
          </button>
          <h2>Team</h2>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ width: "100%" }}>
          <div className="d-flex flex-column">
            {team.length > 0 ? (
              <List team={team} />
            ) : (
              <p style={{ color: "white" }}>team</p>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
