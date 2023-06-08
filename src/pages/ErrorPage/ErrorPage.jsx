
import { Link } from 'react-router-dom';
import img from '../../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className='relative'>
            <img src={img} alt="404 image" className='w-full h-screen' />
            <Link to='/' className='absolute right-4 md:right-80 bottom-64 md:bottom-52'><button className='btn btn-primary text-xl md:text-3xl px-12 md:px-24 pt-4 pb-12'>Go To Home</button></Link>
        </div>
    );
};

export default ErrorPage;