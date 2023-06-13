import useInstructors from "../../../hooks/useInstructors";
import InstructorCart from "../../Instructor/InstructorCart";


const PopularInstructor = () => {
    const [instructorsAllData] = useInstructors();
    const instructorsData = instructorsAllData.splice(0, 6);
    return (
        <>
            <h2 className="text-4xl font-bold text-center  mt-24 mb-12">Popular <span className="text-orange-400">Classes</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mx-auto my-8">
                {
                    instructorsData.map(data => <InstructorCart key={data._id} data={data} />)
                }
            </div>
        </>
    );
};

export default PopularInstructor;