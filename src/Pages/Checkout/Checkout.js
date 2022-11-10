import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Checkout = () => {
    // custome title in the website
    useTitle('Checkout');

    const { user } = useContext(AuthContext);
    const course = useLoaderData();
    const { title, price } = course;

    const vat = price * 0.1;
    const totalPrice = price + vat;

    return (
        <div>
            <h1 className='text-3xl text-center my-10'>Checkout for <span className='font-bold'>{title}</span> course</h1>
            <div className='container md:mx-auto mx-3 md:w-96 w-auto'>
                <div className="bg-base-100 rounded-xl shadow-2xl p-10">
                    <div>
                        <p className='text-lg font-bold mb-2'>
                            Price: <span className='text-red-600'>{price}$</span></p>
                        <p className='text-lg font-bold mb-2'>
                            Vat: <span className='text-red-600'>{vat}$</span></p>
                        <p className='text-lg font-bold mb-2'>
                            Total Price: <span className='text-red-600'>{totalPrice}$</span></p>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="my-modal" className="modal-button w-full btn btn-primary">Checkout Confirm</label>
                    </div>

                    {/* modal start */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Congratulations <span className='text-cyan-800'>{user?.displayName}</span></h3>
                            <p className="pt-4">Your purchase has been successful.
                            </p>
                            <p>The course you are enrolled for <span className='font-bold'>{title}</span>.
                            </p>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">Yay!</label>
                            </div>
                        </div>
                    </div>
                    {/* modal end */}
                </div>
            </div>
        </div >
    );
};

export default Checkout;