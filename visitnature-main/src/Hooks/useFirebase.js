import { useState, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signOut, signInWithPopup,onAuthStateChanged  } from "firebase/auth";
import initializationAuthFirebase from "../pages/Login/Firebase/firebase.initialize";
    initializationAuthFirebase();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch(err => {
            const error = err.message;
            setError(error);
        })
        .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            
        }).catch((error) => {
            setError(error);
        })
        .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        handleGoogleSignIn,
        logout,
        isLoading
    }
}

export default useFirebase;