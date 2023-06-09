import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar />
            <h2 className="font-extrabold text-6xl">hello world</h2>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;