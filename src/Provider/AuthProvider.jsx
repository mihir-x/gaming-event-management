import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    },[])

    const authInfo = {
        user,
        createUser,
        logIn,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}