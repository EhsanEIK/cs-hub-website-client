import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Description = () => {
    const course = useLoaderData();
    const { title } = course;

    return (
        <div>
            <h1>{title} Course description</h1>
        </div>
    );
};

export default Description;