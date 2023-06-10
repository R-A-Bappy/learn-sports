import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorClass from "../pages/Dashboard/InstructorClass/InstructorClass";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
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
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/addClass',
                element: <AddClass />
            },
            {
                path: '/dashboard/instructorClass',
                element: <InstructorClass />
            },
            {
                path: '/dashboard/manageClass',
                element: <ManageClasses />
            }
        ]
    }
]);

export default router;