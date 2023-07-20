//useState for stateful components, useEffect for automatic function fire, useConteext to create the context
import React, {useState, useEffect, useContext} from 'react'
//import Auth object from base.js
import {auth} from '../base'
//Firebase functions for logging in with Github
import {GithubAuthProvider, signInWithPopup, signOut} from 'firebase/auth'

//Create a storage object for the context with auth info
const AuthContext = React.createContext()

//function to allow context in components
export function useAuth() {
    return useContext(AuthContext)
}

//provides the AuthContext info for the children components
export default function AuthProvider({children}) {
  
    //hooks: store current user and another to dtermine if context has info for the child
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    //login functionality
    //instantiating githubAuthProvider object
    const githubAuthProvider = new GithubAuthProvider()

    async function login() {
        return (signInWithPopup(auth, githubAuthProvider).then(authData => {
            console.log(authData)
            setCurrentUser(authData.user)
        }))
    }

    async function logout() {
        signOut(auth).then(setCurrentUser(null))
    }

    //Object to hold currentUser, login, and logout. Use this object as a prop
    const value = {currentUser, login, logout}

    //useEffect
    useEffect( () => {
        const authChange = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return authChange
    },[]);

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}
