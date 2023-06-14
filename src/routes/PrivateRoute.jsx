import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="h-96 flex justify-center items-center">
                <progress className="progress w-56"></progress>
            </div>
        )
    }


    if (user)
        return children;
    else {
        return < Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
};

export default PrivateRoute;