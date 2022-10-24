import Main from "../../layouts/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn/SignIn";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/courses', element: <PrivateRoute><Courses></Courses></PrivateRoute> },
            { path: '/signin', element: <SignIn></SignIn> },
            { path: '/signup', element: <SignUp></SignUp> },
        ]
    }
])