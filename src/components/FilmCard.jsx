import { Card } from "react-bootstrap";

function FilmCard(props) {
  return (
    <Card className="bg-transparent border-0">
      <Card.Img
        variant="top"
        src={props.film.Poster}
        style={{ height: "18rem", objectFit: "cover" }}
      />
    </Card>
  );
}

export default FilmCard;
