import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Courses/LeftSideNav/LeftSideNav';

const CourseLayout = () => {
    return (
        <div className='grid grid-cols-6'>
            <div className="col-span-2">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="col-span-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;