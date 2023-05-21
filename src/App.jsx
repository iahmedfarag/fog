import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AOS from "aos";
import Layout from "./pages/Layout.jsx";
import { Cart, Home, Login, ProductDetails, Register, Shop } from "./pages";
function App() {
  AOS.init();
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
