import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { DarkModeContext } from '../../../contexts/DarkModeProvider/DarkModeProvider';

const Footer = () => {
    const { dark } = useContext(DarkModeContext);

    return (
        // <div className='bg-gray-800 text-white text-center fixed w-full bottom-0 p-2'>
        //     <p className='container mx-auto'>&copy; 2022 - Developed by <a href="https://www.linkedin.com/in/ehsanulislamkhan/" target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none">Ehsan</a></p>
        // </div>
        <footer className={`footer footer-center p-8 bg-gray-800 text-white rounded ${dark ? 'bg-slate-800 shadow-2xl border-t-2 border-red-500' : 'bg-success'}`}>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/EhsanEIK" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6'></FaGithub></a>
                    <a href="https://www.linkedin.com/in/ehsanulislamkhan/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-6 h-6'></FaLinkedin></a>
                    <a href="https://www.facebook.com/ehsankhanEIK/" target="_blank" rel="noopener noreferrer"><FaFacebook className='w-6 h-6'></FaFacebook></a>
                </div>
            </div>
            <div>
                <p>&copy; 2022 - Designed and Developed by <a href="https://www.linkedin.com/in/ehsanulislamkhan/" target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none">Ehsan</a></p>
            </div>
        </footer>
    );
};

export default Footer;