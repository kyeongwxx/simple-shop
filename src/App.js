import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import { Card } from "./components/Card";
import data from "./data";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Event } from "./pages/Event";

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

        <Route path="/detail/:id" element={<Detail data={data}/>} />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
