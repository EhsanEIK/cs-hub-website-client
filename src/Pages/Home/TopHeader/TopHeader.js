import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpaperset.com/w/full/5/b/f/181254.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Learn!!!</h1>
                    <p className="max-w-md mb-5">Computer Science Engineering (CSE) encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software, and computer hardware. Computer Science engineering has roots in electrical engineering, mathematics, and linguistics.</p>
                    <Link to='/courses'>
                        <button className="btn btn-info">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;