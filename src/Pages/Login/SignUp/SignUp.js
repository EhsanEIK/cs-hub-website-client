import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label htmlFor='fullName' className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" id='fullName' name='fullName' placeholder="enter your full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label htmlFor='photoURL' className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" id='photoURL' name='photoURL' placeholder="enter your photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label htmlFor='email' className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" id='email' name='email' placeholder="enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label htmlFor='password' className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" id='password' name='password' placeholder="enter your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label htmlFor='confirm' className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" id='confirm' name='confirm' placeholder="confirm password" className="input input-bordered" required />
                                <label className="label">
                                    <span className='text-xs'>Already have an account? <Link className='text-amber-700 link link-hover' to='/signin'>Sign In</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;