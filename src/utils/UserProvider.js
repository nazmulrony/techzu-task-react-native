import { createContext, useState } from "react";
import { StyleSheet } from "react-native";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;
const styles = StyleSheet.create({});
