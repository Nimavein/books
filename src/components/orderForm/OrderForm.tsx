import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import { Form, Button, Container } from "react-bootstrap";
import { NewOrder, Order } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { Book } from "../../interfaces";

const OrderForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [order, setOrder] = useState<any>([]);
  const { cart } = useSelector((state: RootState) => state.cart);
  const [isSuccessfullySubmited, setIsSuccessfullySubmited] =
    useState<boolean>(false);

  useEffect(() => {
    const orderedItems: Order[] = cart.map((book: Book) => {
      return {
        id: book.id,
        quantity: 1,
      };
    });
    setOrder(orderedItems);
  }, []);

  useEffect(() => {
    let submitSuccessfulTimer = setTimeout(
      () => setIsSuccessfullySubmited(false),
      3000
    );
    return () => {
      clearTimeout(submitSuccessfulTimer);
    };
  }, [isSuccessfullySubmited]);

  const { mutate } = useMutation(async (newOrder: NewOrder) => {
    await axios
      .post("http://localhost:3001/api/order", {
        order: order,
        first_name: newOrder.first_name,
        last_name: newOrder.last_name,
        city: newOrder.city,
        zip_code: newOrder.zip_code,
      })
      .catch(function (error) {
        alert(`Could not send data: ${error.message}`);
      });
  });

  const onFormSubmit = (data: NewOrder) => {
    mutate(data);
    setIsSuccessfullySubmited(true);
  };

  return (
    <Container>
      <Form className="mt-5" onSubmit={handleSubmit(onFormSubmit)}>
        <h3 className="mb-3">Submit your order</h3>
        <Form.Group className="mb-3" controlId="first_name">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            {...register("first_name")}
            minLength={4}
            required
            name="first_name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            {...register("last_name")}
            minLength={5}
            required
            name="last_name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city name"
            {...register("city")}
            required
            name="city"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="zip_code">
          <Form.Label>ZIP</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ZIP code"
            {...register("zip_code")}
            required
            name="zip_code"
            pattern="[0-9]{2}-[0-9]{3}"
          />
        </Form.Group>

        <Button
          variant={isSuccessfullySubmited ? "success" : "primary"}
          type="submit"
        >
          {isSuccessfullySubmited ? "ORDERED SUCCESSFULLY" : "ORDER AND PAY"}
        </Button>
      </Form>
    </Container>
  );
};

export default OrderForm;
