import axios from "axios";
import { useState } from "react";
import useAllClasses from "../../../../hooks/useAllClasses";



const ManageClasses = () => {
    const [classData, refetch] = useAllClasses();
    const [disabled, setDisabled] = useState(false);


    const handleApprove = (_id) => {
        axios.patch(`http://localhost:5000/classes?id=${_id}&status=approve`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    setDisabled(true);
                    refetch();
                }
            })

    }

    const handleModal = _id => {
        return (<dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Please Feedback</h3>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </div>
            </form>
        </dialog>)
    }
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
                                            <img src={data.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{data.className}</td>
                                <td>{data.instructorName}</td>
                                <td>{data.instructorEmail}</td>
                                <td>{data.seats}</td>
                                <td>${data.price}</td>
                                <td>{data.status}</td>
                                <th>
                                    <button disabled={disabled || data.status !== 'pending'} onClick={() => handleApprove(data._id)} className="btn btn-primary btn-xs">Approve</button>
                                </th>
                                <th>
                                    <button disabled={disabled || data.status !== 'pending'} className="btn btn-warning btn-xs">Deny</button>
                                </th>
                                <th>
                                    <button onClick={() => window.my_modal_5.showModal()} className="btn btn-info btn-xs">Feedback</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <dialog id='my_modal_5' className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Please Feedback</h3>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;