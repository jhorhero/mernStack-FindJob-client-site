import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Erorr from "../Pages/Error/Erorr";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<Erorr/>,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/",
            element: <About />,
        }
      ]
    },
  ]);

  export default router