import CourseLayout from "../../layouts/CourseLayout";
import Main from "../../layouts/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Description from "../../Pages/Courses/Description/Description";
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
            {
                path: '/courses',
                element: <CourseLayout></CourseLayout>,
                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('https://cs-hub-server.vercel.app/courses'),
                        element: <Courses></Courses>,
                    },
                    {
                        path: '/courses/description/:id',
                        loader: ({ params }) => fetch(`https://cs-hub-server.vercel.app/courses/${params.id}`),
                        element: <PrivateRoute><Description></Description></PrivateRoute>
                    }
                ]
            },
            { path: '/signin', element: <SignIn></SignIn> },
            { path: '/signup', element: <SignUp></SignUp> },
        ]
    }
])