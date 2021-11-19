export interface Book {
  title: string;
}

export interface Route {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  cover_url: string;
  pages: number;
  price: number;
  currency: string;
}

export interface BooksState {
  books: Book[] | undefined;
  status: string | null;
}

export interface CartState {
  cart: Book[];
}
