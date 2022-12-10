import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import { Card } from "./components/Card";
import data from "./data";


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SimpleShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {data.map((el, idx) => (
            <Card el={el} idx={idx} key={idx}/>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
