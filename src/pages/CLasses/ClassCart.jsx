import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const ClassCart = ({ data }) => {
    const { user } = useContext(AuthContext);
    const { classImage, className, instructorName, price, seats } = data;
    const navigate = useNavigate();

    const handleSelected = () => {
        if (user) {
            fetch('http://localhost:5000/selectedClass')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
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
                    navigate('/login');
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={classImage} alt="Class Image" className="h-64 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Name: {className}</h2>
                <p>Instructor Name: {instructorName}</p>
                <div className="flex justify-between">
                    <p>Available Seats: {seats}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleSelected} className="btn btn-primary">Selected</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCart;