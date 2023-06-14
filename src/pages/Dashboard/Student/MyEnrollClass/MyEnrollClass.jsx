import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";


const MyEnrollClass = () => {
    const { user } = useAuth();
    const { data: myEnrollClassData = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await fetch(`https://learn-sports-server.vercel.app/payments/${user.email}`);
            const data = res.json();
            return data;
        }
    })
    console.log(myEnrollClassData)

    return (
        <>
            <h2 className="text-3xl font-bold text-center my-8">My Enrolled Class</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEnrollClassData.map(data =>
                                <tr key={data._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data?.classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{data?.className}</td>
                                    <td>{data?.instructorName}</td>
                                    <td>{data?.status}</td>
                                </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </>
    );
};

export default MyEnrollClass;