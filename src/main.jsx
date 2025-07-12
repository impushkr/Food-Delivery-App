import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import AllRestaurants from "./components/AllRestaurants.jsx";
import Menu from "./components/Menu.jsx";
import Cart from "./components/Cart.jsx";
import Front from "./components/Main-Page/Front.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { RestaurantsProvider} from "./context/RestaurantsContext.jsx"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Front/>,
    errorElement:<Error/>
   
  },
  {
    path: "restaurants",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllRestaurants />,
      },
      {
        path: "restaurants/:restaurantsID",
        element: <Menu />,
      },
    ],
  },
  { 
    path: "cart",
    element: <Cart /> }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RestaurantsProvider>
      <CartProvider>
        <RouterProvider router={appRouter} />
      </CartProvider>
    </RestaurantsProvider>
  </StrictMode>
);
