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
