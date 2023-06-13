import axios from "axios";
import { useEffect, useState } from "react";
import InstructorCart from "./InstructorCart";


const Instructor = () => {
    const [instructorAllData, setInstructorAllData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(data => {
                const instructorData = data.data.filter(d => d.role === 'instructor');
                setInstructorAllData(instructorData);
            })
    }, [])
    console.log(instructorAllData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 md:w-10/12 mx-auto my-8">
            {
                instructorAllData.map(data => <InstructorCart key={data._id} data={data} />)
            }
        </div>
    );
};

export default Instructor;