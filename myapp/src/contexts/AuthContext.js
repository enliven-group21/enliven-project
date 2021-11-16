import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from '@firebase/auth';
import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signout() {
        return signOut(auth);
    }

    function update(displayName, email, photoURL, bio) {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            bio: bio,
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        signout,
        update
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

