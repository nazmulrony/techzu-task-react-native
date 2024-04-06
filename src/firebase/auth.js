import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/UserProvider";
import { db } from "../../firebase.config";
import { Timestamp, addDoc, collection, getDoc } from "firebase/firestore";

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

// export const getAuthenticatedUser = async (email) => {
//     const q = await query(userCollection, where("email", "==", email));
//     const userSnapshot = await getDoc(q);
//     if (userSnapshot.size > 0) {
//         const user = userSnapshot.docs[0].data();
//         user.id = userSnapshot.docs[0].id;
//         return user;
//     } else {
//         return null;
//     }
// };
