import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const UserProfile = ({ onPress, user }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image
                source={
                    user?.photoURL
                        ? { uri: user.photoURL }
                        : require("./../../assets/user.jpg")
                }
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
});
