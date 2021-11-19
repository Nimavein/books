import { Container } from "react-bootstrap";
import Books from "./Books";

const Homepage: React.FC = () => {
  return (
    <Container className="mt-5">
      <Books />
    </Container>
  );
};

export default Homepage;
