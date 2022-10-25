import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Courses/LeftSideNav/LeftSideNav';

const CourseLayout = () => {
    return (
        <div className='grid md:grid-cols-6 grid-cols-1 md:gap-80'>
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-4 mt-6 mb-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;