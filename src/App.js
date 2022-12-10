import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";

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
          <Col sm={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
