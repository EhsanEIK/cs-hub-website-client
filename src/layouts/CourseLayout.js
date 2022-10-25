import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Courses/LeftSideNav/LeftSideNav';

const CourseLayout = () => {
    return (
        <div className='grid grid-cols-6 gap-80'>
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="col-span-4 mt-6 mb-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;