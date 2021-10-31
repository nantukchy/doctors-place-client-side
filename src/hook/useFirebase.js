import { GoogleAuthProvider,getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
        })
        
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        })
    }

    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
            else {
                setUser({})
            }
            
        });
        return () => unsubscribed;
    }, []);
    
  

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;