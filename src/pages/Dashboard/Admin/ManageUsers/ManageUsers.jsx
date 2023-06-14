import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const response = await axios.get('https://learn-sports-server.vercel.app/users');
        return response.data;
    })

    const makeAdmin = user => {
        fetch(`https://learn-sports-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const makeInstructor = user => {
        fetch(`https://learn-sports-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Instructor now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="overflow-x-auto my-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user =>
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role ? user.role : 'Student'}</td>
                                <td><button disabled={user.role === 'admin' && true} onClick={() => makeAdmin(user)} className="btn btn-secondary btn-sm">Admin</button></td>
                                <td><button disabled={user.role === 'instructor' && true} onClick={() => makeInstructor(user)} className="btn btn-warning btn-sm">Instructor</button></td>
                            </tr>)
                    }

                    {/* row 2 */}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;