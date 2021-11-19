import { Container, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Book } from "../../interfaces";

const Cart: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart);

  const cartTotalValue: number = cart.reduce(
    (acc: any, obj: any) => acc + obj.price,
    0
  );

  return (
    <Container className="mt-5 d-flex flex-column">
      {cart.length > 0 ? (
        <>
          <Row className="pt-4 justify-content-md-start justify-content-center">
            {cart?.map((book) => {
              return <CartItem key={book.id} {...book} />;
            })}
          </Row>
          {cart.length > 0 && (
            <>
              <h5 className="ms-auto">{`Cart total value: ${cartTotalValue} PLN`}</h5>
              <hr />
              <Link className="ms-auto w-50" to="/order">
                <Button className="mb-4 w-100">CONTINUE</Button>
              </Link>
            </>
          )}
        </>
      ) : (
        <Container className="d-flex justify-content-center mt-5 flex-column text-center">
          <h3 className="mb-4">Your cart is empty</h3>
          <Link to="/">
            <Button className="w-50">GO TO SHOP</Button>
          </Link>
        </Container>
      )}
    </Container>
  );
};

export default Cart;
