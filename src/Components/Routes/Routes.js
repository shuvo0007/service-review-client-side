import { createBrowserRouter } from "react-router-dom";
import AllCategories from "../Layouts/Outlets/AllCategories/AllCategories";
import Home from "../Layouts/Outlets/Home/Home";
import Main from "../Layouts/Outlets/Main/Main";
import Login from "../Layouts/Outlets/Login/Login";
import Registration from "../Layouts/Outlets/Registration/Registration";
import CardDetails from "../Layouts/Outlets/CardDetails/CardDetails";
import Blogs from "../Layouts/Outlets/Blogs/Blogs";
import Private from "../Layouts/Outlets/Private/Private";
import MyReviews from "../Layouts/Outlets/MyReviews/MyReviews";

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
      {
        path: "/category/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/private/:id",
        element: (
          <Private>
            <CardDetails></CardDetails>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/private/myReviews",
        element: (
          <Private>
            <MyReviews></MyReviews>
          </Private>
        ),
      },
    ],
  },
]);
