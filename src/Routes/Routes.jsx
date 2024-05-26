import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children: [
            {
              path: "/",
              element: <Home />,
              
            },
            {
              path: "/about",
              element: <About />,
              
            },
            {
              path: "/contact",
              element: <Contact />,
              
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
          
    }
])

export default router;