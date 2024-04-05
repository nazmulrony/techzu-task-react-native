import { signOut } from "firebase/auth";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { UserContext, auth } from "../utils/UserProvider";
import { useContext } from "react";
import { colors } from "../../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = () => {
    const { user } = useContext(UserContext);
    console.log({ user });
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
    },
});
