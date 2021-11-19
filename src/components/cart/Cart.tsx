import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <Container>
      <Row className="pt-4 justify-content-md-start justify-content-center">
        {cart?.map((book) => {
          return <CartItem key={book.id} {...book} />;
        })}
      </Row>
    </Container>
  );
};

export default Cart;
