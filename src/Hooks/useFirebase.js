import { useState, useEffect } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signOut,
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth";
import initializationAuthFirebase from "../pages/Login/Firebase/firebase.initialize";

// ফায়ারবেস ইনিশিয়ালাইজেশন
initializationAuthFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({}); // শুরুতে একটি খালি অবজেক্ট দেওয়া ভালো
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // গুগল সাইন ইন
    const handleGoogleSignIn = () => {
        setIsLoading(true); // লোডিং শুরু
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError(''); // সাকসেস হলে এরর ক্লিয়ার করুন
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false));
    }

    // ইউজার স্টেটের ওপর নজর রাখা (Observer)
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        // ব্রাউজার মেমোরি ক্লিয়ার করার জন্য রিটার্ন ফাংশন
        return () => unsubscribed();
    }, [auth]); // এখানে 'auth' যোগ করায় এররটি চলে যাবে

    // লগ আউট
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        isLoading,
        handleGoogleSignIn,
        logout
    };
}

export default useFirebase;