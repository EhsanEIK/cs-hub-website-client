import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // provider for social media sign in
    const signInWithSocialMedia = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // create user with email & password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email & password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update user profile during registration
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    // verify email during registration
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // password reset email
    const passwordResetEmail = email => {
        return sendPasswordResetEmail(auth, email);
    }

    // get signed in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    // variable of provider value
    const authInfo = {
        user,
        loading,
        signInWithSocialMedia,
        createUser,
        updateUserProfile,
        verifyEmail,
        passwordResetEmail,
        signIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;