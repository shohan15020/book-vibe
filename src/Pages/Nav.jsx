import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div >
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Home</NavLink></li>

                            <li><NavLink to="/listed" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Listed Books</NavLink></li>

                            <li><NavLink to="/page" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Pages to Read</NavLink></li>

                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Contact</NavLink></li>

                            <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>FAQ</NavLink></li>
                        </ul>
                    </div>
                    <a className="text-xl md:text-3xl font-bold">Book<span className="text-[#23BE0A]">S</span>hop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#131313CC] flex gap-4">

                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Home</NavLink></li>

                        <li><NavLink to="/listed" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Listed Books</NavLink></li>

                        <li><NavLink to="/page" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Pages to Read</NavLink></li>

                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Contact</NavLink></li>

                        <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>FAQ</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <button className="font-bold text-white text-lg md:text-xl md:py-4 md:px-6 py-1 px-2 rounded-lg bg-[#23BE0A]">Sign In</button>

                    <button className="font-bold text-white text-lg md:text-xl md:py-4 md:px-6 py-1 px-2 rounded-lg bg-[#59C6D2]">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;