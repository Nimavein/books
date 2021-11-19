import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BooksState } from "../../interfaces";
import { Book } from "../../interfaces";

const initialState: BooksState = {
  books: [],
  status: null,
};

export const getBooks: any = createAsyncThunk("books/getBooks", async () => {
  return axios
    .get("http://localhost:3001/api/book")
    .then((res) => res.data.data);
});

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state: BooksState, action: PayloadAction<Book[]>) => {
      state.status = "loading";
    },
    [getBooks.fulfilled]: (
      state: BooksState,
      action: PayloadAction<Book[]>
    ) => {
      state.books = action.payload;
      state.status = "success";
    },
    [getBooks.rejected]: (state: BooksState, action: PayloadAction<Book[]>) => {
      state.status = "failed";
    },
  },
});

export default booksSlice.reducer;
