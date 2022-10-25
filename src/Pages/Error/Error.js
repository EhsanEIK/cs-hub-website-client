import React from 'react';

const Error = () => {
    return (
        <div className='container md:mx-auto w-auto bg-slate-200 text-red-600 text-center rounded-xl mt-20 mx-5 p-20'>
            <h1 className='text-5xl font-bold'>ERROR 404 FOUND!!!</h1>
            <p className='text-lg text-black mt-4'>This path is not available.</p>
        </div>
    );
};

export default Error;