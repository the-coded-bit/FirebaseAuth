import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebase';

export const authContext = createContext({ authUser: null, loading: true });

function AuthWrapper({ children }) {
    
    //user and loading status
    const [loadingStatus, setloading] = useState(true);
    const [authUser, setauthUser] = useState(null);



    useEffect(() =>{
        console.log('use effect of authwrapper');
        onAuthStateChanged(auth, async (user) =>{
            console.log('on auth state changed triggered');
            if(!user){
                console.log('user not found');
                setauthUser(null);
                setloading(false);
            }
            else{
                setloading(true);
                console.log('printing user from use effect of authwrapper =', user);
                setauthUser(user);
                setloading(false);
            }
        })
    }, []);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }


    function logout() {
        return signOut(auth);
    }


    const options = {
        authUser,
        signup,
        login,
        logout,
        loadingStatus,
        setloading,
        setauthUser
    };

    console.log('render of authWrapper ');
    return (
        <authContext.Provider value={options} >
            {!loadingStatus && children}
        </authContext.Provider>
    )
}

export default AuthWrapper;