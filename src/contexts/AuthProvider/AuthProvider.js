import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    // provider for social media sign in
    const signInWithSocialMedia = provider => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        user,
        signInWithSocialMedia,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;