import { Card } from "react-bootstrap";
import { useState } from "react";
import FilmModal from "./FilmModal"

function FilmCard(props) {
  const [show, setShow] = useState(false);

  return (
    <>
    <Card
      className="bg-transparent border-0"
      onClick={() => setShow(true)}
      style={{ cursor: "pointer" }}
    >
      <Card.Img
        variant="top"
        src={props.film.Poster}
        style={{ height: "18rem", objectFit: "cover" }}
      />
    </Card>
    <FilmModal show={show} onHide={() => setShow(false)} film={props.film} />
    </>
  );
}

export default FilmCard;
