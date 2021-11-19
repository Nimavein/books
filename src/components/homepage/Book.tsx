import React, { useState, useEffect } from "react";
import { Book } from "../../interfaces";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookToCart } from "../../features/cart/cartSlice";
import { RootState } from "../../store";

const BookComponent: React.FC<Book> = (props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [isAlreadyInCart, setIsAlreadyInCart] = useState<boolean>(false);

  useEffect(() => {
    const thisBookInCart: any = cart.find((book) => book.id === props.id);
    setIsAlreadyInCart(thisBookInCart);
    if (isAlreadyInCart) {
      setIsButtonDisabled(true);
    }
  }, [cart, props.id, isAlreadyInCart]);

  const handleAddBookToCart = () => {
    dispatch(addBookToCart(props));
  };
  return (
    <Card className="m-2 p-0" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.cover_url} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.author}</Card.Text>
        <Card.Text>{`Pages: ${props.pages}`}</Card.Text>
        <Card.Text>{`${props.price} ${props.currency} `}</Card.Text>
        <Button
          className="mt-auto"
          disabled={isButtonDisabled}
          variant="primary"
          onClick={handleAddBookToCart}
        >
          {isButtonDisabled ? "ALREADY ADDED" : "ADD TO CART"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookComponent;
