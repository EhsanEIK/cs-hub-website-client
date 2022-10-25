import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Description = () => {
    const course = useLoaderData();
    const { id, image, title, description, price, duration } = course;

    return (
        <div>
            <div className="card card-compact w-full bg-slate-200 shadow-xl">
                <div className="card-header flex justify-between items-center p-5">
                    <h2 className="card-title">{title}</h2>
                    <FaFileDownload className='w-8 h-8 cursor-pointer text-amber-500 hover:text-amber-600' />
                </div>
                <figure><img src={image} alt={title} className="w-full h-96" /></figure>
                <div className="card-body">
                    <p className='px-5'>{description}</p>
                    <div className='flex justify-between items-center px-5'>
                        <div className='flex gap-x-4 text-lg'>
                            <div>
                                <span className='font-bold mr-1'>Duration:</span><p className="badge">{duration} months</p></div>
                            <div>
                                <span className='font-bold mr-1'>Price:</span><p className="badge">{price} $</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-primary">Get Premium Access</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;