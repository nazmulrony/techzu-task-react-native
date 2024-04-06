import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../styles";
import { UserContext, auth } from "../utils/UserProvider";

const SettingsScreen = () => {
    const { user, userDetails } = useContext(UserContext);
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={
                            userDetails?.photoUrl
                                ? { uri: userDetails?.photoUrl }
                                : require("./../../assets/user.jpg")
                        }
                        style={styles.image}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.info}>Name: </Text>
                    <Text style={styles.infoItem}>
                        {userDetails?.name ?? "No name found"}
                    </Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>Email: </Text>
                    <Text style={styles.infoItem}>{userDetails?.email}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>Verification: </Text>
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
        gap: 8,
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
    info: {
        color: colors.muted,
        width: 100,
        fontWeight: "500",
    },
    infoItem: {
        fontWeight: "500",
        color: colors.muted,
        backgroundColor: colors.background,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
});
