import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";


const PaymentHistory = () => {
    const { user } = useAuth();
    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/payments/${user.email}`);
            const data = res.json();
            return data;
        }
    })
    console.log(paymentHistory)
    return (
        <>
            <h2 className="text-3xl font-bold text-center my-8">Payment History</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Payment Status</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map(data =>
                                <tr key={data._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data?.classData?.classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{data?.classData?.className}</td>
                                    <td>{data?.classData?.instructorName}</td>
                                    <td>{data?.status}</td>
                                    <td>{data?.price}</td>
                                </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </>
    );
};

export default PaymentHistory;