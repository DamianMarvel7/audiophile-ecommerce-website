import Nav from "./components/Nav";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Speakers from "./pages/Speakers";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "headphones",
        element: <Headphones />,
      },
      {
        path: "speakers",
        element: <Speakers />,
      },
      {
        path: "earphones",
        element: <Earphones />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: ":id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
