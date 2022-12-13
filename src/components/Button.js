import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === "#DC3545" ? "white" : "black")};
  padding: 10px;
  border: none;
  border-radius: 10px;
`;
