import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { FaRegEye } from 'react-icons/fa'

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { createUser, handleGithubProvider, handleGoogleProvider, profileUpdate } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    console.log(errors);

    const onSubmit = data => {

        const name = data.name;
        const photoUrl = data.photoUrl;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        setError("");
        setSuccess("");
        if (password !== confirmPassword) {
            setError("Password not matching");
            setShowPassword(true);
            reset();
            return;
        }
        console.log(data)
        createUser(email, password)
            .then(result => {
                setShowPassword(true);
                const loggedUser = result.user;
                console.log(loggedUser);
                profileUpdate(name, photoUrl)
                    .then(() => {
                        const saveUser = { name, email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Register Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from);
                                }
                            })
                    })
                    .catch(error => setError(error.message))
            })
            .catch(error => {
                setShowPassword(true);
                setError(error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Register Unsuccessfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const handleProviderGithub = () => {
        setError("");
        handleGithubProvider()
            .then(() => {
                setShowPassword(true);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Register Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from);
            })
            .catch(error => {
                setShowPassword(true);
                setError(error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Register Unsuccessfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
    }

    const handleProviderGoogle = () => {
        setSuccess("");
        setError("");
        handleGoogleProvider()
            .then(() => {
                setShowPassword(true);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Register Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from);
            })
            .catch(error => {
                setShowPassword(true);
                setError(error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Register Unsuccessfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div className="mx-auto w-full md:w-2/6">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <p className='text-red-600'>{error && <span>{error}</span>}</p>
                        <p className='text-green-600'>{success && <span>{success}</span>}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" name='name' className="input input-bordered" />
                            <p className='text-red-600'>{errors.name && <span>This field is required</span>}</p>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                            <p className='text-red-600'>{errors.email && <span>This field is required</span>}</p>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo URL" name='photoUrl' className="input input-bordered" />
                            <p className='text-red-600'>{errors.photoUrl && <span>This field is required</span>}</p>

                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div className='relative'>
                                <input type={showPassword ? "password" : "text"} {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/ })} placeholder="Password" name='password' className="input input-bordered w-full" />
                                <button onClick={() => setShowPassword(!showPassword)}><FaRegEye className='absolute bottom-4 right-2'></FaRegEye></button>
                            </div>
                            <p className='text-red-600'>{errors.password?.type === "pattern" && "Please given minimum six character one capital letter and one special letter"}</p>
                            <p className='text-red-600'>{errors.password?.type === "required" && <span>This field is required</span>}</p>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm Password" name='confirmPassword' className="input input-bordered" />
                            <p className='text-red-600'>{error && <span>{error}</span>}</p>
                            <p className='text-red-600'>{errors.confirmPassword && <span>This field is required</span>}</p>

                            <label className="label">
                                <p className=''>You already register please! <Link className='btn-link' to="/login">Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                    </form>
                    <div className='flex justify-center items-center gap-1 mb-6'>
                        <p className='w-1/6 border-t border-gray-400'></p>
                        <p className='text-gray-400'>or use one of these options</p>
                        <p className='w-1/6 border-t border-gray-400'></p>
                    </div>
                    <div className='flex gap-12 justify-center mb-6'>
                        <button onClick={handleProviderGoogle} className="bg-base-200 rounded">
                            <img className='w-28' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                        </button>
                        <button onClick={handleProviderGithub} className="bg-base-200 rounded w-28 flex justify-center items-center p-4">
                            <img className='w-24' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;