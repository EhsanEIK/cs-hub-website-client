import React, { useContext } from 'react';
import { DarkModeContext } from '../../../contexts/DarkModeProvider/DarkModeProvider';

const About = () => {
    const { dark } = useContext(DarkModeContext);

    return (
        <div className='md:mx-0 mx-3'>
            <div className={`hero rounded-lg mt-28 ${dark ? 'bg-gray-600 text-white' : 'bg-base-200'}`}>
                <div className="hero-content flex-col lg:flex-row-reverse p-10">
                    <img src="https://www.purdueglobal.edu/blog/it/what-can-you-do-with-masters-in-it.jpg" className="w-auto rounded-lg shadow-2xl" alt='img' />
                    <div>
                        <h1 className="md:text-5xl text-4xl font-bold">About Us</h1>
                        <p className="py-6">We provide the lates coures on Computer Sciecne and Engineering(CSE). It will help you to choose your best career path. Career options in CSE include software developers, hardware engineers, system designers, system analysts, database administrators and more. One must have analytical and programming skills, basic knowledge of web design, ideas of machine learning and algorithms to pursue a CSE course.</p>

                    </div>
                </div>
            </div >
        </div>
    );
};

export default About;