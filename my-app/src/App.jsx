// import "./App.css";
import Cart from "./features/cart/cart";
import Menu, { menuLoader } from "./features/menu/Menu";
import CreateOrder, { createAction } from "./features/orders/CreateOrder";
import Order, { orderLoader } from "./features/orders/Order";
import AppLayout from "./features/ui/AppLayout";
import Home from "./features/ui/Home";
import Error from "./features/ui/Error";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <CreateOrder />,
        action: createAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
