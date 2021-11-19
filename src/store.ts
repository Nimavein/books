import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from "../src/features/books/booksSlice";

export const store = configureStore({
  reducer: { books: booksReducer },
});

export const rootReducer = combineReducers({
  books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
