import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase';


export const AuthContext=createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvidre = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


    const register=(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
      const unsubsCribe=  onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
       return ()=>{
        unsubsCribe();
       }
    },[])
    const authInfo={user,loading,register,login,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidre;