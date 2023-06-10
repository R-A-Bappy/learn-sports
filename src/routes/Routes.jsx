import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorClass from "../pages/Dashboard/InstructorClass/InstructorClass";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Classes from "../pages/CLasses/Classes";
import MyClass from "../pages/Dashboard/Student/MyClass/MyClass";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'addClass',
                element: <AddClass />
            },
            {
                path: 'instructorClass',
                element: <InstructorClass />
            },
            {
                path: 'manageClass',
                element: <ManageClasses />
            },
            {
                path: 'myClass',
                element: <MyClass />
            }
        ]
    }
]);

export default router;