import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9x3iKf_AtgY8GHK_cnBHnmghZTycDu1o",
    authDomain: "coderhouse-react-01.firebaseapp.com",
    projectId: "coderhouse-react-01",
    storageBucket: "coderhouse-react-01.appspot.com",
    messagingSenderId: "236944979910",
    appId: "1:236944979910:web:4968d984fa7df3498124c7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);