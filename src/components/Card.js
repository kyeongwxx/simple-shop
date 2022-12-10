import { Col } from "react-bootstrap";

export const Card = (props) => {
  return (
    <Col sm={4}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.idx + 1}.jpg`}
        width="80%"
        alt=""
      />
      <h4>{props.el.title}</h4>
      <p>{props.el.content}</p>
      <p>{props.el.price.toLocaleString()}원</p>
    </Col>
  );
};
