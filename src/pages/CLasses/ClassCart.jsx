import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClasses from "../../hooks/useSelectedClasses";
import axios from "axios";



const ClassCart = ({ data }) => {
    const { user } = useContext(AuthContext);
    const { classImage, className, instructorName, price, seats, _id } = data;
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useSelectedClasses();
    const [userData, setUserData] = useState({});


    useEffect(() => {
        axios('https://learn-sports-server.vercel.app/users')
            .then(data => {
                const userData = data.data.find(data => data.email === user.email);
                setUserData(userData);
            })
    }, [user])

    console.log(userData);

    const handleSelected = () => {
        if (user && user.email) {
            const selectClass = {
                classId: _id,
                classImage,
                className,
                price,
                instructorName,
                email: user.email
            }
            fetch('https://learn-sports-server.vercel.app/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class Selected Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location });
                }
            })
        }
    }
    return (
        <div className={`card w-96 shadow-xl ${seats === 0 ? 'bg-red-500 text-white' : 'bg-base-100'}`}>
            <figure><img src={classImage} alt="Class Image" className="h-64 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Name: {className}</h2>
                <p>Instructor Name: {instructorName}</p>
                <div className="flex justify-between">
                    <p>Available Seats: {seats}</p>
                    <p className="text-right">Price: ${price}</p>
                </div>
                <div className="card-actions">
                    <button onClick={handleSelected} className="btn btn-primary w-full mt-8" disabled={seats === 0 || userData?.role === 'admin' || userData?.role === 'instructor'}>Selected</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCart;