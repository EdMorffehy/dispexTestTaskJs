import Container from "../Container";

const Card = ({ children, ...styles }) => (
  <Container border={1} borderRadius={5} backgroundColor='#FFF' padding={1} {...styles}>
    {children}
  </Container>
);

export default Card;
