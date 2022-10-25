import React from 'react';

const Course = ({ course }) => {
    const { title, image, duration, price } = course;

    return (
        <div className="card w-auto h-48 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{duration} months</div>
                    <div className="badge badge-outline">{price} $</div>
                </div>
            </div>
        </div>
    );
};

export default Course;