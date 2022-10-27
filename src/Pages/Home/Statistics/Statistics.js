import React, { useContext } from 'react';
import { DarkModeContext } from '../../../contexts/DarkModeProvider/DarkModeProvider';

const Statistics = () => {
    const { dark } = useContext(DarkModeContext);

    return (
        <div className={`text-center mt-28 md:mx-0 mx-3 ${dark ? 'text-white' : ''}`}>
            <h1 className='text-5xl font-bold'>Our Statistics</h1>
            <div className='divider mt-2 mb-10'></div>
            <div className={`md:flex block text-2xl rounded-xl shadow w-full h-full ${dark ? 'bg-gray-600 text-white' : ''}`}>
                <div className="stat place-items-center">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to October 1st</div>
                </div>

                <div className={`stat place-items-center ${dark ? 'text-warning' : 'text-primary'}`}>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">10,200</div>
                    <div className="stat-desc">↗︎ 50 (5%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Students</div>
                    <div className="stat-value">2,500</div>
                    <div className="stat-desc">↗︎ 90 (20%)</div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;