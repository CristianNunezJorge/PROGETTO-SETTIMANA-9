import MyNavbar from "./components/MyNavbar";
import Galleria from "./components/Galleria";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <MyNavbar />
        <Container fluid>
          <Galleria search="Harry potter" />
          <Galleria search="Fast and Furious" />
          <Galleria search="Hunger Games" />
        </Container>
      </div>
    </>
  );
}

export default App;
