import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyD-LcB8sagIHNWIEOf6dnV1T8iIpfeVpJE",
    authDomain: "enliven-30c7e.firebaseapp.com",
    projectId: "enliven-30c7e",
    storageBucket: "enliven-30c7e.appspot.com",
    messagingSenderId: "862598587365",
    appId: "1:862598587365:web:09f209bee1e21991ecc50c",
    measurementId: "G-7XQDY60B2W",
};

const app = initializeApp(firebaseConfig);

// console.log(firebaseConfig)

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);