import { FaTrash } from "react-icons/fa";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import Swal from "sweetalert2";


const MyClass = () => {
    const [selectedClass, refetch] = useSelectedClasses();

    const handleDelete = data => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClass/${data._id}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <h2 className="font-bold text-3xl text-center underline my-8">Total Classes: {selectedClass.length}</h2>
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
                                    <button onClick={() => handleDelete(data)} className="btn btn-ghost bg-red-500 btn-sm "><FaTrash /></button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost bg-green-600 btn-sm">Pay</button>
                                </th>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyClass;