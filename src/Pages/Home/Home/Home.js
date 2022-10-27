import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Statistics from '../Statistics/Statistics';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <>
            <TopHeader></TopHeader>
            <About></About>
            <Statistics></Statistics>
        </>
    );
};

export default Home;