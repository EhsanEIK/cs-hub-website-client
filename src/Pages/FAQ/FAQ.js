import React, { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeProvider/DarkModeProvider';
import './FAQ.css';

const FAQ = () => {
    const { dark } = useContext(DarkModeContext);

    return (
        <div className='faq-container mx-auto mt-12'>
            <div>
                <h1 className={`md:text-4xl text-3xl text-center ${dark ? 'text-white' : ''}`}>Frequenty Asked Questions</h1>
                <div className='divider mt-2 mb-5'></div>
                <div className='bg-slate-200 rounded-lg p-5 mt-5'>
                    <p className='text-xl font-bold mb-2'>1. Is this course are authentic?</p>
                    <p className='text-lg'><strong>ans:</strong> Of course, yes!!!</p>
                </div>
                <div className='bg-slate-200 rounded-lg p-5 mt-5'>
                    <p className='text-xl font-bold mb-2'>2. If I face any problem then can I get any help from CS-HUB?</p>
                    <p className='text-lg'><strong>ans:</strong> Sure, you can call or mail us any ti className='font-bold'me.</p>
                </div>
                <div className='bg-slate-200 rounded-lg p-5 mt-5'>
                    <p className='text-xl font-bold mb-2'>3. The course is update or not?</p>
                    <p className='text-lg'><strong>ans:</strong> Every course from our site is updated.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;