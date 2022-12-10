import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import { Card } from "./components/Card";
import data from "./data";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { Detail } from "./pages/Detail";

function App() {
  let navigate = useNavigate();
  let onClickMoveToHome = () => {
    navigate("/");
  };
  let onClickMoveToDetail = () => {
    navigate("/detail");
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SimpleShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={onClickMoveToHome}>Home</Nav.Link>
            <Nav.Link onClick={onClickMoveToDetail}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {data.map((el, idx) => (
                    <Card el={el} idx={idx} key={idx} />
                  ))}
                </Row>
              </Container>
            </>
          }
        />

        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
