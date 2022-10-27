import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Instructors from '../Instructors/Instructors';
import Statistics from '../Statistics/Statistics';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <>
            <TopHeader></TopHeader>
            <About></About>
            <Statistics></Statistics>
            <Instructors></Instructors>
        </>
    );
};

export default Home;