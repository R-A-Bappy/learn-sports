import Swal from 'sweetalert2'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from "react-hook-form";

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        const classData = {
            instructorName: data.instructorName,
            instructorEmail: data.instructorEmail,
            className: data.className,
            classImage: data.classImage,
            price: parseFloat(data.price),
            seats: parseInt(data.seats),
            status: 'pending',
        }
        fetch('https://learn-sports-server.vercel.app/instructor/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset();
                }
            })
    };
    return (
        <div className="font-['Poppins', sans-serif] flex justify-center items-center min-h-screen bg-emerald-400">
            <div className="relative w-11/12 md:w-5/6 pt-4 flex-col flex justify-center items-center bg-transparent border-2 border-[rgba(255,255,255,0.5)] rounded-2xl my-12">
                <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 md:w-5/6'>
                    <h2 className="text-3xl text-white text-center font-bold mb-16">Add Class</h2>
                    <div className='md:flex gap-16'>
                        <div className='w-full'>
                            <div className="relative my-8  border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text"  {...register("instructorName")} id='instructorName' defaultValue={user.displayName} required readOnly />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="instructorName">Instructor Name</label>
                            </div>
                            <div className="relative my-8  border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="email" {...register("instructorEmail")} id='instructorEmail' defaultValue={user.email} required readOnly />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="instructorEmail">Instructor Email</label>
                            </div>
                            <div className="relative my-8  border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" {...register("price")} id="price" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="price">Price</label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="relative my-8 border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" {...register("className")} id="name" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1  " htmlFor="name">Class Name</label>
                            </div>
                            <div className="relative my-8 border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" {...register("classImage")} id="photUrl" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1  " htmlFor="photoUrl">Class Image</label>
                            </div>
                            <div className="relative my-8  border-b-2 border-white">
                                <input className="w-full h-12 bg-transparent border-none outline-none pr-[35px] pl-[5px] text-white" type="text" {...register("seats")} id="quantity" required />
                                <label className="absolute left-1 -translate-y-1/2 text-white text-xs pointer-events-none duration-500 -top-1" htmlFor="quantity">Available Seat</label>
                            </div>
                        </div>
                    </div>
                    <input className="w-full btn mt-4 btn-secondary font-semibold text-lg mb-8" type="submit" value="Add Class" />
                </form>
            </div>
        </div>
    );
};

export default AddClass;


