import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Outlets/Home/Home";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }
])