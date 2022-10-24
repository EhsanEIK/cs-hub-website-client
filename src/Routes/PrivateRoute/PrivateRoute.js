import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div class="flex justify-center items-center mt-5">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-500" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/signin'></Navigate>
};

export default PrivateRoute;