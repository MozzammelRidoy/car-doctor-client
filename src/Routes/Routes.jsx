import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import Service from "../Pages/Service/Service";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path : '/service',
          element: <Service></Service>
        },
        {
          path: '/login', 
          element: <Login></Login>
        }, 
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }, 
        {
          path: '/checkout/:id',
          element: <Checkout></Checkout>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

  export default router; 