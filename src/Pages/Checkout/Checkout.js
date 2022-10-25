import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { title, price } = course;

    const vat = price * 0.1;
    const totalPrice = price + vat;

    return (
        <div>
            <h1 className='text-3xl text-center my-10'>Checkout for <span className='font-bold'>{title}</span> course</h1>
            <div className='container mx-auto w-96'>
                <div className="bg-base-100 rounded-xl shadow-2xl p-10">
                    <div>
                        <p className='text-lg font-bold mb-2'>
                            Price: <span className='text-red-600'>{price}</span></p>
                        <p className='text-lg font-bold mb-2'>
                            Vat: <span className='text-red-600'>{vat}</span></p>
                        <p className='text-lg font-bold mb-2'>
                            Total Price: <span className='text-red-600'>{totalPrice}</span></p>
                    </div>

                    <div className="mt-6">
                        <button className="w-full btn btn-primary">Checkout Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;