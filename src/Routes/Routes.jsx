import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Roots";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
      },
    ],
  },
]);
export default router;
