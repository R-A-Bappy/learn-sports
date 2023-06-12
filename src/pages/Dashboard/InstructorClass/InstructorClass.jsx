import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import InstructorClassTR from "./InstructorClassTR";


const InstructorClass = () => {
    const { user } = useContext(AuthContext);
    const [classData, setClassData] = useState([]);
    console.log(user.email)

    useEffect(() => {
        fetch(`http://localhost:5000/instructor/classes/${user.email}`)
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [user.email])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Enrolled Students</th>
                        <th>Feedback</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classData.map(data => <InstructorClassTR key={data._id} data={data} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default InstructorClass;