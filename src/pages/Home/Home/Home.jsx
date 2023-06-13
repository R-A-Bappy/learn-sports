import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto">
            <Banner />
            <PopularClasses />
            <PopularInstructor />
        </div>
    );
};

export default Home;