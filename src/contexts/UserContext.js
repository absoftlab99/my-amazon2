import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const logInWithPopUp = () =>{
        return signInWithPopup(auth, provider)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {createUser, loginUser, logOut, user, logInWithPopUp, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;