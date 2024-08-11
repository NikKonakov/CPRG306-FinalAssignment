import { db } from "./firebaseConfig";
import { collection, getDocs, getDoc, setDoc, addDoc, query } from "firebase/firestore";

// Get all months for a specific year of a user
export const getMonths = async (userId, yearId) => {
    const monthsRef = collection(db, 'Users', userId, 'Year', yearId, 'Month');
    const q = query(monthsRef);
    const querySnapshot = await getDocs(q);
    const months = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return months;
};

// Get specific month data for a user and year
export const getMonthData = async (userId, yearId, monthId) => {
    const monthRef = doc(db, 'Users', userId, 'Year', yearId, 'Month', monthId);
    const monthDoc = await getDoc(monthRef);
    if (monthDoc.exists()) {
        return { id: monthDoc.id, ...monthDoc.data() };
    }
    return null;
};

// Constructor for userData
export const createUserData = (access, subscriptionStatus) => {
    return {
        Access: access,
        Date_Created: new Date(),
        Subscription_Status: subscriptionStatus,
        Last_Login: new Date(),
    };
};

// Add a new user document
export const addUser = async (userId, userData) => {
    const userRef = doc(db, 'Users', userId);
    await setDoc(userRef, userData);
    return userRef.id;
};

// Add a new year document for a specific user
export const addYear = async (userId, yearId, yearData) => {
    const yearRef = doc(collection(db, 'Users', userId, 'Year'), yearId);
    await setDoc(yearRef, yearData);
    return yearRef.id;
};

// Add a new month document for a specific year of a user
export const addMonth = async (userId, yearId, monthId, monthData) => {
    const monthRef = doc(collection(db, 'Users', userId, 'Year', yearId, 'Month'), monthId);
    await setDoc(monthRef, monthData);
    return monthRef.id;
};