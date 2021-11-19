import React, { useEffect } from "react";
import { Book } from "../../interfaces";
import { useDispatch } from "react-redux";
import { getBooks } from "../../features/books/booksSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BookComponent from "./Book";
import { Row } from "react-bootstrap";

const Books: React.FC = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Row className="pt-4 justify-content-md-start justify-content-center">
      {books?.map((book: Book) => {
        return <BookComponent key={book.id} {...book} />;
      })}
    </Row>
  );
};

export default Books;
