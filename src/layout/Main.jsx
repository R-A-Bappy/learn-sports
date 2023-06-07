import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/NavBar/NavBar";


const Main = () => {
    return (
        <div className="w-full md:w-11/12 mx-auto">
            <NavBar />
            <h2 className="font-extrabold text-6xl">hello world</h2>
            <Footer />
        </div>
    );
};

export default Main;