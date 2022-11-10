import React, { useRef } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import useTitle from '../../../hooks/useTitle';
import './Description.css';

const Description = () => {
    const course = useLoaderData();
    const { id, image, title, description, price, duration } = course;

    // custome title in the website
    useTitle(`${title} Course`);

    const pdfRef = useRef();

    return (
        <div className='md:mx-0 mx-3'>
            <div ref={pdfRef} className="card card-compact md:w-auto w-auto descripiton-card bg-slate-200 shadow-xl">
                <div className="card-header flex justify-between items-center p-5">
                    <h2 className="card-title">{title}</h2>
                    <Pdf targetRef={pdfRef} filename={`${title}.pdf`}>
                        {({ toPdf }) => <FaFileDownload onClick={toPdf} className='w-8 h-8 cursor-pointer text-red-600 hover:text-red-700' />}
                    </Pdf>
                </div>
                <figure><img src={image} alt={title} className="w-full md:h-96 h-auto" /></figure>
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
                            <Link to={`/checkout/${id}`}>
                                <button className="btn btn-outline btn-primary">Get Premium Access</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Description;