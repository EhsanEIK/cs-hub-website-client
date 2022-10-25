import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../contexts/DarkModeProvider/DarkModeProvider';

const LeftSideNav = () => {
    const { dark } = useContext(DarkModeContext);

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://cs-hub-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <ul className={`menu w-56 p-2 rounded-box${dark ? 'bg-slate-800 text-gray-500' : 'bg-base-100'}`}>
                {
                    courses.map(course => <li className="bordered bg-slate-200 text-rose-600 mb-3"
                        key={course.id}>
                        <Link to={`/courses/description/${course.id}`}>{course.title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideNav;