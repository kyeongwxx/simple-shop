import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';
import { Card } from './components/Card';
import data from './data';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { Event } from './pages/Event';
import { Button } from './components/Button';
import axios from 'axios';
import { createContext, useState } from 'react';
import { Cart } from './pages/Cart';

export const Context1 = createContext();

function App() {
  const [products, setProducts] = useState(data);
  const [clickCount, setClickCount] = useState(0);
  const [stock, setStock] = useState([10, 11, 12]);

  const navigate = useNavigate();
  const onClickMoveToHome = () => {
    navigate('/');
  };
  const onClickMoveToDetail = () => {
    navigate('/detail');
  };

  const fetchProducts = () => {
    let pageNumber;
    if (clickCount === 0) pageNumber = 2;
    if (clickCount === 1) pageNumber = 3;
    axios
      .get(`https://codingapple1.github.io/shop/data${pageNumber}.json`)
      .then((response) => {
        console.log(response.data);
        let copy = [...products, ...response.data];
        setProducts(copy);
      })
      .catch(() => {
        console.log('Error');
      });
  };

  let onClickCountUp = () => {
    setClickCount(clickCount + 1);
    console.log(clickCount);
  };

  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>SimpleShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={onClickMoveToHome}>Home</Nav.Link>
            <Nav.Link onClick={onClickMoveToDetail}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <Container>
                <Row>
                  {products.map((el, idx) => (
                    <Card el={el} idx={idx} key={idx} />
                  ))}
                </Row>
              </Container>
              {clickCount < 2 && (
                <Button
                  bg='#A9AF7E'
                  onClick={() => {
                    fetchProducts();
                    onClickCountUp();
                  }}
                >
                  ????????? ??????
                </Button>
              )}
            </>
          }
        />

        <Route
          path='/detail/:id'
          element={
            <Context1.Provider value={{stock}}>
              <Detail data={data} />
            </Context1.Provider>
          }
        />

        <Route path='/cart' element={<Cart />}/>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>??? ????????? ???????????? ?????????</div>} />
          <Route path='two' element={<div>???????????? ????????????</div>} />
        </Route>

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
