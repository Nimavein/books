import React, { useEffect } from "react";
import { Book } from "../../interfaces";
import { useDispatch } from "react-redux";
import { getBooks } from "../../features/books/booksSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      {books?.map((book: Book) => {
        return <>{book.title}</>;
      })}
    </>
  );
};

export default Books;
