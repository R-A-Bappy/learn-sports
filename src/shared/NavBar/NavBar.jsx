import { NavLink } from "react-router-dom";


const NavBar = () => {
    const user = false;
    return (
        <div className="navbar bg-base-100 justify-between w-11/12 md:w-10/12 mx-auto">
            <div className="w-1/2">
                <h2 className="text-2xl lg:text-4xl font-bold">LEARN <span className="text-orange-400">SPORTS</span></h2>
            </div>
            <div className="w-1/2 flex justify-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 p-2 shadow bg-base-200 rounded-box w-52 text-lg font-semibold">
                        <li className="text-gray-500">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Home</NavLink>
                        </li>
                        <li className="text-gray-500">
                            <NavLink to="/instructors" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Instructors</NavLink>
                        </li>
                        <li className="text-gray-500">
                            <NavLink to="/classes" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Classes</NavLink>
                        </li>
                        {
                            user ?
                                <><li className="text-gray-500">
                                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Dashboard</NavLink>
                                </li>
                                    <li>
                                        <label className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </label>
                                    </li></> :
                                <li className="text-gray-500">
                                    <NavLink to="/login" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Login</NavLink>
                                </li>
                        }
                    </ul>
                </div>
                <div className="hidden lg:flex lg:justify-end">
                    <ul className="menu menu-horizontal px-1 items-center text-lg font-semibold">
                        <li className="text-gray-500">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Home</NavLink>
                        </li>
                        <li className="text-gray-500">
                            <NavLink to="/instructors" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Instructors</NavLink>
                        </li>
                        <li className="text-gray-500">
                            <NavLink to="/classes" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Classes</NavLink>
                        </li>
                        {
                            user ?
                                <>
                                    <li className="text-gray-500">
                                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Dashboard</NavLink>
                                    </li>
                                    <li>
                                        <label className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </label>
                                    </li>

                                </> : <li className="text-gray-500">
                                    <NavLink to="/login" className={({ isActive }) => isActive ? "text-gray-800" : ""}>Login</NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;