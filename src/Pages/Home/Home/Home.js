import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <>
            <TopHeader></TopHeader>
            <About></About>
        </>
    );
};

export default Home;