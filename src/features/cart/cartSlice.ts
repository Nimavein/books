import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../interfaces";

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookToCart: (state, action: PayloadAction<Book>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeBookFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addBookToCart, removeBookFromCart } = cartSlice.actions;

export default cartSlice.reducer;
