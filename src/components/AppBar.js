import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Divider, Menu } from "react-native-paper";
import { UserContext, auth } from "../utils/UserProvider";
import UserProfile from "./UserProfile";

const AppBar = () => {
    const { user } = useContext(UserContext);

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <Menu
            style={styles.container}
            visible={visible}
            onDismiss={closeMenu}
            anchor={<UserProfile user={user} onPress={openMenu} />}
        >
            <Menu.Item onPress={() => {}} title={user?.email} />

            <Divider />
            <Menu.Item
                trailingIcon="logout"
                onPress={() => {
                    closeMenu();
                    signOut(auth);
                }}
                title="Logout"
            />
        </Menu>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
});
