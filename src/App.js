import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./App.css";
import { Card } from "./components/Card";
import data from "./data";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Event } from "./pages/Event";
import { Button } from "./components/Button";
import axios from "axios";
import { useState } from "react";

function App() {
  let [products, setProducts] = useState(data);

  let navigate = useNavigate();
  let onClickMoveToHome = () => {
    navigate("/");
  };
  let onClickMoveToDetail = () => {
    navigate("/detail");
  };

  let fetchProducts = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((response) => {
        let copy = [...products, ...response.data]
        setProducts(copy)
      })
      .catch(() => {
        console.log("Error");
      });
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
                  {products.map((el, idx) => (
                    <Card el={el} idx={idx} key={idx} />
                  ))}
                </Row>
              </Container>
              <Button bg="#A9AF7E" onClick={fetchProducts}>
                데이터 요청
              </Button>
            </>
          }
        />

        <Route path="/detail/:id" element={<Detail products={products} />} />

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
