import useInstructors from "../../../hooks/useInstructors";
import InstructorCart from "../../Instructor/InstructorCart";


const PopularInstructor = () => {
    const [instructorsAllData] = useInstructors();
    const instructorsData = instructorsAllData.splice(0, 6);
    return (
        <>
            <h2 className="text-4xl font-bold text-center  mt-24 mb-12">Popular <span className="text-orange-400">Instructor</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 my-8">
                {
                    instructorsData.map(data => <InstructorCart key={data._id} data={data} />)
                }
            </div>
        </>
    );
};

export default PopularInstructor;