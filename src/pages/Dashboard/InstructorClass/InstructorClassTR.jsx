import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const InstructorClassTR = ({ data }) => {
    const [enrollCount, setEnrollCount] = useState(0);
    useEffect(() => {
        fetch(`https://learn-sports-server.vercel.app/payments/enroll/${data._id}`)
            .then(res => res.json())
            .then(data => setEnrollCount(data.result))
    }, [data])
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
            <td>{enrollCount}</td>
            <td>{data.status === 'deny' && data?.feedback}</td>
            <td><Link><button className="btn btn-secondary">Update</button></Link></td>
        </tr>
    );
};

export default InstructorClassTR;