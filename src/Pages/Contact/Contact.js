import React, { useContext } from 'react';
import { FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { DarkModeContext } from '../../contexts/DarkModeProvider/DarkModeProvider';
import useTitle from '../../hooks/useTitle';

const Contact = () => {
    // custome title in the website
    useTitle('Contact Us');

    const { dark } = useContext(DarkModeContext);

    return (
        <div>
            <div className={`grid md:grid-cols-2 grid-cols-1 mt-12 ${dark ? 'text-white' : ''}`}>
                <div className='mx-3'>
                    <h1 className='text-3xl'>Contact us</h1>
                    <div className='divider mt-2 mb-5'></div>
                    <div className='flex items-center gap-2 mb-3'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <p>24/B, Railway Road, Bangladesh</p>
                    </div>
                    <div className='flex items-center gap-2 mb-3'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <p>+8801010101010</p>
                    </div>
                    <div className='flex items-center gap-2 mb-3'>
                        <FaPaperPlane></FaPaperPlane>
                        <p>cs-hub@email.com</p>
                    </div>
                    <div>
                        <textarea className="textarea textarea-bordered text-black lg:w-96 h-28 md:w-72 w-full mt-10" placeholder="write your message"></textarea>
                        <button className="btn-primary block content-end mt-2 border-2 rounded-xl px-6">Send</button>
                    </div>
                </div>
                <div className='md:mx-0 mx-3 md:mt-0 mt-14'>
                    <iframe className='md:h-96 w-full h-auto' id="gmap_canvas" src="https://maps.google.com/maps?q=dhaka%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div >
    );
};

export default Contact;