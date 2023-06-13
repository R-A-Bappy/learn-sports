import Banner from "../Banner/Banner";
import OurFacilities from "../OurFacilities/OurFacilities";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div className="w-full md:w-10/12 mx-auto">
            <Banner />
            <PopularClasses />
            <PopularInstructor />
            <OurFacilities />
        </div>
    );
};

export default Home;