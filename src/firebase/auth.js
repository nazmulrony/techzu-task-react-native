import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/UserProvider";
import { db } from "../../firebase.config";
import {
    Timestamp,
    addDoc,
    collection,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";

const userCollection = collection(db, "users");

export const signupRequest = async ({ email, password, name, photoUrl }) => {
    // return await createUserWithEmailAndPassword(auth, email, password);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res.user) {
        const userData = {
            createdAt: Timestamp.now(),
            name,
            email,
            photoUrl,
        };
        return await addDoc(userCollection, userData);
    }
};

export const loginRequest = async ({ email, password }) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export async function getUsersRequest(email) {
    const q = await query(userCollection, where("email", "==", email));
    const usersSnapshot = await getDocs(q);
    const users = usersSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    return users;
}

export async function getUserByEmailRequest(email) {
    const q = await query(userCollection, where("email", "==", email));
    const usersSnapshot = await getDocs(q);
    if (usersSnapshot.docs.length === 0) {
        return null;
    }
    const userDoc = usersSnapshot.docs[0];
    const user = userDoc.data();
    return user;
}
