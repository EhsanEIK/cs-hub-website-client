import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignIn = () => {
    const { signIn, signInWithSocialMedia } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google signin method
    const handleGoogleSignIn = () => {
        signInWithSocialMedia(googleProvider)
            .then(r => { })
            .catch(error => console.error(error))
    }

    // google signin method
    const handleGithubSignIn = () => {
        signInWithSocialMedia(githubProvider)
            .then(r => { })
            .catch(error => console.error(error))
    }

    // sign in with email & password
    const handleSignInSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                toast.success("Login Successfully!!!");
                form.reset();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignIn!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignInSubmit}>
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
                                <label className="label">
                                    <span className='text-xs'>Don't have an account? <Link className='text-amber-700 link link-hover' to='/signup'>Sign Up</Link></span>
                                    <a href="1" className="label-text-alt link link-hover">Forgot password?</a>
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