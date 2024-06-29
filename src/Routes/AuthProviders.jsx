import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';
import axios from "axios";



export const AuthContext = createContext(null); 

const AuthProviders = ({children}) => {
    const [ user, setUser] = useState([]); 
    const [loading, setLoading] = useState(true); 

    const createUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userLogin = (email, password) => {
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password); 

    }

    const userLogout = () => {
        setLoading(true); 
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            setLoading(false); 
            console.log('current user', currentUser); 
            const userEmail = currentUser?.email || user?.email; 

            const loggedUser = {email : userEmail}; 
            console.log(loggedUser)
            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials : true})
                .then(res => {
                    console.log(res.data); 
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials : true} )
                .then(res => {
                    console.log(res.data);
                })
            }

        }); 

        return () => {
            unSubcribe(); 
        }
    },[])


    const userInfo = {
        user, 
        loading, 
        createUser,
        userLogin, 
        userLogout

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}    
        </AuthContext.Provider>
    );
};

export default AuthProviders;