import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

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
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
};
