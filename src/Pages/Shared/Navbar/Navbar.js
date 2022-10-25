import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleSignOut = () => {
        logOut().then(result => toast.success("Log out successfully."))
            .catch(error => console.error(error));
    }

    return (
        <div className={`navbar bg-success text-white ${open ? 'pb-28' : 'pb-4'}`}>
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-4xl font-bold text-red-700" to='/'><img className='w-12 h-auto' src={logo} alt="logo" /> CS~HUB</Link>
            </div>
            <div className='md:hidden mr-3' onClick={() => setOpen(!open)}>
                {
                    open ? <FaTimes className='w-5 h-10' /> : <FaBars className=' w-5 h-10' />
                }
            </div>
            <div className={`flex-none flex-wrap gap-2 md:w-auto w-80 md:static absolute duration-500 ease-in-out ${open ? 'top-14' : '-top-96'}`}>
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blogs'>Blog</Link></li>
                    {
                        user?.uid ?
                            <li onClick={handleSignOut}><Link>Sign Out</Link></li>
                            : <>
                                <li><Link to='/signin'>Sign In</Link></li>
                                <li><Link to='/signup'>Sign Up</Link></li>
                            </>
                    }
                </ul>
                <div className="dropdown dropdown-end">
                    {
                        user?.uid ?
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} title={user?.displayName} />
                                </div>
                            </label>
                            : <></>
                    }
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 text-black rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li onClick={handleSignOut}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;