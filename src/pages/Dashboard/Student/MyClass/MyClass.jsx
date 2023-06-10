import { FaTrash } from "react-icons/fa";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";


const MyClass = () => {
    const [selectedClass] = useSelectedClasses();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedClass.map(data =>
                            <tr key={data._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{data.className}</td>
                                <td>{data?.instructorName}</td>
                                <td>{data.price}</td>
                                <th>
                                    <button className="btn btn-error btn-sm"><FaTrash /></button>
                                </th>
                                <th>
                                    <button className="btn btn-success btn-sm">Pay</button>
                                </th>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClass;