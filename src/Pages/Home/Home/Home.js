import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Instructors from '../Instructors/Instructors';
import Statistics from '../Statistics/Statistics';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    // custome title in the website
    useTitle('Home');

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