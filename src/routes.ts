import { Route } from "./interfaces";
import Homepage from "./components/homepage/Homepage";
import Cart from "./components/cart/Cart";
import OrderForm from "./components/orderForm/OrderForm";

const routes: Route[] = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
    exact: true,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    exact: true,
  },
  {
    path: "/add",
    name: "Creation Subpage",
    component: OrderForm,
    exact: true,
  },
];

export default routes;
