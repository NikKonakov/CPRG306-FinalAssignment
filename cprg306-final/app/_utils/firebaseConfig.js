import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState, useEffect, useContext, createContext } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBFRql0PxrXAn-o-_OQhhHW5ikwLldyaU8",
    authDomain: "abc-finance-14448.firebaseapp.com",
    projectId: "abc-finance-14448",
    storageBucket: "abc-finance-14448.appspot.com",
    messagingSenderId: "975251525817",
    appId: "1:975251525817:web:db1bfcb1c06b99c0578b68",
    measurementId: "G-F245NTVYJ9"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Error signing in with Google:", error);
        throw error;
    }
};

export const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Error signing in with GitHub:", error);
        throw error;
    }
};

export { auth, db };
