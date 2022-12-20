import { useEffect, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { TabContent } from '../components/TabContent';

export const Detail = (props) => {
  let { id } = useParams();
  let product = props.data.find((el) => el.id === +id);

  let [sale, setSale] = useState(true);
  let [tabContent, setTabContent] = useState(0);
  const [scale, setScale] = useState('');

  useEffect(() => {
    let timer = setInterval(() => {
      setSale(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setScale('scale-end');
    }, 100);

    return () => {
      clearTimeout(timer);
      setScale('');
    };
  }, [props.tabContent]);

  return (
    <Container className={`scale-start ${scale}`}>
      {sale && <div className='alert alert-warning'>2초이내 구매시 할인</div>}
      <Row>
        <Col md={6}>
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              product.id + 1
            }.jpg`}
            width='100%'
            alt=''
          />
        </Col>
        <Col md={6}>
          <h4 className='pt-5'>{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price.toLocaleString()}원</p>
          <Button bg='#DC3545'>주문하기</Button>
        </Col>
      </Row>

      <Nav variant='tabs' defaultActiveKey='link-0'>
        <Nav.Item>
          <Nav.Link eventKey='link-0' onClick={() => setTabContent(0)}>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1' onClick={() => setTabContent(1)}>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2' onClick={() => setTabContent(2)}>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tabContent={tabContent}/>
    </Container>
  );
};
