import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/UserProvider";

export const signupRequest = async ({ email, password }) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginRequest = async ({ email, password }) => {
    return await signInWithEmailAndPassword(auth, email, password);
};
