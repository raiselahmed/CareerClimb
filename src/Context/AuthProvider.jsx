import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firevbase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // creat a new user
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // useEffect(() => {
  //   const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log("state capture", currentUser?.email);

  //     if (currentUser?.email) {
  //       const user = { email: currentUser.email };

  //       axios.post("http://localhost:5000/jwt", user).then((res) => {
  //         console.log("login token", res.data);
  //         setLoading(false);
  //       });
  //     } else {
  //       axios
  //         .post(
  //           "http://localhost:5000/logout",
  //           {},
  //           {
  //             withCredentials: true,
  //           }
  //         )
  //         .then((res) => {
  //           console.log("logout", res.data);
  //           setLoading(false);
  //         });
  //     }
  //   });
  //   return () => {
  //     unsubcribe();
  //   };
  // }, []);

  //signOut
 
 
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log("Auth State Changed:", currentUser?.email);

    if (currentUser?.email) {
      const user = { email: currentUser.email };

      axios
        .post("http://localhost:5000/jwt", user, { withCredentials: true })
        .then((res) => {
          console.log("Login Token:", res.data);
        })
        .catch((err) => {
          console.error("JWT Generation Error:", err.response || err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      axios
        .post("http://localhost:5000/logout", {}, { withCredentials: true })
        .then((res) => {
          console.log("Logout:", res.data);
        })
        .catch((err) => {
          console.error("Logout Error:", err.response || err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  });

  return () => {
    unsubscribe();
  };
}, []);

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // googleSignup
  const googleProvider = new GoogleAuthProvider();
  const googleSignup = () => {
    return signInWithPopup(auth, googleProvider)
      .then((res) => {
        setLoading(true);
        console.log(res);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const authInfo = {
    user,
    loading,
    creatUser,
    signInUser,
    signOutUser,
    googleSignup,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
