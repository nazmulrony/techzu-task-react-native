import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCFwSaKocGA7UunHNyYWt5XrLGhZJGSD18",
    authDomain: "techzu-task.firebaseapp.com",
    projectId: "techzu-task",
    storageBucket: "techzu-task.appspot.com",
    messagingSenderId: "722125701685",
    appId: "1:722125701685:web:37be6ea478422f619d677c",
    measurementId: "G-Y4X0C535DV",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
