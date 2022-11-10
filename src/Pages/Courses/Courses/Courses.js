import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Course from '../Course/Course';

const Courses = () => {
    // custome title in the website
    useTitle('All Courses');

    const courses = useLoaderData();

    return (
        <div>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:mx-0 mx-3 gap-5'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;