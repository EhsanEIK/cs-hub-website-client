import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div>
            <h1>Total Courses: {courses.length}</h1>
        </div>
    );
};

export default Courses;