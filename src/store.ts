import { configureStore, combineReducers } from "@reduxjs/toolkit";
import booksReducer from "../src/features/books/booksSlice";
import cartReducer from "../src/features/cart/cartSlice";

export const store = configureStore({
  reducer: { books: booksReducer, cart: cartReducer },
});

export const rootReducer = combineReducers({
  books: booksReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
