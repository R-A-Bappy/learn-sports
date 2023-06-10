import { useEffect, useState } from "react";



const ManageClasses = () => {
    const [classData, setClassData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructor/classes')
            .then(res => res.json())
            .then(data => setClassData(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
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
                                            <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{data.className}</td>
                                <td>{data.instructorName}</td>
                                <td>{data.instructorEmail}</td>
                                <td>{data.seats}</td>
                                <td>{data.price}</td>
                                <td>{data.status}</td>
                                <th>
                                    <button className="btn btn-primary btn-xs">Approve</button>
                                </th>
                                <th>
                                    <button className="btn btn-warning btn-xs">Deny</button>
                                </th>
                                <th>
                                    <button className="btn btn-info btn-xs">Feedback</button>
                                </th>
                            </tr>)
                    }
                    {/* row 1 */}

                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;