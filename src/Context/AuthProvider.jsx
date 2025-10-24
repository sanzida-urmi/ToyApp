import { useEffect, useState } from "react";
import {auth} from "../Firebase/Firebase.config";
import { onAuthStateChanged, sendPasswordResetEmail, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";

  function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateProfileFunction =(displayName, photoURL) =>{
      return updateProfile(auth.currentUser, {
        displayName, photoURL,
      })
    }
  
  const signoutFunction =() =>{
    setLoading(true);
    return signOut(auth);
  }

  const passResetFunction =(email) =>{
    setLoading(true);
    return sendPasswordResetEmail(auth,email);
  }

    const info = {
    user, setUser, signoutFunction, passResetFunction, updateProfileFunction, loading, setLoading
  }

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (cuser)=>{
    console.log(cuser);
    setUser(cuser);
    setLoading(false);
  });

  return ()=>{
    unsubscribe();
  };
}, []);


    return <AuthContext value={info}>{children}</AuthContext>

}

export default AuthProvider
