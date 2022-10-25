import React, { useContext } from 'react';
import { PdfContext } from '../Description/Description';

const PDF = () => {
    const { course, pdfRef } = useContext(PdfContext);
    const { image, title, description } = course;

    return (
        <div ref={pdfRef} className="descripiton-card">
            <div className="card-header flex justify-between items-center p-5">
                <h2 className="text-4xl text-center">{title}</h2>
            </div>
            <figure><img src={image} alt={title} className="w-auto h-auto" /></figure>
            <div style={{ width: '750px', paddingLeft: '20px' }}>
                <p className=''>{description}</p>
            </div>
        </div>
    );
};

export default PDF;