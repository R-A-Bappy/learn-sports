import axios from "axios";
import { useRef, useState } from "react";
import useAllClasses from "../../../../hooks/useAllClasses";



const ManageClasses = () => {
    const [classData, refetch] = useAllClasses();
    const [disabled, setDisabled] = useState(false);
    const formResetRef = useRef(null);
    let id = null;



    const handleApprove = (_id) => {
        axios.patch(`https://learn-sports-server.vercel.app/classes?id=${_id}&status=approve`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    setDisabled(!disabled);
                    refetch();
                }
            })

    }

    const handleDeny = (_id) => {
        axios.patch(`https://learn-sports-server.vercel.app/classes?id=${_id}&status=deny`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    setDisabled(!disabled);
                    refetch();
                }
            })
    }

    const handleShowModal = (id) => {
        const feedback = formResetRef.current.feedback.value;
        axios.patch(`https://learn-sports-server.vercel.app/classes?id=${id}`, { feedback })
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                }
            })
        formResetRef.current.reset();
    }

    const handleModal = (_id) => {
        window.my_modal_5.showModal();
        id = _id;
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
                                    <button disabled={data.status !== 'pending'} onClick={() => handleApprove(data._id)} className="btn btn-primary btn-xs">Approve</button>
                                </th>
                                <th>
                                    <button disabled={data.status !== 'pending'} onClick={() => handleDeny(data._id)} className="btn btn-warning btn-xs">Deny</button>
                                </th>
                                <th>
                                    {/* <button onClick={() => window.my_modal_5.showModal()} className="btn btn-info btn-xs">Feedback</button> */}
                                    <button onClick={() => handleModal(data._id)} className="btn btn-info btn-xs">Feedback</button>
                                    {/* <button onClick={handleShowModal} className="btn btn-info btn-xs">Feedback</button> */}
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <dialog id='my_modal_5' className="modal modal-bottom sm:modal-middle">
                <form ref={formResetRef} method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-8">Please Your Feedback</h3>
                    <textarea className="w-full" placeholder="please" name="feedback" id="" cols="30" rows="7"></textarea>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={() => handleShowModal(id)} className="btn btn-outline btn-success">Feedback</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;