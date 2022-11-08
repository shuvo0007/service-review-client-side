import { createBrowserRouter } from "react-router-dom";
import AllCategories from "../Layouts/Outlets/AllCategories/AllCategories";
import Home from "../Layouts/Outlets/Home/Home";
import Main from "../Layouts/Outlets/Main/Main";
import Login from "../Layouts/Outlets/Login/Login";
import Registration from "../Layouts/Outlets/Registration/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch(`http://localhost:5000/category`),
      },
      {
        path: "/allCategories",
        element: <AllCategories></AllCategories>,
        loader: () => fetch(`http://localhost:5000/category`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
