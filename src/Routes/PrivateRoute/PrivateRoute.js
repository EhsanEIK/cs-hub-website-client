import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-5">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-500" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;