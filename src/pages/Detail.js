import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => props.bg === "#DC3545" ? "white" : "black"};
  padding: 10px;
  border: none;
  border-radius: 10px;
`;

export const Detail = (props) => {
  let { id } = useParams();
  let product = props.data.find((el) => el.id === +id);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              product.id + 1
            }.jpg`}
            width="100%"
            alt=""
          />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price.toLocaleString()}원</p>
          <Button bg="#DC3545">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};
