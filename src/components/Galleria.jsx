import { Component } from "react";
import FilmCard from "./FilmCard";
import { Row, Col } from "react-bootstrap";


class Galleria extends Component {
  state = { film: [] };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=c40ad0b&s=${this.props.search}`)
      .then((response) => response.json())
      .then((dati) => this.setState({ film: dati.Search }));
  }
  render() {
    return (
      <>
        <h2>{this.props.search}</h2>
        <Row xs={2} md={4} xl={6} className="g-3" >
          {this.state.film.filter((a) => a.Poster !== "N/A").map((a) => (
            <Col key={a.imdbID}>
              <FilmCard film={a}  />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
export default Galleria;
