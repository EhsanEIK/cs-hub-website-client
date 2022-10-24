import React, { createContext, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';

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

    // verify email during registration
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // sign in with email & password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // variable of provider value
    const authInfo = {
        user,
        signInWithSocialMedia,
        createUser,
        updateUserProfile,
        verifyEmail,
        signIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;