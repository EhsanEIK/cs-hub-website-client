import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    // provider for social media sign in
    const signInWithSocialMedia = provider => {
        return signInWithPopup(auth, provider);
    }

    // create user with email & password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile during registration
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        user,
        signInWithSocialMedia,
        createUser,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;