import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {
    getAuth,
    getReactNativePersistence,
    initializeAuth,
    onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { app } from "../../firebase.config";

export const UserContext = createContext();
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;
const styles = StyleSheet.create({});
