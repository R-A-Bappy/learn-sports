import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";


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
                        classData.map(data =>
                            <tr key={data._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {data.className}
                                </td>
                                <td>{data.status}</td>
                                <td>{data.enrolledStudent || '0'}</td>
                                <td>{data.feedback || 'No Feedback'}</td>
                                <td><Link><button className="btn btn-secondary">Update</button></Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default InstructorClass;