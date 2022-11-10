import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { DarkModeContext } from '../../../contexts/DarkModeProvider/DarkModeProvider';
import useTitle from '../../../hooks/useTitle';

const SignIn = () => {
    // custome title in the website
    useTitle('Sign In');

    const { dark } = useContext(DarkModeContext);
    const { signIn, signInWithSocialMedia, passwordResetEmail } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // get the current location for navigate route after login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    // google signin method
    const handleGoogleSignIn = () => {
        signInWithSocialMedia(googleProvider)
            .then(r => {
                toast.success("Login Successfully!!!");
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    // github signin method
    const handleGithubSignIn = () => {
        signInWithSocialMedia(githubProvider)
            .then(r => {
                toast.success("Login Successfully!!!");
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    // sign in with email & password
    const handleSignInSubmit = event => {
        event.preventDefault();
        setErrorMsg('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                toast.success("Login Successfully!!!");
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => setErrorMsg(error.message));
    }

    // set user email by onBlur
    const setUserEmailByOnblur = event => {
        setUserEmail(event.target.value)
    }

    // password reset email
    const handlePasswordResetEmail = () => {
        passwordResetEmail(userEmail)
            .then(result => {
                if (!userEmail) {
                    return alert('Please enter your email.');
                }
                toast.success('Please check your email to reset password.');
            })
            .catch(error => console.error(error));
    }

    return (
        <div className={`hero min-h-screen ${dark ? 'bg-slate-800 text-gray-500' : 'bg-base-200'}`}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignIn!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignInSubmit}>
                            <div className="form-control">
                                <p className='text-red-600 text-md text-center'>{errorMsg}</p>
                                <label htmlFor='email' className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={setUserEmailByOnblur} type="email" id='email' name='email' placeholder="enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label htmlFor='password' className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" id='password' name='password' placeholder="enter your password" className="input input-bordered" />
                                <label className="label">
                                    <span className='text-xs'>Don't have an account? <Link className='text-amber-700 link link-hover' to='/signup'>Sign Up</Link></span>
                                    <button onClick={handlePasswordResetEmail} type='submit' className="label-text-alt link link-hover">Reset password?</button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Sign In</button>
                            </div>
                        </form>
                        <div className="form-control mt-1">
                            <button onClick={handleGoogleSignIn} className="btn btn-warning">
                                <FaGoogle /> <span className='ml-2'>SignIn via Google</span>
                            </button>
                        </div>
                        <div className="form-control mt-1">
                            <button onClick={handleGithubSignIn} className="btn btn-dark">
                                <FaGithub /> <span className='ml-2'>SignIn via Github</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;