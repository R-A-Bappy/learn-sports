import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import InstructorClassTR from "./InstructorClassTR";

const InstructorClass = () => {
    const { user } = useContext(AuthContext);
    const [classData, setClassData] = useState([]);
    console.log(user.email)

    useEffect(() => {
        fetch(`https://learn-sports-server.vercel.app/instructor/classes/${user.email}`)
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [user.email])
    return (
        <>
            <h2 className="text-3xl font-bold text-center my-4 mb-8">Instructor Classes</h2>
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
        </>
    );
};

export default InstructorClass;