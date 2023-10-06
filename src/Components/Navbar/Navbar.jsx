import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const navLinks = <>

        <li><NavLink to='/' className={({isActive, isPending}) => isPending? 'pending': isActive? 'font-bold text-red-600 bg-yellow-400 underline' : ''}>Home</NavLink></li>
        <li><NavLink to='/profile' className={({isActive, isPending}) => isPending? 'pending': isActive? 'font-bold text-red-600 bg-yellow-400 underline' : ''}>Profile</NavLink></li>
        <li><NavLink to='/about' className={({isActive, isPending}) => isPending? 'pending': isActive? 'font-bold text-red-600 bg-yellow-400 underline' : ''}>About</NavLink></li>

    </>

    return (
        <div className="navbar shadow-2xl">
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
                <Link to='/login'><button className=" p-2 rounded-md bg-slate-700">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;