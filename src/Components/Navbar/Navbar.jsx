import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const navLinks = <>

        <li><NavLink to='/' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'font-bold text-red-600 bg-yellow-400 underline' : ''}>Home</NavLink></li>
        <li><NavLink to='/profile' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'font-bold text-red-600 bg-yellow-400 underline' : ''}>Profile</NavLink></li>
        <li><NavLink to='/hired' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'font-bold text-red-600 bg-yellow-400 underline' : ''}>Hired Services</NavLink></li>

    </>

    const handleLogout = () => {
        logOut()
        .then(() => {
            swal('See ya','User logged out successfully', 'success')
        })
        .catch(err => {
            swal('Ooops!', err.message, 'error')
        })
    }

    return (
        <div className="navbar shadow-2xl fixed top-0 z-50 bg-opacity-80 bg-blue-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">TECH-GAMING</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    // user ? <div className="dropdown dropdown-end">
                    //     <label tabIndex={0} className="btn btn-ghost rounded-btn">
                    //         <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full"/>
                    //     </label>
                    //     <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    //         <li>{user.email}</li>
                    //         <li><button onClick={handleLogout} className="p-2 rounded-md bg-slate-700">Logout</button></li>
                    //     </ul>
                    // </div>

                    user ? <div className="flex flex-col md:flex-row gap-2 items-center">
                        <div className="flex gap-1 items-center border rounded-l-full rounded-r-full p-1">
                            <img src={user.photoURL} alt="" className="w-10 h-10 rounded-full" />
                            <h4 className="text-sm md:text-xl font-bold">{user.displayName}</h4>
                        </div>
                        <div>
                            <button onClick={handleLogout} className="px-2 py-1 text-white text-sm font-bold rounded-md bg-orange-400 ">Logout</button>
                        </div>
                    </div>
                    : <Link to='/login'><button className=" p-2 rounded-md btn-accent">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;