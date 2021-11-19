import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Book } from "../../interfaces";
import { removeBookFromCart } from "../../features/cart/cartSlice";

const CartItem: React.FC<Book> = (props) => {
  const dispatch = useDispatch();
  return (
    <Card className="p-0 m-3" style={{ width: "18rem" }}>
      <Card.Img src={props.cover_url} />
      <Card.Body className="d-flex flex-column">
        <Card.Title> {props.title}</Card.Title>
        <Card.Text>{props.author}</Card.Text>
        <Button
          className="mt-auto"
          onClick={() => dispatch(removeBookFromCart(props.id))}
          variant="danger"
        >
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
