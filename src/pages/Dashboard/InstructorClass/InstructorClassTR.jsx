import { useEffect } from "react";
import { Link } from "react-router-dom";


const InstructorClassTR = ({ data }) => {
    useEffect(() => {
        fetch(``)
    }, [])
    return (
        <tr>
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
    );
};

export default InstructorClassTR;