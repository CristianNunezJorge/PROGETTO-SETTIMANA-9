import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

function FilmModal(props) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ3ZTNkYWNjNzJlOTAwMTU0MzJhYzIiLCJpYXQiOjE3ODMwOTYyODIsImV4cCI6MTc4NDMwNTg4Mn0.8WZnys7OJ3OFtZZEOAYXiB3wpAzZm_YGKhg_ngcYwEc",
      },
      body: JSON.stringify({
        comment: comment,
        rate: rating,
        elementId: props.film.imdbID,
      }),
    });
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.film.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Check
            type="radio"
            name="rating"
            label="1"
            value="1"
            onChange={(event) => setRating(Number(event.target.value))}
          />
          <Form.Check
            type="radio"
            name="rating"
            label="2"
            value="2"
            onChange={(event) => setRating(Number(event.target.value))}
          />
          <Form.Check
            type="radio"
            name="rating"
            label="3"
            value="3"
            onChange={(event) => setRating(Number(event.target.value))}
          />
          <Form.Check
            type="radio"
            name="rating"
            label="4"
            value="4"
            onChange={(event) => setRating(Number(event.target.value))}
          />
          <Form.Check
            type="radio"
            name="rating"
            label="5"
            value="5"
            onChange={(event) => setRating(Number(event.target.value))}
          />
          <Form.Control
            as="textarea"
            placeholder="Scrivi un commento"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <Button type="submit">Invia</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default FilmModal;
