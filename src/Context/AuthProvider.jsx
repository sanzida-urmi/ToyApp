import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

function AuthProvider({ children }) {
      const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

       const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  const signoutUserFunc = () => {
    setLoading(true);
    return signOut(auth);
  };
  const sendPassResetEmailFunc = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    signoutUserFunc,
    sendPassResetEmailFunc,
    updateProfileFunc,
    loading,
     setLoading
  };

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

    return <AuthContext value={authInfo}>{children}</AuthContext>;

}

export default AuthProvider
