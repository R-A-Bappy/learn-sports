import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaRegEye } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { loginUser, handleGithubProvider, handleGoogleProvider } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();
                navigate(from);
            })
            .catch(error => {
                showPassword(true);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Login Successfully\n${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                reset();

            })

    }

    const handleProviderGithub = () => {
        handleGithubProvider()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photoURL: loggedUser.photoURL, role: 'student' }
                fetch('https://learn-sports-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                navigate('/login');
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Login Successfully\n${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })

            })
    }

    const handleProviderGoogle = () => {
        handleGoogleProvider()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photoURL: loggedUser.photoURL, role: 'student' }
                fetch('https://learn-sports-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Login Unsuccessfully\n${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }


    return (
        <div className="mx-auto w-full md:w-2/6">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                            <p className='text-red-600'>{errors.email && <span>This field is required</span>}</p>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={showPassword ? "password" : "text"} {...register("password", { required: true })} placeholder="password" name='password' className="input input-bordered w-full" />
                                <label onClick={() => setShowPassword(!showPassword)}><FaRegEye className='absolute bottom-4 right-2'></FaRegEye></label>
                            </div>
                            <p className='text-red-600'>{errors.password && <span>This field is required</span>}</p>
                            <label className="label">
                                <p className=''>If you new please! <Link className='btn-link no-underline' to="/register">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
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

export default Login;