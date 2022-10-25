import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
            console.log('Auth State Changed', currentUser);
        })

        return () =>{
            unsubscribe();
        }
    }, [])

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
       return signOut(auth);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {user, createUser, signIn, logOut, loading, googleSignIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;