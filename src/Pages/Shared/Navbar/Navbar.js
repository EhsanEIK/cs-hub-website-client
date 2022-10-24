import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-success text-white">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-4xl font-bold text-red-700" to='/'><img className='w-12 h-auto' src={logo} alt="logo" /> CS~HUB</Link>
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blogs'>Blog</Link></li>
                    <li><Link to='/signin'>Sign In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;