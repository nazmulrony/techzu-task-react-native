import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../styles";
import { UserContext, auth } from "../utils/UserProvider";
import { app } from "../../firebase.config";

const SettingsScreen = () => {
    const { user } = useContext(UserContext);
    const currentUser = getAuth(app).currentUser;
    console.log(currentUser);
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={
                            user?.photoURL
                                ? { uri: user.photoURL }
                                : require("./../../assets/user.jpg")
                        }
                        style={styles.image}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text>Name: </Text>
                    <Text style={styles.infoItem}>
                        {user?.name ?? "No name found"}
                    </Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text>Email: </Text>
                    <Text style={styles.infoItem}>{user?.email}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text>Email Verification: </Text>
                    <Text style={styles.infoItem}>
                        {user?.emailVerified ? "verified" : "not verified"}
                    </Text>
                </View>

                <Button mode="contained" onPress={() => signOut(auth)}>
                    Logout
                </Button>
            </View>
        </View>
    );
};
export default SettingsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 10,
    },
    container: {
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
        gap: 16,
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 16,
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginHorizontal: "auto",
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    infoItem: {
        fontWeight: "500",
        color: colors.muted,
    },
});
