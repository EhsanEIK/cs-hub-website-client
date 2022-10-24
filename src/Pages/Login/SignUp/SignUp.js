import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSignUpSubmit = event => {
        event.preventDefault();
        setErrorMsg('');

        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            return setErrorMsg("Password does not matched with confirm password.");
        }
        if (password.length < 6) {
            return setErrorMsg("Password should be at least 6 character.");
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            return setErrorMsg("Password should be at least one upper case letter.");
        }
        if (!/(?=.*[a-z])/.test(password)) {
            return setErrorMsg("Password should be at least one lower case letter.");
        }
        if (!/(?=.*[0-9])/.test(password)) {
            return setErrorMsg("Password should be at least one numerical digit.");
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            return setErrorMsg("Password should be at least one special character.");
        }

        createUser(email, password)
            .then(result => { })
            .catch(error => setErrorMsg(error.message));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="form-control">
                                <p className='text-red-600 text-sm'>{errorMsg}</p>
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