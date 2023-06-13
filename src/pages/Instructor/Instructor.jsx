import InstructorCart from "./InstructorCart";
import useInstructors from "../../hooks/useInstructors";


const Instructor = () => {
    const [instructorAllData] = useInstructors();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 md:w-10/12 mx-auto my-8">
            {
                instructorAllData.map(data => <InstructorCart key={data._id} data={data} />)
            }
        </div>
    );
};

export default Instructor;